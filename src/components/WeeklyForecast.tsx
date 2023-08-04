import { useCallback, useEffect, useState } from 'react';
import { Typography, Divider, useMediaQuery, Box } from '@mui/material';
import type { Theme } from '@mui/material';
import { grey, blue } from '@mui/material/colors';
import { format } from 'date-fns';
import { getWeeklyForecast } from '../api/weather';
import { weatherCodeMap } from '../utils/weather-code-map';
import { WeeklyForecastItem } from './';
import type { Status, weeklyForecastDataItem } from '../types';

type weeklyForecastProps = {
  longitude: GLfloat;
  latitude: GLfloat;
};

export const WeeklyForecast = ({ longitude, latitude }: weeklyForecastProps) => {
  const [statusCode, setStatusCode] = useState<Status>('idle');
  const [weeklyForecastData, setWeeklyForecastData] = useState<weeklyForecastDataItem[]>([]);
  const isSmallerThanLg = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  const fetchWeeklyForecast = useCallback(async () => {
    setStatusCode('pending');
    const { data, status } = await getWeeklyForecast(longitude, latitude);
    if (status !== 200) {
      setStatusCode('error');
      return;
    }
    setStatusCode('success');
    setWeeklyForecastData(
      data.daily.time.map((item, index) => ({
        time: item,
        /* eslint-disable @typescript-eslint/no-non-null-assertion */
        description: weatherCodeMap(data.daily.weathercode)[index]!.description,
        maxTemperature: String(data.daily.temperature_2m_max[index]!),
        minTemperature: String(data.daily.temperature_2m_min[index]!),
        image: weatherCodeMap(data.daily.weathercode)[index]!.icon,
      })),
    );
  }, [longitude, latitude]);

  useEffect(() => {
    void fetchWeeklyForecast();
  }, [fetchWeeklyForecast]);

  return (
    <Box
      p="1rem"
      display="flex"
      flexDirection="column"
      width={1}
      flex={1}
      bgcolor="#1f2634"
      borderRadius="2rem"
      sx={{
        my: { xs: '1rem', lg: 'none' },
        overflowX: 'auto',
      }}
    >
      <Typography
        sx={{ display: { xs: 'flex', lg: 'block' }, justifyContent: { xs: 'center', lg: 'none' } }}
        px="1rem"
        fontSize="1rem"
        color={grey[400]}
        textTransform="uppercase"
      >
        7-day-forecast
      </Typography>
      <Box
        display="flex"
        width={1}
        sx={{
          justifyContent: { xs: 'flex-start', lg: 'space-around' },
          flexDirection: { xs: 'row', lg: 'column' },
          overflowX: 'auto',
        }}
      >
        {statusCode === 'success' && (
          <>
            {weeklyForecastData.map(({ description, time, maxTemperature, minTemperature, image }, index) => (
              <Box
                flexDirection="row"
                width={1}
                sx={{ display: { xs: 'flex', lg: 'block' }, justifyContent: { xs: 'space-evenly', lg: 'none' } }}
                key={index}
              >
                <WeeklyForecastItem
                  time={index === 0 ? 'Today' : format(new Date(time), 'EEE')}
                  description={description}
                  maxTemperature={String(Math.round(Number(maxTemperature)))}
                  minTemperature={String(Math.round(Number(minTemperature)))}
                  image={image}
                />
                {index < weeklyForecastData.length - 1 && (
                  <Divider
                    sx={{ bgcolor: blue[100] }}
                    variant="middle"
                    orientation={isSmallerThanLg ? 'vertical' : 'horizontal'}
                    flexItem
                  />
                )}
              </Box>
            ))}
          </>
        )}
      </Box>
    </Box>
  );
};
