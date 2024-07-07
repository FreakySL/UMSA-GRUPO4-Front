import React from 'react';
import { AppBar, Toolbar, Typography, Link, Container, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import NavBar from './NavBar.tsx';
import logo from '../assets/images/AlMedinLogo.png';

const Header: React.FC = () => {
  const theme = useTheme();

  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main, fontSize: '14px' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
            <Box display="flex" alignItems="center">
              <img src={logo} alt="Hospital Logo" style={{ width: '60px', height: 'auto', marginRight: '10px' }} />
              <Typography variant="h6" component="div" sx={{ color: '#fff' }}>
                <Link href="/" color="inherit" underline="none">
                  AlMedin
                </Link>
              </Typography>
            </Box>
            <NavBar />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
