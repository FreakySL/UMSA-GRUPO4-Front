import React from 'react';
import { AppBar, Toolbar, Typography, Link, Container, Box, Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  // Simulamos si el usuario está logueado
  const isLoggedIn = false; // Cambia esto a `true` para simular un usuario logueado
  const userProfileImage = isLoggedIn ? '/path-to-user-profile-image.jpg' : null;

  const handleAvatarClick = () => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      navigate('/profile');
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main, fontSize: '14px' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
            <Typography variant="h6" component="div" sx={{ color: '#fff' }}>
              <Link href="/" color="inherit" underline="none">
                AlMedin
              </Link>
            </Typography>
            <Box display="flex" alignItems="center">
              <nav>
                <Link href="/" color="inherit" underline="none" sx={{ ml: 2, color: '#fff', mr: 2 }}>
                  Agendar Turno
                </Link>
                <Link href="/" color="inherit" underline="none" sx={{ ml: 2, color: '#fff', mr: 2 }}>
                  Nuestros especialistas médicos
                </Link>
                <Link href="/" color="inherit" underline="none" sx={{ ml: 2, color: '#fff', mr: 2 }}>
                  Nosotros
                </Link>
              </nav>
              <Avatar 
                sx={{ bgcolor: deepOrange[500], ml: 2, cursor: 'pointer' }} 
                alt="Profile"
                onClick={handleAvatarClick}
              >
                {!userProfileImage && 'P'}
              </Avatar>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
