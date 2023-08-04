import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Grid, IconButton } from '@mui/material';
import { HamburgerNavBar } from '../components';
import { Air } from '@mui/icons-material';
import { blue } from '@mui/material/colors';
import { HOME } from '../config/routes';
import { navLinks } from '../config';

export const HeaderWithNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentRouteObject = navLinks.find((element) => element.to === location.pathname);
  const currentRoute = currentRouteObject ? currentRouteObject.title : ' ';

  const onNavigate = (to: string) => {
    navigate(to);
  };
  return (
    <Box gap={3} alignItems="center" display="flex" flexDirection="row" justifyContent="space-around">
      <IconButton onClick={() => onNavigate(HOME)} sx={{ ':focus': { outline: 'none' } }}>
        <Grid item xs={1} color={blue[200]}>
          <Air fontSize="medium" />
        </Grid>
      </IconButton>
      <Grid item xs={10} pb="0.25rem" alignSelf="center" color={blue[200]}>
        <Box display="flex" justifyContent="center">
          {currentRoute}
        </Box>
      </Grid>

      <Grid item xs={1} color={blue[200]}>
        <HamburgerNavBar />
      </Grid>
    </Box>
  );
};
