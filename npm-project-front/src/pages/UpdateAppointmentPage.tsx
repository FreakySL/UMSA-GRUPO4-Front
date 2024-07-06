import React, { useState, useEffect } from 'react';
import UpdateAppointmentForm from './UpdateAppointmentForm';
import useUpdateAppointment from '../hooks/useUpdateAppointment';
import { Appointment } from '../models/Appointment.type';
import { ConsultationHours } from '../models/ConsultationHours.type';
import dayjs from "dayjs";


const mockAppointment: Appointment = {
  id: 123,
  pacientName: 'Juan Pérez',
  date: dayjs('2024-07-01T10:00:00'),
  startTime: dayjs('2024-07-01T10:00:00'),
  endTime: dayjs('2024-07-01T11:00:00'),
  consultation: 'Consulta general',
  state: 'Pendiente',
  medicSpecialist: {
    id: 1,
    name: 'Dr. García',
    medicalSpeciality: 'General',
    consultationLocation: 'Consultorio 101',
    consultationHours: []
  },
  recipes: []
};

const UpdateAppointmentPage: React.FC<{ appointmentId: number }> = ({ appointmentId }) => {
  const { getAppointmentById, updateAppointment } = useUpdateAppointment();
  const [appointment, setAppointment] = useState<Appointment | null>(null);

  useEffect(() => {

    
    setAppointment(mockAppointment)
    /* const foundAppointment = getAppointmentById(appointmentId);
    if (foundAppointment) {
      setAppointment(foundAppointment);
    } */
  }, [getAppointmentById, appointmentId]);

  const handleUpdate = (updatedAppointment: Appointment) => {
    updateAppointment(updatedAppointment);
  };

  return (
    <div>
      {appointment ? (
        <UpdateAppointmentForm appointment={appointment} onUpdate={handleUpdate} />
      ) : (
        <p>Cargando datos del turno...</p>
      )}
    </div>
  );
};

export default UpdateAppointmentPage;
