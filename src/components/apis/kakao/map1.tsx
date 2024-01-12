import { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

const MapComponent: React.FC = () => {
  useEffect(() => {
    const loadKakaoMapScript = async () => {
      const kakaoMapScript = document.createElement('script');
      kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=2b230b26fde09123dfbe3d79c118924d&autoload=false`;

      await new Promise((resolve, reject) => {
        kakaoMapScript.addEventListener('load', resolve);
        kakaoMapScript.addEventListener('error', reject);
        document.head.appendChild(kakaoMapScript);
      });

      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        if (mapContainer) {
          const mapOption = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
          };
          new window.kakao.maps.Map(mapContainer, mapOption);
        }
      });
    };

    loadKakaoMapScript();
  }, []);

  return (
    <div>
      <div id="map" style={{ width: '50px', height: '50px', margin: '10px 0 10px 0' }}></div>
    </div>
  );
};

export default MapComponent;
