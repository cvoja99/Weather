import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { cityResponse } from 'components/SearchBar';
import { API_KEY } from '../config/api';

export const getLongAndLat = (cityName: string): Promise<AxiosResponse<cityResponse[]>> =>
  axios.get<cityResponse[]>(`https://api.api-ninjas.com/v1/geocoding?city=${cityName}`, {
    headers: {
      'X-Api-Key': API_KEY,
    },
  });
