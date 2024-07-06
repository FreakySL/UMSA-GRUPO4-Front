import React from 'react';
import { AppBar, Toolbar, Typography, Link, Container, Box, Avatar, Button } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase.ts';

const Header: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const isLoggedIn = !!auth.currentUser;
  const userProfileImage = auth.currentUser?.photoURL;

  console.log(auth.currentUser)
  console.log(auth.currentUser?.displayName?.charAt(0))

  const handleNav = (path: string) => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      navigate(path);
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
                {/* Add handleNav after testing the pages */}
                <Link onClick={() => navigate('/agendar-turno')} color="inherit" underline="none" sx={{ ml: 2, color: '#fff', mr: 2 }}>
                  <Button color='inherit'>
                    Agendar Turno
                  </Button>
                </Link>
                <Link onClick={() => navigate('/actualizar-turno')} color="inherit" underline="none" sx={{ ml: 2, color: '#fff', mr: 2 }}>
                  <Button color='inherit'>
                    Modificar Turno
                  </Button>
                </Link>
                {/* Add handleNav after testing the pages */}
                <Link onClick={() => navigate('/specialists')} color="inherit" underline="none" sx={{ ml: 2, color: '#fff', mr: 2 }}>
                  <Button color='inherit'>
                    Nuestros especialistas médicos
                  </Button>
                </Link>
                <Link onClick={() => navigate('/about')} color="inherit" underline="none" sx={{ ml: 2, color: '#fff', mr: 2 }}>
                  <Button color='inherit'>
                    Nosotros
                  </Button>
                </Link>
              </nav>
              <Avatar
                src={userProfileImage || undefined}
                sx={{ bgcolor: deepOrange[500], ml: 2, cursor: 'pointer' }}
                alt="Profile"
                onClick={() => handleNav('/profile')}
              >
                {!userProfileImage && auth.currentUser?.displayName?.charAt(0)}
              </Avatar>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
