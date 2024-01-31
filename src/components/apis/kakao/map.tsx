import React, { useEffect } from 'react';

interface CustomWindow extends Window {
  kakao?: any;
}

declare let window: CustomWindow;

const MapComponent = () => {
  useEffect(() => {
    const kakaoMapScript = document.createElement('script');
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=2b230b26fde09123dfbe3d79c118924d&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(37.144008, 127.06761), // Centered at Osan City
          level: 13,
        };

        const map = new window.kakao.maps.Map(container, options);

        // Add markers for 10 locations in Osan City
        const markerPositions = [
          { title: '하남운수', latlng: new window.kakao.maps.LatLng(37.549899, 127.216505) },
          { title: '오산운수', latlng: new window.kakao.maps.LatLng(37.149528, 127.077071) },
          { title: '수원운수', latlng: new window.kakao.maps.LatLng(37.263573, 127.028601) },
          { title: '평택운수', latlng: new window.kakao.maps.LatLng(36.990437, 127.092379) },
          { title: '부산운수', latlng: new window.kakao.maps.LatLng(35.179554, 129.075642) },
          { title: '안성운수', latlng: new window.kakao.maps.LatLng(36.990437, 127.092379) },
          { title: '포항운수', latlng: new window.kakao.maps.LatLng(36.019986, 129.342938) },
          { title: '울산운수', latlng: new window.kakao.maps.LatLng(35.538377, 129.311359) },
          { title: '대구운수', latlng: new window.kakao.maps.LatLng(35.871435, 128.601445) },
          { title: '대천운수', latlng: new window.kakao.maps.LatLng(36.491065, 126.494356) },
        ];

        markerPositions.forEach(({ title, latlng }) => {
          const marker = new window.kakao.maps.Marker({
            map: map,
            position: latlng,
            title: title,
          });

          // Optionally, add an info window to each marker
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

    kakaoMapScript.addEventListener('load', onLoadKakaoAPI, { passive: true });
  }, []);

  return (
    <div>
      <h1 style={{ marginLeft: '20px' }}>버스 현황</h1>
      <div id="map" style={{ marginTop: '10px', width: '100%', height: '680px', borderRadius: '20px' }}></div>
    </div>
  );
};

export default MapComponent;
