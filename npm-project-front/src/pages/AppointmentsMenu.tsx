import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Typography } from '@mui/material';
import useAppointments from '../hooks/useAppointment';
import { Appointment } from '../models/Appointment.type';
import dayjs, { Dayjs } from 'dayjs';
import useMedicSpecialists from '../hooks/useMedicSpecialists';
import MedicSpecialists from './MedicSpecialists';
import { ShiftCast } from '../models/ShiftCast.type';
import { MedicSpecialist } from '../models/MedicSpecialist.type';


const AppointmentsMenu: React.FC = () => {
  const { appointments, loading, error, removeAppointment } = useAppointments();
  const navigate = useNavigate();
  const {specialists} = useMedicSpecialists();

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">Error: {error.message}</Typography>;
  
  
  const handleEdit = (appointment : ShiftCast) => {
    navigate(`/appointments/edit/${appointment.id}`);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este turno?')) {
      await removeAppointment(id);
    }
  };

  const findDoctorName = (apt : ShiftCast) : String =>{

    const medic : MedicSpecialist[]= specialists.filter(m => m.id === apt.medicSpecialistId);
    return medic[0].name;
  }

  if (loading) {
    return <CircularProgress />;
  }

  return (

    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    {/* <TableCell>ID</TableCell> */}
                    <TableCell>Nombre del Paciente</TableCell>
                    <TableCell>Fecha</TableCell>
                    <TableCell>Hora de Inicio</TableCell>
                    <TableCell>Hora de Fin</TableCell>
                    <TableCell>Consulta</TableCell>
                    <TableCell>Médico Especialista</TableCell>
                    <TableCell>Acciones</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {appointments.map((apt) => 
                    <TableRow key={apt.id}>
                      
                        {/* <TableCell>{apt.id}</TableCell> */}
                        <TableCell>{apt.pacientName}</TableCell>
                        <TableCell>{dayjs(apt.shiftDate).format('DD/MM/YYYY')}</TableCell>
                        <TableCell>{dayjs(apt.startTime).format("h")}</TableCell>
                        <TableCell>{dayjs(apt.endTime).format("h")}</TableCell>
                        <TableCell>{apt.consultation}</TableCell>
                        <TableCell>{findDoctorName(apt)}</TableCell>
                        {/* <TableCell>{apt.consultation}</TableCell> */}
                        {/* <TableCell>{apt.pacientName}</TableCell> */}
                        {/* <TableCell>{apt.date?.format('YYYY-MM-DD')}</TableCell>
                        <TableCell>{apt.startTime?.format('HH:mm')}</TableCell>
                        <TableCell>{apt.endTime?.format('HH:mm')}</TableCell> */}
                        {/* <TableCell>{apt.consultation}</TableCell>
                        <TableCell>{apt.state}</TableCell>
                        <TableCell>{apt.medicSpecialist.name}</TableCell> */}
                        <TableCell>
                            <Button variant="contained" color="primary" onClick={() => handleEdit(apt)}>
                            Editar
                            </Button>
                            <Button variant="contained" color="secondary" onClick={() => handleDelete(apt.id)}>
                            Eliminar
                            </Button>
                        </TableCell>
                    </TableRow>
                
                )}
                

            </TableBody>
        </Table>
    </TableContainer>
  );
};

export default AppointmentsMenu;
