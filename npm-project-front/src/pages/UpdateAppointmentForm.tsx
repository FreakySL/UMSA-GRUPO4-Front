import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { Appointment } from '../models/Appointment.type';

interface UpdateAppointmentFormProps {
  appointment: Appointment;
  onUpdate: (updatedAppointment: Appointment) => void;
}

const UpdateAppointmentForm: React.FC<UpdateAppointmentFormProps> = ({ appointment, onUpdate }) => {
  const [pacientName] = useState<string>(appointment.pacientName);
  const [date, setDate] = useState<Dayjs | null>(appointment.date);
  const [startTime, setStartTime] = useState<Dayjs | null>(appointment.startTime);
  const [endTime, setEndTime] = useState<Dayjs | null>(appointment.endTime);
  const [consultation, setConsultation] = useState<string>(appointment.consultation);
  const [medicSpecialist, setMedicSpecialist] = useState<string>(appointment.medicSpecialist.name); // Asumiendo que `medicSpecialist` tiene una propiedad `name`

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const updatedAppointment: Appointment = {
      ...appointment,
      pacientName,
      date,
      startTime,
      endTime,
      consultation,
      medicSpecialist: { ...appointment.medicSpecialist, name: medicSpecialist }, // Actualiza solo el nombre del especialista
      recipes: appointment.recipes, // Mantén las recetas como están
    };
    onUpdate(updatedAppointment);
  };

  const handleMedicSpecialistChange = (event: SelectChangeEvent<string>) => {
    setMedicSpecialist(event.target.value as string);
  };

  return (
    <div style={{ marginTop: '40px' }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3} justifyContent="center" direction="column" alignContent="center">
            <Grid item xs={12}>
              <TextField
                label="Nombre del paciente"
                fullWidth
                value={pacientName}
                InputProps={{
                  disabled: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel margin='dense' variant='standard' >Medico especialista</InputLabel>
                <Select
                  value={medicSpecialist}
                  onChange={handleMedicSpecialistChange}
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
                value={consultation}
                onChange={(e) => setConsultation(e.target.value)}
              />
            </Grid>
            <Grid item xs container direction="row" justifyContent="center" alignItems="center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid spacing={3} sx={{ minWidth: 305 }}>
                    <Typography color={'black'}>
                        Fecha
                    </Typography>
                    <DatePicker
                    value={date}
                    onChange={setDate}
                    defaultValue={dayjs(date)}
                    views={['year', 'month', 'day']}
                    />
                </Grid>
                <Grid spacing={3} sx={{ minWidth: 305 }}>
                    <Typography color={'black'}>
                        Horario Inicial
                    </Typography>
                    <TimePicker
                        value={startTime}
                        onChange={setStartTime}
                        referenceDate={dayjs(startTime)}
                    />
                </Grid>
                <Grid spacing={3} sx={{ minWidth: 305 }}>
                    <Typography color={'black'}>
                        Horario de salida
                    </Typography>
                    <TimePicker
                        value={endTime}
                        onChange={setEndTime}
                        referenceDate={dayjs(endTime)}
                    />
                </Grid>
            </LocalizationProvider>
          </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Actualizar Turno
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
  );
};

export default UpdateAppointmentForm;