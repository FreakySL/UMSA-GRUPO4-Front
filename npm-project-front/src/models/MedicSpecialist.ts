import { ConsultationHours } from "./ConsultationHours";

export interface MedicSpecialist {
    name : string;
    medicalSpeciality : string;
    consultationLocation : string;
    consultationHours : ConsultationHours[]
}