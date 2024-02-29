import React, { useEffect, useState } from 'react';
import { WeatherContainer, WeatherTemp, WeatherDesc, WeatherCloud } from './style';
import axios from 'axios';

interface WeatherState {
  temp: string;
  humidity: string;
  desc: string;
  icon: string;
  loading: boolean;
  contury: string;
}

const Weather = () => {
  const [weatherData, setWeatherData] = useState<WeatherState>({
    temp: '',
    humidity: '',
    desc: '',
    icon: '',
    loading: true,
    contury: '',
  });

  useEffect(() => {
    const city = 'Hwaseong'; //원하는 지역 검색하여 변경
    const apiKey = 'c5597f52c85276cd2e0898b8d3d77ea0';
    const lang = 'kr';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=${lang}`;

    axios
      .get(url, { withCredentials: false })
      .then((responseData) => {
        const data = responseData.data;
        setWeatherData({
          contury: data.name,
          temp: (data.main.temp - 273.15).toFixed(1),
          humidity: data.main.humidity,
          desc: data.weather[0].description,
          icon: data.weather[0].icon,
          loading: false,
        });
      })
      .catch((error) => console.log(error));
  }, []);

  // const imgSrc = `https://openweathermap.org/img/w/${weatherData.icon}.png`;
  const { loading, temp, humidity, desc } = weatherData;

  return (
    <WeatherContainer>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* <WeatherIcon src={imgSrc} alt="Weather Icon" /> */}
          {/* <WeatherCloud>위치 : text</WeatherCloud> */}
          <WeatherCloud>날씨 : {desc}</WeatherCloud>
          <WeatherTemp>온도 : {temp}°C</WeatherTemp>
          <WeatherDesc>습도 : {humidity}%</WeatherDesc>
        </>
      )}
    </WeatherContainer>
  );
};

export default Weather;
