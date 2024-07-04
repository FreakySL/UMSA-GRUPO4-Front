import { ConsultationHours } from "./ConsultationHours.type";

export interface MedicSpecialist {
    name : string;
    medicalSpeciality : string;
    consultationLocation : string;
    consultationHours : ConsultationHours[]
}