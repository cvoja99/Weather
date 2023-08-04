import type { ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import type { SvgIconProps } from '@mui/material';
import { grey } from '@mui/material/colors';

type AirConditionItemProps = {
  icon: ReactElement<SvgIconProps>;
  description: string;
  value: string;
};

export const AirConditionItem = ({ icon, description, value }: AirConditionItemProps) => (
  <Box display="flex" flexDirection="row">
    <Box py="0.875rem">{icon}</Box>
    <Box p="0.5rem" display="flex" flexDirection="column">
      <Typography sx={{ fontSize: { xs: '0.875rem', lg: '1rem' } }} color={grey[500]}>
        {description}
      </Typography>
      <Typography sx={{ fontSize: { xs: '1.75rem', lg: '2rem' } }} color={grey[200]}>
        {value}
      </Typography>
    </Box>
  </Box>
);
