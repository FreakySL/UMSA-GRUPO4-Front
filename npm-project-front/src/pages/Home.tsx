// Home.tsx
import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import logo from '../assets/images/AlMedinLogo.webp';
import Carousel from "../components/Carousel";

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ color: '#040A1A', pt: 8 }}>
      <Box>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <img src={logo} alt="Hospital Logo" style={{ width: '100%', maxWidth: '500px', marginBottom: '2rem' }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
              AlMedin
            </Typography>
            <Typography variant="body1" paragraph>
              Comprometidos siempre con la excelencia en el cuidado de la salud. Nuestro objetivo es proporcionar servicios médicos de alta calidad a todos nuestros pacientes.
            </Typography>
            <Typography variant="body1" component="h2" gutterBottom>
              Poniendo en práctica nuestro valores
            </Typography>
            <Typography variant="body1" paragraph>
              <ul>
                <li>Compromiso con la salud y el bienestar</li>
                <li>Atención personalizada y humana</li>
                <li>Innovación y tecnología de punta</li>
                <li>Ética y profesionalismo</li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Carousel />
        </Box>
      </Box>
    </Container>
  )
}

export default Home;
