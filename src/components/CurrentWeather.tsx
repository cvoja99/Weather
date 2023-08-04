import { Grid, Typography, Box } from '@mui/material';
import { grey } from '@mui/material/colors';
import { todayForecastMapper } from '../utils';
import { weatherCodeMap } from '../utils/weather-code-map';

type CurrentWeatherProps = {
  time: string[];
  cityName: string;
  chanceOfRain: number[];
  temperature: number[];
  weathercode: number[];
};

export const CurrentWeather = ({ cityName, chanceOfRain, temperature, weathercode, time }: CurrentWeatherProps) => {
  const data = todayForecastMapper(time);
  const index = data.startIndex;
  const temp = temperature[index];
  const rainChance = chanceOfRain[index];
  const images = weatherCodeMap(weathercode)[index]?.icon;

  return (
    <Grid container p="1rem" height="400px">
      <Grid item xs={12} md={8}>
        <Box
          display="flex"
          flexDirection="column"
          sx={{ alignItems: { xs: 'center', lg: 'flex-start' } }}
          justifyContent="space-between"
          height="100%"
        >
          <Box display="flex" flexDirection="column" flex="1" height="300px">
            <Typography color={grey[200]} fontSize="2rem">
              {cityName}
            </Typography>
            <Typography color={grey[600]}>Chance of rain: {rainChance}%</Typography>
          </Box>
          <Typography color={grey[200]} fontSize="4rem">
            {temp}°
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={4} alignSelf="center">
        <Box
          display="flex"
          className="current-weather-wrapper"
          justifyContent="center"
          sx={{ '& > .MuiSvgIcon-root': { fontSize: '9.375rem' } }}
        >
          {images}
        </Box>
      </Grid>
    </Grid>
  );
};
