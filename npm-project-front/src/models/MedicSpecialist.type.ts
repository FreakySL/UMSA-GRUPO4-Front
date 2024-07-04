import { ConsultationHours } from "./ConsultationHours.type";

export interface MedicSpecialist {
    id : number;
    name : string;
    medicalSpeciality : string;
    consultationLocation : string;
    consultationHours : ConsultationHours[]
}