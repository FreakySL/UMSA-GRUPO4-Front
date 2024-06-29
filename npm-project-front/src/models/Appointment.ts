import { MedicSpecialist } from "./MedicSpecialist";
import { Recipes } from "./Recipe";

export interface Appointment {
    pacientName : string;
    date : Date;
    startTime : Date;
    endTime : Date;
    consultation : string;
    state : string;
    medicSpecialist : MedicSpecialist;
    recipes : Recipes[]
}