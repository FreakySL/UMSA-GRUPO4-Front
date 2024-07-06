// src/api/medicSpecialistService.ts
import apiClient from './apiClient';

export interface ConsultationHour {
  id: number;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  medicSpecialistId: number | null;
}

export interface MedicSpecialist {
  id: number;
  name: string;
  medicalSpecialty: string;
  consultationLocation: string;
  consultationHours: ConsultationHour[];
}

export const getMedicSpecialists = async (): Promise<MedicSpecialist[]> => {
  try {
    const response = await apiClient.get<MedicSpecialist[]>('/MedicSpecialist/GetAll');
    return response.data;
  } catch (error) {
    console.error('Error fetching medic specialists', error);
    throw error;
  }
};
