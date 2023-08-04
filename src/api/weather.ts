import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { Daily, Weekly } from '../types';

export const getDailyForecast = (
  longitude: GLfloat,
  latitude: GLfloat,
  startDate: string,
  endDate: string,
): Promise<AxiosResponse<Daily>> =>
  axios.get<Daily>(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,apparent_temperature,rain,weathercode,windspeed_10m,uv_index&forecast_days=1&timezone=Europe%2FBerlin&start_date=${startDate}&end_date=${endDate}`,
  );

export const getWeeklyForecast = (longitude: GLfloat, latitude: GLfloat): Promise<AxiosResponse<Weekly>> =>
  axios.get<Weekly>(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=Europe%2FBerlin`,
  );
