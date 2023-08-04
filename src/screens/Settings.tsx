import { Box, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';

export const SettingsPage = () => {
  return (
    <Box ml="2rem" height="1" display="flex" justifyContent="center" alignItems="center">
      <Typography sx={{ fontSize: { xs: '2rem', lg: '4rem' } }} color={blue[200]}>
        This is Settings page.
      </Typography>
    </Box>
  );
};
