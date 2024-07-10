import { useState, useEffect } from 'react';
import { getAllAppointments , deleteAppointment } from '../api/appointmentService';
import { Appointment } from '../models/Appointment.type';
import { ShiftCast } from '../models/ShiftCast.type';
import useMedicSpecialists from './useMedicSpecialists';
import { MedicSpecialist } from '../models/MedicSpecialist.type';

const useAppointments = () => {
  const [appointments, setAppointments] = useState<ShiftCast[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
 /*  const {specialists} = useMedicSpecialists();

  const addMedicSpecialistToAppointment = (appointment: ShiftCast): Appointment => {
    const array : MedicSpecialist[]= specialists.filter(m => m.id === appointment.medicSpecialistId);

    return {
      id : appointment.id,
      pacientName : appointment.pacientName,
      date : appointment.shiftDate,
      startTime : appointment.startTime,
      endTime : appointment.endTime,
      consultation : appointment.consultation,
      state : appointment.state,
      medicSpecialist: array[0],
      recipes : appointment.recipes
    }
  }; */

 
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const fetchedAppointments = await getAllAppointments();

        setAppointments(fetchedAppointments);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const removeAppointment = async (id: number) => {
    try {
      await deleteAppointment(id);
      setAppointments((prev) => prev.filter((appointment) => appointment.id !== id));
    } catch (error) {
      setError(error as Error);
    }
  };

  return { appointments, loading, error,removeAppointment };
};

export default useAppointments;
