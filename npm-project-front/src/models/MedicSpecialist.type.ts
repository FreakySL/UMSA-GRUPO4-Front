import { ConsultationHours } from "./ConsultationHours.type";

export interface MedicSpecialist {
    id : number;
    name : string;
    medicalSpecialty : string;
    consultationLocation : string;
    consultationHours : ConsultationHours[]
}