import { useState, useEffect, useCallback } from 'react';
import type { MouseEvent, KeyboardEvent } from 'react';
import { Box, Grid, IconButton, InputBase } from '@mui/material';
import { blue, grey } from '@mui/material/colors';
import { getLongAndLat } from '../api/cities';
import SearchIcon from '@mui/icons-material/Search';
import type { Status } from '../types';

export type cityResponse = {
  name: string;
  latitude: GLfloat;
  longitude: GLfloat;
  country: string;
  state: string;
};

type SearchBarProps = {
  onSuccess: (long: GLfloat, lat: GLfloat, name: string) => void;
  setSuccessCode: (successCode: Status) => void;
};
export const SearchBar = ({ onSuccess, setSuccessCode }: SearchBarProps) => {
  const [searchInput, setSearchInput] = useState<string>('');

  const fetchLongAndLat = useCallback(async () => {
    setSuccessCode('pending');
    const { data, status } = await getLongAndLat(searchInput);
    if (data.length === 0 || status !== 200) {
      setSuccessCode('error');
      return;
    }
    setSuccessCode('success');
    data[0] && onSuccess(data[0].longitude, data[0].latitude, data[0].name);
  }, [searchInput, onSuccess, setSuccessCode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchInput) {
        void fetchLongAndLat();
      }
    }, 3000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      void fetchLongAndLat();
    }
  };
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    void fetchLongAndLat();
  };

  return (
    <Box justifyContent="space-around" display="flex" flexDirection="row">
      <Grid item xs={11} p="0.5rem" flexDirection="column" sx={{ bgcolor: '#1f2634', borderRadius: '1rem' }}>
        <InputBase
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeyPress}
          fullWidth
          size="small"
          placeholder="Search for cities"
          sx={{ color: grey[200] }}
        />
      </Grid>
      <Box display="flex" ml="1rem">
        <IconButton sx={{ aligntSelf: 'center', bgcolor: '#1f2634' }} onClick={handleClick}>
          <SearchIcon sx={{ color: blue[200] }} />
        </IconButton>
      </Box>
    </Box>
  );
};
