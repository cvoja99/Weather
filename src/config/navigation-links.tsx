import { CloudOutlined, FormatListBulletedOutlined, MapOutlined, Tune } from '@mui/icons-material';
import { HOME, CITIES, SETTINGS, MAP } from './routes';
import type { ReactElement } from 'react';
import type { SvgIconProps } from '@mui/material';

type NavLinksType = {
  icon: ReactElement<SvgIconProps>;
  title: string;
  key: string;
  to: string;
};
export const navLinks: NavLinksType[] = [
  { icon: <CloudOutlined />, title: 'Weather', key: 'weather', to: HOME },
  { icon: <FormatListBulletedOutlined />, title: 'Cities', key: 'cities', to: CITIES },
  { icon: <MapOutlined />, title: 'Map', key: 'map', to: MAP },
  { icon: <Tune />, title: 'Settings', key: 'settings', to: SETTINGS },
];
