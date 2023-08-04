import type { ReactElement } from 'react';
import { Typography, Box } from '@mui/material';
import type { SvgIconProps } from '@mui/material';
import { grey } from '@mui/material/colors';

type TodayForecastItemProps = {
  time: string;
  temperature: number;
  image: ReactElement<SvgIconProps>;
};

export const TodayForecastItem = ({ time, temperature, image }: TodayForecastItemProps) => (
  <Box display="flex" m="1rem" alignItems="center" justifyContent="center">
    <Box>
      <Typography textAlign="center" fontSize="1rem" color={grey[400]}>
        {time}
      </Typography>
      <Box sx={{ py: { xs: '1rem', lg: 'none' } }} justifyContent="center" display="flex">
        {image}
      </Box>
      <Typography textAlign="center" sx={{ fontSize: { xs: '1rem', lg: '2rem' } }} color={grey[200]}>
        {temperature}°
      </Typography>
    </Box>
  </Box>
);
