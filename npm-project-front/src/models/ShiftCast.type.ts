import { Recipes } from "./Recipe.type";
import { Dayjs } from "dayjs";

export interface ShiftCast {
    id: number;
    pacientName: string;
    shiftDate: Dayjs | null; 
    startTime: Dayjs | null; 
    endTime: Dayjs | null; 
    consultation: string;
    state: string;
    medicSpecialistId: number;
    recipes: Recipes[];
  }