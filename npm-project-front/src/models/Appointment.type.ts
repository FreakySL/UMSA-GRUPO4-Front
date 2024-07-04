import { MedicSpecialist } from "./MedicSpecialist.type";
import { Recipes } from "./Recipe.type";
import { Dayjs } from 'dayjs';

export interface Appointment {
    id : number;
    pacientName : string;
    date : Dayjs | null;
    startTime : Dayjs | null;
    endTime : Dayjs | null;
    consultation : string;
    state : string;
    medicSpecialist : MedicSpecialist;
    recipes : Recipes[]
}