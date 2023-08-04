import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Box, Typography, IconButton } from '@mui/material';
import { grey, blue } from '@mui/material/colors';
import { Air } from '@mui/icons-material';
import { navLinks } from '../config';
import { HOME } from '../config/routes';

export const NavigationBar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState<string>('weather');
  const onNavigate = (key: string, to: string) => {
    navigate(to);
    setActive(key);
  };
  return (
    <Grid item p="1rem" width="100px" height="100%" sx={{ bgcolor: '#1f2634', borderRadius: '1rem' }}>
      <Box display="flex" gap="0.5rem" flexDirection="column" alignItems="center" justifyContent="center">
        <IconButton onClick={() => onNavigate('weather', HOME)} sx={{ ':focus': { outline: 'none' } }}>
          <Box color={blue[200]}>
            <Air fontSize="large" />
          </Box>
        </IconButton>
        {navLinks.map(({ icon, title, key, to }) => {
          return (
            <IconButton onClick={() => onNavigate(key, to)} key={key} sx={{ ':focus': { outline: 'none' } }}>
              <Box color={active === key ? grey[200] : grey[600]}>
                {icon}
                <Typography>{title}</Typography>
              </Box>
            </IconButton>
          );
        })}
      </Box>
    </Grid>
  );
};
