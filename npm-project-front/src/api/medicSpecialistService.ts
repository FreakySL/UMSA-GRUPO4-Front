// src/api/medicSpecialistService.ts
import { MedicSpecialist } from '../models/MedicSpecialist.type';
import apiClient from './apiClient';

export const getMedicSpecialists = async (): Promise<MedicSpecialist[]> => {
  try {
    const response = await apiClient.get<MedicSpecialist[]>('/MedicSpecialist/GetAll');
    return response.data;
  } catch (error) {
    console.error('Error fetching medic specialists', error);
    throw error;
  }
};
