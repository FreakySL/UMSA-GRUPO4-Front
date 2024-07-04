import React, {
    createContext,
    useState,
    useContext,
    ReactNode,
} from "react";
import { Appointment } from "../models/Appointment.type";
import { ConsultationHours } from "../models/ConsultationHours.type";
import { MedicSpecialist } from "../models/MedicSpecialist.type";
import { Recipes } from "../models/Recipe.type";

type AlMedinContextType = {
    appointments: Appointment[];
    consultationHours: ConsultationHours[];
    medics: MedicSpecialist[];
    recipes: Recipes[];
    setAppointments: React.Dispatch<React.SetStateAction<Appointment[]>>;
};

const AlMedinContext = createContext<AlMedinContextType | undefined>(
    undefined
);

interface AlMedinProviderProps {
    children: ReactNode;
}

export const AlMedinProvider: React.FC<AlMedinProviderProps> = ({
    children,
}) => {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [consultationHours, setConsultationHours] = useState<ConsultationHours[]>([]);
    const [medics, setMedics] = useState<MedicSpecialist[]>([]);
    const [recipes, setRecipes] = useState<Recipes[]>([]);

    return (
        <AlMedinContext.Provider value={{ appointments, consultationHours, medics, recipes, setAppointments }}>
            {children}
        </AlMedinContext.Provider>
    );
};

export const useAlMedin = () => {
    const context = useContext(AlMedinContext);
    if (context === undefined) {
        throw new Error(
            "useAlMedin must be used within a AlMedinProvider"
        );
    }
    return context;
};

export default AlMedinContext;
