// src/components/MedicSpecialists.tsx
import React from 'react';
import { Card, CardContent, Typography, CircularProgress, Grid, Container, List, ListItem, CardMedia } from '@mui/material';
import useMedicSpecialists from '../hooks/useMedicSpecialists';

const MedicSpecialists: React.FC = () => {
  const { specialists, loading, error } = useMedicSpecialists();

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">Error: {error.message}</Typography>;

  return (
    <Container>
      <Grid container spacing={3} marginTop={2} marginBottom={3} direction="column">
        {specialists.map((specialist) => (
          <Grid item key={specialist.id} xs={12}>
            <Card elevation={3}>
              <Grid container>
                <Grid item xs={4}>
                  <CardMedia
                    component="img"
                    height="160"
                    image={`https://picsum.photos/50?random=${specialist.id}`}
                    alt={specialist.name}
                  />
                </Grid>
                <Grid item xs={8}>
                  <CardContent>
                    <Typography variant="h5" marginBottom={1}>{specialist.name}</Typography>
                    <Typography variant="body2" marginBottom={1} color="textSecondary">
                      Especialidad: {specialist.medicalSpecialty}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Ubicación: {specialist.consultationLocation}
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MedicSpecialists;
