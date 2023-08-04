import type { ReactElement } from 'react';
import type { SvgIconProps } from '@mui/material';
export type Status = 'idle' | 'pending' | 'success' | 'error';
type Hourly = {
  time: string[];
  temperature_2m: number[];
  apparent_temperature: number[];
  rain: number[];
  windspeed_10m: number[];
  weathercode: number[];
  uv_index: number[];
};
export type Daily = { hourly: Hourly };
export type Weekly = {
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weathercode: number[];
  };
};
export type weeklyForecastDataItem = {
  description: string;
  time: string;
  maxTemperature: string;
  minTemperature: string;
  image: ReactElement<SvgIconProps>;
};
