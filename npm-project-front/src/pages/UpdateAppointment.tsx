import React, { useEffect, useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs';

interface Appointment {
  id: string;
  name: string;
  date: Date;
  doctor: string;
  reason: string;
}

interface UpdateAppointmentFormProps {
  appointment: Appointment;
  onUpdate: (updatedAppointment: Appointment) => void;
}

const UpdateAppointment: React.FC<UpdateAppointmentFormProps> = ({ appointment, onUpdate }) => {
  const [name, setName] = useState<string>(appointment.name);
  const [date, setDate] = useState<Date | null>(appointment.date);
  const [doctor, setDoctor] = useState<string>(appointment.doctor);
  const [reason, setReason] = useState<string>(appointment.reason);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const updatedAppointment: Appointment = {
      id: appointment.id,
      name,
      date: date!,
      doctor,
      reason,
    };
    onUpdate(updatedAppointment);
  };

  const handleDoctorChange = (event: SelectChangeEvent<string>) => {
    setDoctor(event.target.value as string);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div style={{ marginTop: '80px' }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Nombre del paciente"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} fullWidth />}
                label="Fecha y hora de la cita"
                value={date}
                onChange={(newValue) => setDate(newValue)}
              />
            </Grid> */}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Medico especialista</InputLabel>
                <Select
                  value={doctor}
                  onChange={handleDoctorChange}
                >
                  <MenuItem value="Dr. Pérez">Dr. Pérez</MenuItem>
                  <MenuItem value="Dr. García">Dr. García</MenuItem>
                  <MenuItem value="Dra. Martínez">Dra. Martínez</MenuItem>
                  {/* Agrega más médicos según sea necesario */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Motivo de la consulta"
                fullWidth
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Actualizar Turno
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </LocalizationProvider>
  );
};

export default UpdateAppointment;
