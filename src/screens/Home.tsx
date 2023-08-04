import { useMemo, useCallback, useEffect, useState } from 'react';
import { Grid, Box, CircularProgress } from '@mui/material';
import { CurrentWeather, TodayForecast, SearchBar, AirConditions, WeeklyForecast } from '../components';
import { getDailyForecast } from '../api/weather';
import { weatherCodeMap } from '../utils';
import { format } from 'date-fns';
import { orange } from '@mui/material/colors';
import type { Status, Daily } from '../types';

const tomorrowDate = new Date();
tomorrowDate.setDate(tomorrowDate.getDate() + 1);
const endDateFormatted = format(tomorrowDate, 'yyyy-MM-dd');

export const Home = () => {
  const [longitude, setLongitude] = useState<GLfloat>(20.4375);
  const [latitude, setLatitude] = useState<GLfloat>(44.8178131);
  const [successCode, setSuccessCode] = useState<Status>('idle');
  const [name, setName] = useState<string>('Belgrade');
  const [dailyForecastData, setDailyForecastData] = useState<Daily>();
  const startDateFormatted = useMemo(() => format(new Date(), 'yyyy-MM-dd'), []);

  const fetchDailyForecast = useCallback(async () => {
    setSuccessCode('pending');
    const { data, status } = await getDailyForecast(longitude, latitude, startDateFormatted, endDateFormatted);
    if (status !== 200) {
      setSuccessCode('error');
      return;
    }
    setSuccessCode('success');
    setDailyForecastData(data);
  }, [latitude, longitude, startDateFormatted]);

  const handleSearchData = (long: GLfloat, lat: GLfloat, name: string) => {
    setLongitude(long);
    setLatitude(lat);
    setName(name);
  };

  useEffect(() => {
    void fetchDailyForecast();
  }, [fetchDailyForecast]);

  return (
    <Grid container>
      <Grid item xs={12} lg={7} my="1rem">
        <SearchBar onSuccess={handleSearchData} setSuccessCode={setSuccessCode} />
      </Grid>
      {successCode === 'success' && (
        <Grid container my="0.5rem" gap={2}>
          <Grid item xs={12} lg={7}>
            {dailyForecastData && (
              <CurrentWeather
                time={dailyForecastData.hourly.time}
                cityName={name}
                chanceOfRain={dailyForecastData.hourly.rain}
                temperature={dailyForecastData.hourly.temperature_2m}
                weathercode={dailyForecastData.hourly.weathercode}
              />
            )}
            {dailyForecastData && (
              <TodayForecast
                /* eslint-disable @typescript-eslint/no-non-null-assertion */
                forecastTime={dailyForecastData.hourly.time.map((item, index) => ({
                  time: item,
                  image: weatherCodeMap(dailyForecastData.hourly.weathercode)[index]!.icon,
                  temperature: dailyForecastData.hourly.temperature_2m[index]!,
                }))}
              />
            )}
            <AirConditions
              value={[
                String(dailyForecastData?.hourly.apparent_temperature[0]),
                String(dailyForecastData?.hourly.windspeed_10m[0]),
                String(dailyForecastData?.hourly.rain[0]),
                String(dailyForecastData?.hourly.uv_index[0]),
              ]}
            />
          </Grid>

          <Grid item lg={4} xs={12}>
            <Grid container gap={2}>
              <WeeklyForecast longitude={longitude} latitude={latitude} />
            </Grid>
          </Grid>
        </Grid>
      )}

      {successCode === 'error' && (
        <Grid item xs={11} lg={7}>
          <Box fontSize="4rem" color={orange[600]}>
            Please enter a valid city name
          </Box>
        </Grid>
      )}

      {(successCode === 'pending' || successCode === 'idle') && (
        <Grid item xs={11} lg={7}>
          <Box height="1" display="flex" justifyContent="center" alignItems="center">
            <CircularProgress size={100} thickness={10} color="warning" />
          </Box>
        </Grid>
      )}
    </Grid>
  );
};
