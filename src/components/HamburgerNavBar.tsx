import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Divider, Drawer, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { grey } from '@mui/material/colors';
import { navLinks } from '../config';

export const HamburgerNavBar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [active, setActive] = useState<string>('weather');
  const onNavigate = (key: string, to: string) => {
    navigate(to);
    setActive(key);
  };

  const toggleDrawer = (open: boolean) => {
    setOpen(open);
  };

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={() => toggleDrawer(true)}
        sx={{
          mr: 2,
          display: {
            xs: 'block',
            lg: 'none',
          },
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={open} onClose={() => toggleDrawer(false)} onTransitionEnd={() => toggleDrawer(true)}>
        <Box height={1} p={2} bgcolor="#1f2634" minWidth="10rem">
          <IconButton
            onClick={() => toggleDrawer(false)}
            sx={{ width: 1, display: 'flex', justifyContent: 'flex-end' }}
          >
            <CloseIcon sx={{ fill: grey[200] }} />
          </IconButton>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            {navLinks.map(({ icon, title, key, to }) => (
              <IconButton onClick={() => onNavigate(key, to)} key={key} sx={{ ':focus': { outline: 'none' } }}>
                <Box
                  alignItems="center"
                  display="flex"
                  flexDirection="row"
                  color={active === key ? grey[200] : grey[600]}
                >
                  {icon}
                  <Typography ml="1rem">{title}</Typography>
                </Box>
              </IconButton>
            ))}
          </Box>
          <Divider sx={{ mb: 2 }} />
        </Box>
      </Drawer>
    </>
  );
};
