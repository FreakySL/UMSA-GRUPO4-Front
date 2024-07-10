import React, { useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { updateAppointment } from '../api/appointmentService';
import { Appointment } from '../models/Appointment.type';
import { MedicSpecialist } from '../models/MedicSpecialist.type';
import { LocalizationProvider, DatePicker, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const ModifyAppointment: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [appointment, setAppointment] = useState<Appointment | null>(null);
  
    useEffect(() => {
      if (location.state && location.state.appointment) {
        setAppointment(location.state.appointment);
      } else {
        navigate('/listado-turnos'); // Redirige a la página de turnos si no hay datos
      }
    }, [location.state, navigate]);
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setAppointment((prev) => prev ? { ...prev, [name]: value } : null);
    };
  
    const handleDateChange = (date: Dayjs | null) => {
      setAppointment((prev) => prev ? { ...prev, date } : null);
    };
  
    const handleTimeChange = (name: string, time: Dayjs | null) => {
      setAppointment((prev) => prev ? { ...prev, [name]: time } : null);
    };
  
    const handleMedicSpecialistChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setAppointment((prev) => {
        if (prev) {
          const medicSpecialist: MedicSpecialist = {
            ...prev.medicSpecialist,
            [name]: value,
          };
          return { ...prev, medicSpecialist };
        }
        return null;
      });
    };
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (appointment) {
        try {
          await updateAppointment(appointment.id, appointment);
          navigate('/listado-turnos');
        } catch (error) {
          console.error('Error updating appointment:', error);
        }
      }
    };
  
    if (!appointment) {
      return <div>Cargando...</div>;
    }

  return (

    <Typography>holi</Typography>

  );
    {/* <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <TextField
        name="pacientName"
        label="Nombre del Paciente"
        value={appointment.pacientName}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
            value={appointment.date}
            onChange={handleDateChange}
            defaultValue={dayjs()}
            views={['year', 'month', 'day']}
        />
        <TimePicker
          label="Hora de Inicio"
          value={appointment.startTime}
          defaultValue={appointment.startTime}
          onChange={(time) => handleTimeChange('startTime', time)}

        />
        <TimePicker
          label="Hora de Fin"
          value={appointment.endTime}
          defaultValue={appointment.endTime}
          onChange={(time) => handleTimeChange('endTime', time)}
        />
      </LocalizationProvider>
      <TextField
        name="consultation"
        label="Motivo de la Consulta"
        value={appointment.consultation}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="state"
        label="Estado"
        value={appointment.state}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="name"
        label="Nombre del Médico"
        value={appointment.medicSpecialist.name}
        onChange={handleMedicSpecialistChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="medicalSpeciality"
        label="Especialidad Médica"
        value={appointment.medicSpecialist.medicalSpeciality}
        onChange={handleMedicSpecialistChange}
        fullWidth
        margin="normal"
      />
      <TextField
        name="consultationLocation"
        label="Ubicación de la Consulta"
        value={appointment.medicSpecialist.consultationLocation}
        onChange={handleMedicSpecialistChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Guardar Cambios
      </Button>
    </Box> */}
  
};

export default ModifyAppointment;