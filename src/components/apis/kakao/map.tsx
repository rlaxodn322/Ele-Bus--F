import React, { useState, useEffect } from 'react';

// MapComponentProps의 markerPositions 프로퍼티의 형식을 변경
interface MapComponentProps {
  markerPositions: { title: string; lat: string; lng: string; cpStat: string; chargeTp: string }[];
  mapHeight: string | number;
  busPositions: { x: string; y: string; plateNo: string }[];
}

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    kakao: any;
  }
}

const MapComponent: React.FC<MapComponentProps> = ({ busPositions, markerPositions, mapHeight }) => {
  const [infowindow, setInfowindow] = useState<any>(null);

  useEffect(() => {
    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');

        // const options = {
        //   center: new window.kakao.maps.LatLng(36.34008, 127.56761),
        //   level: 9,
        // };
        const options = {
          center: new window.kakao.maps.LatLng(37.1994932, 127.1311887),
          level: 12,
        };
        const kakao = (window as any).kakao;
        const map = new window.kakao.maps.Map(container, options);
        const imageSrc = 'images/charger-charging-station-svgrepo-com (1).svg', // 마커이미지의 주소입니다
          imageSize = new kakao.maps.Size(45, 69), // 마커이미지의 크기입니다
          imageOption = { offset: new kakao.maps.Point(27, 69) };
        const imageSrc1 = 'images/bus-svgrepo-com (9).svg'; // 마커이미지의 주소입니다

        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
        const markerImage1 = new kakao.maps.MarkerImage(imageSrc1, imageSize, imageOption);

        // 클러스터러 생성
        const clusterer = new window.kakao.maps.MarkerClusterer({
          map: map,
          averageCenter: true,
          minLevel: 5,
          calculator: [5, 10, 5, 10],
        });

        busPositions.forEach(({ x, y, plateNo }) => {
          const marker = new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(y, x),
            image: markerImage1, // 이미지 설정
          });
          // // 클러스터러에 마커 추가
          clusterer.addMarker(marker);

          // 마커를 지도에 추가
          // marker.setMap(map);

          // 마커에 이벤트 리스너 등록
          // 마커를 클릭할 때 인포윈도우를 표시하도록 설정 가능
          const infowindow = new window.kakao.maps.InfoWindow({
            content: `<div>${plateNo}</div>`,
          });

          window.kakao.maps.event.addListener(marker, 'mouseover', function () {
            infowindow.open(map, marker);
          });

          window.kakao.maps.event.addListener(marker, 'mouseout', function () {
            infowindow.close();
          });
        });

        // 마커 생성 및 클러스터러에 추가
        markerPositions.forEach(({ title, lat, lng, cpStat, chargeTp }) => {
          let cpStatusText = '';
          let textColor = '';
          let chargeTpText = '';
          let chargeColor = '';

          // cpStat에 따라 상태 텍스트 설정
          switch (cpStat) {
            case '1':
              cpStatusText = '충전 가능';
              textColor = 'blue'; // 충전 가능이면 파란색
              break;
            case '2':
              cpStatusText = '충전 중';
              textColor = 'green'; // 충전 중이면 초록색
              break;
            case '3':
              cpStatusText = '고장/점검';
              textColor = 'gray'; // 고장/점검이면 검은색
              break;
            case '4':
              cpStatusText = '통신 장애';
              textColor = 'red'; // 통신 장애면 빨간색
              break;
            default:
              cpStatusText = '통신 미연결';
              textColor = 'orange'; // 통신 미연결이면 주황색
              break;
          }
          switch (chargeTp) {
            case '1':
              chargeTpText = '완속';
              chargeColor = 'black';
              break;
            default:
              chargeTpText = '급속';
              chargeColor = 'red';
              break;
          }
          const marker = new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(lat, lng),
            title: title,
            image: markerImage,
          });

          clusterer.addMarker(marker);

          window.kakao.maps.event.addListener(marker, 'click', () => {
            const newInfowindow = new window.kakao.maps.InfoWindow({
              content: `<div style="padding:20px;width:200px;" ><p>${title}<p><p style="color:${chargeColor}">${chargeTpText}</p><p style="color:${textColor}">${cpStatusText}</p></div>`,
            });
            if (infowindow) infowindow.close();
            newInfowindow.open(map, marker);
            setInfowindow(newInfowindow);
          });
        });
        // Close infowindow when clicking outside the markers
        window.kakao.maps.event.addListener(map, 'click', () => {
          if (infowindow) infowindow.close();
        });
      });
    };

    // Kakao API 스크립트 로드
    if (typeof window !== 'undefined') {
      const kakaoMapScript = document.createElement('script');
      kakaoMapScript.async = false;
      kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false&libraries=clusterer`;
      document.head.appendChild(kakaoMapScript);

      kakaoMapScript.addEventListener('load', onLoadKakaoAPI, { passive: true });
    }
    return () => {
      // Cleanup code if necessary
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [busPositions, markerPositions, mapHeight]);
  useEffect(() => {
    // Close infowindow on component unmount
    return () => {
      if (infowindow) infowindow.close();
    };
  }, [infowindow]);
  return (
    <div>
      <div id="map" style={{ marginTop: '10px', width: '100%', height: mapHeight, borderRadius: '20px' }}></div>
    </div>
  );
};
export default MapComponent;
