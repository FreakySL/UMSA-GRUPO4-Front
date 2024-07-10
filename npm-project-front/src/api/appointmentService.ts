import apiClient from './apiClient';
import { ShiftCast } from '../models/ShiftCast.type';


export const createAppointment = async (appointment : ShiftCast): Promise<ShiftCast> => {
    try {
        const response = await apiClient.post("/Shift/Create" , appointment);
        return response.data;
    } catch (error) {
        console.error('Error fetching appointments', error);
        throw error;
    }
    
}

export const getAllAppointments = async (): Promise<ShiftCast[]> => {
    try {
      const response = await apiClient.get<ShiftCast[]>('/Shift/GetAll');
      return response.data;
    } catch (error) {
      console.error('Error fetching appointments', error);
      throw error;
    }
};
  
export const updateAppointment = async (id : number, appointment : ShiftCast) : Promise<ShiftCast> => {
    try{
        const response = await apiClient.put(`/Shift/Update/${id}`, appointment);
        return response.data;
    } catch (error) {
        console.error("Error fetching appointments", error);
        throw error;
    }
};

export const updateAppointmentState = async (id : number, state : string) : Promise<ShiftCast> => {
    try{
        const response = await apiClient.put(`/Shift/Update/${id}/${state}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching appointment", error);
        throw error;
    }
}

export const deleteAppointment = async (id: number) : Promise<void> => {
    try{
        await apiClient.delete(`/Shift/Delete/${id}`);
    } catch (error) {
        console.error("Error fetching appointments", error);
        throw error;
    }
};