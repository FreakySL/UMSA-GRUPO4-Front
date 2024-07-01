import React from "react";
import { Box, Container, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#1E90FF', py: 2, mt: 'auto', fontSize: '11px'}}>
      <Container maxWidth="lg">
        <Typography variant="body1" color="white" align="center" fontSize='14px'>
          &copy; {new Date().getFullYear()} My Medical Company. All rights reserved.
        </Typography>
        <Box display="flex" justifyContent="center" mt={1}>
          <Link href="/privacy-policy" color="inherit" underline="none" sx={{ mx: 2, color: '#fff' }}>
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" color="inherit" underline="none" sx={{ mx: 2, color: '#fff' }}>
            Terms of Service
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
