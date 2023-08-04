import type { ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import type { SvgIconProps } from '@mui/material';

type WeeklyForecastItemProps = {
  time: string;
  image: ReactElement<SvgIconProps>;
  description: string;
  maxTemperature: string;
  minTemperature: string;
};

export const WeeklyForecastItem = ({
  time,
  image,
  description,
  maxTemperature,
  minTemperature,
}: WeeklyForecastItemProps) => (
  <Box
    width="100%"
    display="flex"
    alignItems="center"
    p="1rem"
    sx={{
      justifyContent: { lg: 'space-between', xs: 'center' },
      flexDirection: { lg: 'row', xs: 'column' },
    }}
  >
    <Typography
      sx={{ px: { lg: '2rem', xs: 'none' }, width: { lg: '20%', xs: '100%' } }}
      textAlign="center"
      fontSize="1rem"
      color={grey[500]}
      textTransform="capitalize"
    >
      {time}
    </Typography>

    <Box
      display="flex"
      alignItems="center"
      sx={{
        flexDirection: { xs: 'column', lg: 'row' },
        justifyContent: { lg: 'flex-start', xs: 'center' },
        ml: { lg: '2rem', xs: 'none' },
        width: { lg: '50%', xs: '100%' },
      }}
    >
      {image}
      <Typography
        fontSize="1rem"
        color={grey[200]}
        sx={{ m: { lg: '1rem', xs: 'none' }, display: { xs: 'none', lg: 'block' } }}
      >
        {description}
      </Typography>
    </Box>

    <Box display="flex">
      <Typography sx={{ ml: { lg: '0.5rem', xs: 'none' } }} fontSize="1rem" color={grey[200]}>
        {maxTemperature}
      </Typography>
      <Typography fontSize="1rem" color={grey[500]}>
        /{minTemperature}
      </Typography>
    </Box>
  </Box>
);
