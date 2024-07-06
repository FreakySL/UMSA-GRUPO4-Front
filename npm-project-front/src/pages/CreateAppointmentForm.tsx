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
import "./pages.module.css"
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';


const CreateAppointmentForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [date, setDate] = useState<Dayjs | null>(null);
  const [doctor, setDoctor] = useState<string>('');
  const [reason, setReason] = useState<string>('');
  const [startTime, setStartTime] = React.useState<Dayjs | null>(null);
  const [endTime, setEndTime] = React.useState<Dayjs | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica para enviar los datos del formulario
    console.log({
      name,
      date,
      doctor,
      reason,
    });
  };

  const handleDoctorChange = (event: SelectChangeEvent<string>) => {
    setDoctor(event.target.value as string);
  };

  return (
    <div className='form-container'>
       <form onSubmit={handleSubmit}>
        <Grid sx={{mt:2}} container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={4}>
            <TextField
              label="Nombre del paciente"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
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
          <Grid item xs={10} container direction="row" justifyContent="center" alignItems="center">
            <TextField
              label="Motivo de la consulta"
              fullWidth
              value={reason}
              onChange={(e) => setReason(e.target.value)}
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
                    defaultValue={dayjs()}
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
                        referenceDate={dayjs('2022-04-17')}
                    />
                </Grid>
                <Grid spacing={3} sx={{ minWidth: 305 }}>
                    <Typography color={'black'}>
                        Horario de salida {" Hora: " }
                    </Typography>
                    <TimePicker
                        value={endTime}
                        onChange={setEndTime}
                        defaultValue={dayjs()}
                    />
                </Grid>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={3} container justifyContent="center" alignItems="center">
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Crear Turno
            </Button>
          </Grid>
        </Grid>
      </form> 
    </div>  
      
  );
};

export default CreateAppointmentForm;
