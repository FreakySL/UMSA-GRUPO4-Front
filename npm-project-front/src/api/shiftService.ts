import { Shift } from "../models/Shift";
import apiClient from "./apiClient";

export const getShiftsByMedicSpecialistId = async (medicSpecialistId: string): Promise<Shift[]> => {
    try {
      const response = await apiClient.get(`/Shift/GetByMedicSpecialistId/${medicSpecialistId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching shifts:', error);
      throw error;
    }
};

export const updateShiftState = async (id: number, state: string): Promise<void> => {
    try {
      await apiClient.put(`/Shift/UpdateState/${id}/${state}`);
    } catch (error) {
      console.error('Error updating shift state:', error);
      throw error;
    }
};