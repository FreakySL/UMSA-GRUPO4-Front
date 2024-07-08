import { Recipe } from "./Recipe";

export interface Shift {
    id: number;
    pacientName: string;
    shiftDate: string; 
    startTime: string; 
    endTime: string; 
    consultation: string;
    state: string;
    medicSpecialistId: number;
    recipes: Recipe[];
  }