import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, CircularProgress, Grid, List, ListItem, ListItemText, Button, Dialog, DialogTitle, DialogContent, DialogActions, Box, Snackbar, Alert } from '@mui/material';
import { useParams } from 'react-router-dom';
import useFetchShifts from '../hooks/useFetchShifts';
import { updateShiftState } from '../api/shiftService';

const MedicAppointments: React.FC = () => {
  const { medicSpecialistId } = useParams<{ medicSpecialistId: string }>();
  const { shifts, loading, error, refetch } = useFetchShifts(medicSpecialistId!);
  const [selectedShift, setSelectedShift] = useState<null | number>(null);
  const [confirmDialog, setConfirmDialog] = useState<{ open: boolean, action: string, shiftId: number | null }>({ open: false, action: '', shiftId: null });
  const [snackbar, setSnackbar] = useState<{ open: boolean, message: string, severity: 'success' | 'error' }>({ open: false, message: '', severity: 'success' });

  const handleCloseShift = async (shiftId: number) => {
    setConfirmDialog({ open: true, action: 'close', shiftId });
  };

  const handleCancelShift = async (shiftId: number) => {
    setConfirmDialog({ open: true, action: 'cancel', shiftId });
  };

  const handleAddRecipe = (shiftId: number) => {
    // Lógica para añadir una receta
  };

  const handleViewRecipes = (shiftId: number) => {
    setSelectedShift(shiftId);
  };

  const handleCloseModal = () => {
    setSelectedShift(null);
  };

  const handleSnackbarClose = () => {
    setSnackbar({ open: false, message: '', severity: 'success' });
  };

  const confirmAction = async () => {
    if (confirmDialog.shiftId !== null) {
      const action = confirmDialog.action === 'close' ? 'Closed' : 'Cancelled';
      try {
        await updateShiftState(confirmDialog.shiftId, action);
        setConfirmDialog({ open: false, action: '', shiftId: null });
        refetch();
        setSnackbar({ open: true, message: `¡El turno se ha ${action === 'Closed' ? 'cerrado' : 'cancelado'} exitosamente!`, severity: 'success' });
      } catch (error) {
        console.error(`Error ${confirmDialog.action}ing shift:`, error);
        setSnackbar({ open: true, message: `Error al ${confirmDialog.action === 'close' ? 'cerrar' : 'cancelar'} el turno`, severity: 'error' });
      }
    }
  };

  if (loading) return <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh"><CircularProgress /></Box>;
  if (error) return <Typography color="error">Error: {error}</Typography>;

  const selectedShiftRecipes = shifts.find((shift) => shift.id === selectedShift)?.recipes || [];

  return (
    <Container>
      <Grid container spacing={3} marginTop={2} marginBottom={3} direction="column">
        {shifts.map((shift) => (
          <Grid item key={shift.id}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {shift.pacientName}
                </Typography>
                <Typography color="textSecondary">
                  Fecha: {new Date(shift.shiftDate).toLocaleDateString()}
                </Typography>
                <Typography color="textSecondary">
                  Hora: {shift.startTime} - {shift.endTime}
                </Typography>
                <Typography color="textSecondary">
                  Consulta: {shift.consultation}
                </Typography>
                <Typography color="textSecondary">
                  Estado: {shift.state}
                </Typography>
                {shift.state === 'Created' && (
                  <Box mt={2}>
                    <Button variant="contained" color="primary" onClick={() => handleCloseShift(shift.id)} style={{ marginRight: '8px' }}>
                      CERRAR TURNO
                    </Button>
                    <Button variant="contained" color="secondary" onClick={() => handleAddRecipe(shift.id)} style={{ marginRight: '8px' }}>
                      AÑADIR RECETA
                    </Button>
                    <Button variant="contained" color="error" onClick={() => handleCancelShift(shift.id)}>
                      CANCELAR TURNO
                    </Button>
                  </Box>
                )}
                {shift.state === 'Closed' && (
                  <Box mt={2}>
                    <Button variant="contained" color="primary" onClick={() => handleViewRecipes(shift.id)}>
                      VER RECETAS
                    </Button>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog open={selectedShift !== null} onClose={handleCloseModal}>
        <DialogTitle>Recetas</DialogTitle>
        <DialogContent>
          {selectedShiftRecipes.length > 0 ? (
            <List>
              {selectedShiftRecipes.map((recipe) => (
                <ListItem key={recipe.id}>
                  <ListItemText
                    primary={`Descripción: ${recipe.description}`}
                    secondary={`Fecha: ${new Date(recipe.date).toLocaleDateString()}`}
                  />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography>No se ha emitido ninguna receta en este turno</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={confirmDialog.open} onClose={() => setConfirmDialog({ open: false, action: '', shiftId: null })}>
        <DialogTitle>Confirmar</DialogTitle>
        <DialogContent>
          <Typography marginTop={2}>
            {confirmDialog.action === 'close' ? '¿Está seguro de cerrar el turno?' : '¿Está seguro de cancelar el turno?'}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmDialog({ open: false, action: '', shiftId: null })} color="primary">
            No
          </Button>
          <Button onClick={confirmAction} color="primary">
            Sí
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default MedicAppointments;
