import React, { useState, useEffect } from 'react';
import UpdateAppointmentForm from './UpdateAppointmentForm';

const mockAppointment = {
  id: '123',
  name: 'Juan Pérez',
  date: new Date(),
  doctor: 'Dr. García',
  reason: 'Consulta general',
};
interface Appointment {
    id: string;
    name: string;
    date: Date;
    doctor: string;
    reason: string;
  }
  
const UpdateAppointmentPage: React.FC = () => {
  const [appointment, setAppointment] = useState<Appointment | null>(null);

  useEffect(() => {
    // Simulando la carga de datos desde una API
    setAppointment(mockAppointment);
  }, []);

  const handleUpdate = (updatedAppointment: Appointment) => {
    // Aquí puedes manejar la lógica para actualizar el turno en tu backend
    console.log('Updated appointment:', updatedAppointment);
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
