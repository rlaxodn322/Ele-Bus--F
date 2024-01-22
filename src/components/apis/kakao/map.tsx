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
          level: 7,
        };

        const map = new window.kakao.maps.Map(container, options);

        // Add markers for 10 locations in Osan City
        const markerPositions = [
          { title: 'Location 1', latlng: new window.kakao.maps.LatLng(37.146045, 127.072013) },
          { title: 'Location 2', latlng: new window.kakao.maps.LatLng(37.147234, 127.067567) },
          { title: 'Location 3', latlng: new window.kakao.maps.LatLng(37.142567, 127.063492) },
          { title: 'Location 4', latlng: new window.kakao.maps.LatLng(37.144789, 127.061027) },
          { title: 'Location 5', latlng: new window.kakao.maps.LatLng(37.145982, 127.058361) },
          { title: 'Location 6', latlng: new window.kakao.maps.LatLng(37.149289, 127.062796) },
          { title: 'Location 7', latlng: new window.kakao.maps.LatLng(37.151576, 127.065936) },
          { title: 'Location 8', latlng: new window.kakao.maps.LatLng(37.150223, 127.070001) },
          { title: 'Location 9', latlng: new window.kakao.maps.LatLng(37.14677, 127.076134) },
          { title: 'Location 10', latlng: new window.kakao.maps.LatLng(37.145389, 127.071401) },
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
      <div id="map" style={{ marginTop: '10px', width: '100%', height: '660px', borderRadius: '20px' }}></div>
    </div>
  );
};

export default MapComponent;
