import React, { useEffect } from 'react';

interface MapComponentProps {
  markerPositions: { title: string; latlng: { lat: number; lng: number } }[];
  mapHeight: string | number;
}
declare global {
  interface Window {
    kakao: any;
  }
}
const MapComponent: React.FC<MapComponentProps> = ({ markerPositions, mapHeight }) => {
  useEffect(() => {
    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(37.144008, 127.06761),
          level: 13,
        };

        const map = new window.kakao.maps.Map(container, options);

        markerPositions.forEach(({ title, latlng }) => {
          const marker = new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(latlng.lat, latlng.lng),
            title: title,
          });

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

    // Load Kakao API script only on the client side
    if (typeof window !== 'undefined') {
      const kakaoMapScript = document.createElement('script');
      kakaoMapScript.async = false;
      kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=2b230b26fde09123dfbe3d79c118924d&autoload=false`;
      document.head.appendChild(kakaoMapScript);

      kakaoMapScript.addEventListener('load', onLoadKakaoAPI, { passive: true });
    }

    return () => {
      // Cleanup code if necessary
    };
  }, [markerPositions, mapHeight]);

  return (
    <div>
      <div id="map" style={{ marginTop: '10px', width: '100%', height: mapHeight, borderRadius: '20px' }}></div>
    </div>
  );
};

export default MapComponent;
