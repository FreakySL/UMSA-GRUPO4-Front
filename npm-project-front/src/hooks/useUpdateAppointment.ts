import { useCallback } from 'react';
import { useAlMedin } from '../context/AlMedinContext';
import { Appointment } from '../models/Appointment.type';

const useUpdateAppointment = () => {
  const { appointments, setAppointments } = useAlMedin();

  const getAppointmentById = useCallback(
    (appointmentId: number): Appointment | undefined => {
      return appointments.find((appt) => appt.id === appointmentId);
    },
    [appointments]
  );

  const updateAppointment = (updatedAppointment: Appointment) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === updatedAppointment.id ? updatedAppointment : appointment
      )
    );
  };

  return { getAppointmentById, updateAppointment };
};

export default useUpdateAppointment;
