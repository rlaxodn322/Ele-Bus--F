import styled from '@emotion/styled';

export const WeatherContainer = styled.div`
  display: flex;
  font-size: 15px;
  background-color: white;
  height: 40px;
  // margin: 10px;
  color: #808080;
  @media (max-width: 768px) {
    /* font-size: 10px; */
    display: none;
  }
`;
export const Day = styled.p`
  color: #808080;
  margin: 3px;
`;
export const WeatherIcon = styled.img`
  margin: 0px;
  padding: 0px;
`;
export const WeatherCloud = styled.p`
  margin: 3px;
`;

export const WeatherTemp = styled.p`
  margin: 3px;
`;

export const WeatherDesc = styled.p`
  margin: 3px;
`;
