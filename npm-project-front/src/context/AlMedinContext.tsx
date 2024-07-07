import React, {
    createContext,
    useState,
    useContext,
    ReactNode,
    useEffect,
} from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebase";
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
    currentUser: User | null;
    setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const AlMedinContext = createContext<AlMedinContextType | undefined>(undefined);

interface AlMedinProviderProps {
    children: ReactNode;
}

export const AlMedinProvider: React.FC<AlMedinProviderProps> = ({ children }) => {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [consultationHours, setConsultationHours] = useState<ConsultationHours[]>([]);
    const [medics, setMedics] = useState<MedicSpecialist[]>([]);
    const [recipes, setRecipes] = useState<Recipes[]>([]);
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AlMedinContext.Provider value={{ appointments, consultationHours, medics, recipes, setAppointments, currentUser, setCurrentUser }}>
            {children}
        </AlMedinContext.Provider>
    );
};

export const useAlMedin = () => {
    const context = useContext(AlMedinContext);
    if (context === undefined) {
        throw new Error("useAlMedin must be used within a AlMedinProvider");
    }
    return context;
};

export default AlMedinContext;
