import { MedicSpecialist } from "./MedicSpecialist.type";
import { Recipes } from "./Recipe.type";

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