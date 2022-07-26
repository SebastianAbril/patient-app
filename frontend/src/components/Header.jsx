import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Patient App
          </Typography>
          <Button color="inherit" component={Link} to="/newPatient">
            New
          </Button>
          <Button color="inherit" component={Link} to="/loginScreen">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/aboutMe">
            About Me
          </Button>
          <Button color="inherit" component={Link} to="/newPatient">
            Dark Mode
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
