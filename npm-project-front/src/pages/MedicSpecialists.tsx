// src/components/MedicSpecialists.tsx
import React from 'react';
import { Card, CardContent, Typography, CircularProgress, Grid, Container, List, ListItem } from '@mui/material';
import useMedicSpecialists from '../hooks/useMedicSpecialists';

const MedicSpecialists: React.FC = () => {
  const { specialists, loading, error } = useMedicSpecialists();

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">Error: {error.message}</Typography>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Nuestros Especialistas Médicos
      </Typography>
      <Grid container spacing={3}>
        {specialists.map((specialist) => (
          <Grid item key={specialist.id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">{specialist.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Especialidad: {specialist.medicalSpecialty}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Ubicación: {specialist.consultationLocation}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Horarios de Consulta:
                </Typography>
                {specialist.consultationHours.length > 0 ? (
                  <List>
                    {specialist.consultationHours.map((hour) => (
                      <ListItem key={hour.id}>
                        {hour.dayOfWeek}: {hour.startTime} - {hour.endTime}
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <Typography variant="body2" color="textSecondary">
                    No disponible
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MedicSpecialists;
