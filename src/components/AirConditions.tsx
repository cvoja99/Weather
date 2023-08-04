import type { ReactElement } from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import type { SvgIconProps } from '@mui/material';
import { grey } from '@mui/material/colors';
import { DeviceThermostat, Air, WaterDrop, Brightness7 } from '@mui/icons-material';
import { AirConditionItem } from './';

type airConditionItemsProps = {
  value: string[];
};
type airConditionItemsType = {
  icon: ReactElement<SvgIconProps>;
  description: string;
};

const airConditionItems: airConditionItemsType[] = [
  { icon: <DeviceThermostat fontSize="large" htmlColor={grey[500]} />, description: 'Real Feel' },
  { icon: <Air fontSize="large" htmlColor={grey[500]} />, description: 'Wind' },
  { icon: <WaterDrop fontSize="large" htmlColor={grey[500]} />, description: 'Chance of rain' },
  { icon: <Brightness7 fontSize="large" htmlColor={grey[500]} />, description: 'UV index' },
];

export const AirConditions = ({ value }: airConditionItemsProps) => (
  <Grid item p="1rem" sx={{ backgroundColor: '#1f2634', borderRadius: '2rem' }}>
    <Grid container sx={{ justifyContent: { xs: 'center', lg: 'space-between' } }}>
      <Typography px="2rem" fontSize="1rem" color={grey[400]} textTransform="uppercase">
        air conditions
      </Typography>
      <Button
        variant="contained"
        size="medium"
        sx={{
          display: { xs: 'none', lg: 'block' },
          marginRight: '1rem',
          borderRadius: '10px',
          '&:hover': { backgroundColor: grey[500] },
        }}
      >
        See more
      </Button>
    </Grid>
    <Grid container>
      {airConditionItems.map(({ icon, description }, index) => (
        <Grid item xs={6} key={index}>
          {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
          <AirConditionItem icon={icon} description={description} value={value[index]!} />
        </Grid>
      ))}
    </Grid>
    <Box display="flex" justifyContent="center">
      <Button
        variant="contained"
        size="medium"
        sx={{
          mx: '1.5rem',
          display: { xs: 'block', lg: 'none' },
          borderRadius: '10px',
          '&:hover': { backgroundColor: grey[500] },
        }}
      >
        See more
      </Button>
    </Box>
  </Grid>
);
