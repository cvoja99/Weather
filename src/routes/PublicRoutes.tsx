import { Routes, Route } from 'react-router-dom';
import { Home, Cities, SettingsPage, Map } from '../screens';
import { HOME, CITIES, SETTINGS, MAP } from '../config/routes';

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={CITIES} element={<Cities />} />
      <Route path={SETTINGS} element={<SettingsPage />} />
      <Route path={MAP} element={<Map />} />
    </Routes>
  );
};
