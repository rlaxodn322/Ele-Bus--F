import styled from '@emotion/styled';

export const WeatherContainer = styled.div`
  display: flex;
  font-size: 15px;
  background-color: #fcfcfc;
  height: 40px;
  // margin: 10px;
  color: #808080;
  @media (max-width: 1100px) {
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
  padding-bottom: 10px;
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
