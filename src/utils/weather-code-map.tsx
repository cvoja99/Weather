import type { ReactElement } from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import type { SvgIconProps } from '@mui/material';
import { grey, blue, yellow } from '@mui/material/colors';

type mappedWeatherCodesType = {
  icon: ReactElement<SvgIconProps>;
  description: string;
};
export const weatherCodeMap = (weathercode: number[]) => {
  const mappedWeatherCodes: mappedWeatherCodesType[] = weathercode.map((item) => {
    if (item === 0) return { icon: <WbSunnyIcon fontSize="large" htmlColor={yellow[700]} />, description: 'Sunny' };
    if (item > 0 && item < 50)
      return { icon: <CloudIcon fontSize="large" htmlColor={grey[400]} />, description: 'Cloudy' };
    if (item >= 95 && item <= 99)
      return { icon: <ThunderstormIcon fontSize="large" htmlColor={grey[700]} />, description: 'Thunderstorm' };
    if (item >= 71 && item <= 77)
      return { icon: <AcUnitIcon fontSize="large" htmlColor={grey[200]} />, description: 'Snowing' };
    return { icon: <WaterDropIcon fontSize="large" htmlColor={blue[600]} />, description: 'Raining' };
  });
  return mappedWeatherCodes;
};
