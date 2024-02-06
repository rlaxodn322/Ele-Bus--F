import React, { useEffect } from 'react';

interface MapComponentProps {
  markerPositions: { title: string; latlng: { lat: number; lng: number } }[];
  mapHeight: string | number;
}

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    kakao: any;
  }
}
const markerPositions = [
  { title: '하남운수', latlng: { lat: 37.549899, lng: 127.216505 } },
  { title: '오산운수', latlng: { lat: 37.149528, lng: 127.077071 } },
  { title: '수원운수', latlng: { lat: 37.263573, lng: 127.028601 } },
  { title: '평택운수', latlng: { lat: 36.990437, lng: 127.092379 } },
  { title: '부산운수', latlng: { lat: 35.179554, lng: 129.075642 } },
  { title: '부산운수', latlng: { lat: 35.179554, lng: 129.075642 } },
  { title: '안성운수', latlng: { lat: 36.990437, lng: 127.092379 } },
  { title: '포항운수', latlng: { lat: 36.019986, lng: 129.342938 } },
  { title: '울산운수', latlng: { lat: 35.538377, lng: 129.311359 } },
  { title: '대구운수', latlng: { lat: 35.871435, lng: 128.601445 } },
  { title: '대구운수', latlng: { lat: 35.871435, lng: 128.601445 } },
  { title: '대천운수', latlng: { lat: 36.491065, lng: 126.494356 } },
  { title: '대천운수', latlng: { lat: 36.491065, lng: 126.494356 } },
];
const MapComponent: React.FC<MapComponentProps> = ({ mapHeight }) => {
  useEffect(() => {
    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(37.144008, 127.06761),
          level: 13,
        };

        const map = new window.kakao.maps.Map(container, options);

        // 클러스터러 생성
        const clusterer = new window.kakao.maps.MarkerClusterer({
          map: map,
          averageCenter: true,
          minLevel: 10,
        });

        // 마커 생성 및 클러스터러에 추가
        markerPositions.forEach(({ title, latlng }) => {
          const marker = new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(latlng.lat, latlng.lng),
            title: title,
          });

          // 클러스터러에 마커 추가
          clusterer.addMarker(marker);

          const infowindow = new window.kakao.maps.InfoWindow({
            content: `<div>${title}</div>`,
          });

          window.kakao.maps.event.addListener(marker, 'mouseover', function () {
            infowindow.open(map, marker);
          });

          window.kakao.maps.event.addListener(marker, 'mouseout', function () {
            infowindow.close();
          });
        });
      });
    };

    // Kakao API 스크립트 로드
    if (typeof window !== 'undefined') {
      const kakaoMapScript = document.createElement('script');
      kakaoMapScript.async = false;
      kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=2b230b26fde09123dfbe3d79c118924d&autoload=false&libraries=clusterer`;
      document.head.appendChild(kakaoMapScript);

      kakaoMapScript.addEventListener('load', onLoadKakaoAPI, { passive: true });
    }

    return () => {
      // Cleanup code if necessary
    };
  }, [mapHeight]);

  return (
    <div>
      <div id="map" style={{ marginTop: '10px', width: '100%', height: mapHeight, borderRadius: '20px' }}></div>
    </div>
  );
};
export default MapComponent;
