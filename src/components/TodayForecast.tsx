import type { ReactElement } from 'react';
import { Typography, Divider, Box } from '@mui/material';
import type { SvgIconProps } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { todayForecastMapper } from '../utils/';
import { TodayForecastItem } from '../components';

type TodayForecastProps = {
  forecastTime: { time: string; temperature: number; image: ReactElement<SvgIconProps> }[];
};

export const TodayForecast = ({ forecastTime }: TodayForecastProps) => {
  const data = todayForecastMapper(forecastTime.map(({ time }) => time));
  const timeData = data.timeData;
  const forecastData = forecastTime.slice(data.startIndex, data.endIndex);

  return (
    <Box my="2rem" p="1rem" sx={{ backgroundColor: '#1f2634', borderRadius: '2rem' }}>
      <Typography
        sx={{ display: { xs: 'flex', lg: 'block' }, justifyContent: { xs: 'center', lg: 'none' } }}
        px="2rem"
        fontSize="1rem"
        color={grey[400]}
        textTransform="uppercase"
      >
        Today&#8216;s forecast
      </Typography>

      <Box
        display="flex"
        width="100%"
        sx={{
          justifyContent: { xs: 'flex-start', lg: 'space-around' },
          overflowX: 'auto',
        }}
      >
        {forecastData.map(({ temperature, image }, index) => (
          <Box width={1} justifyContent="space-evenly" key={index} display="flex">
            {/*  eslint-disable @typescript-eslint/no-non-null-assertion */}
            <TodayForecastItem time={timeData[index]!} image={image} temperature={Math.round(temperature)} />
            {index < forecastData.length - 1 && (
              <Divider variant="middle" sx={{ bgcolor: blue[100] }} orientation="vertical" flexItem />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
