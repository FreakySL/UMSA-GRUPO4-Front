import {Dayjs} from "dayjs"

export interface ConsultationHours {
    id : number;
    dayOfWeek : string;
    startTime : Dayjs | null;
    endTime : Dayjs | null;
}