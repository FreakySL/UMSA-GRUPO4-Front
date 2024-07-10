import { Appointment } from "./Appointment.type";

export interface Recipes {
    id : number;
    date : Date;
    description : string;
    appointment : Appointment
}