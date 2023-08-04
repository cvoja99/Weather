import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Box, Grid, CssBaseline, ThemeProvider } from '@mui/material';
import { NavigationBar, HeaderWithNavBar } from './components';
import { PublicRoutes } from './routes/PublicRoutes';
import { theme } from './assets/theme/Theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter>
          <Grid container>
            <Grid item xs={12} m="1rem" sx={{ display: { xs: 'block', lg: 'none' } }}>
              <HeaderWithNavBar />
            </Grid>
            <Box width="100%" display="flex" flexDirection="row">
              <Grid item lg={1} m="1rem" sx={{ display: { xs: 'none', lg: 'block' } }}>
                <NavigationBar />
              </Grid>
              <Grid item xs={12} lg={11}>
                <PublicRoutes />
              </Grid>
            </Box>
          </Grid>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
