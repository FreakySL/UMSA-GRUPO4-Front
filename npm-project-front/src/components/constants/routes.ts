import AppointementForm from "../../pages/AppointmentForm";
import CancelMedicAppointment from "../../pages/CancelMedicAppointment";
import DocList from "../../pages/DocList";
import DownloadRecipe from "../../pages/DownloadRecipe";

interface RouteInfo {
  id: string;
  path: string;
  label: string;
  component: React.ComponentType;
}

const routes: RouteInfo[] = [
  {
    id: "page1",
    path: "/",
    label: "Agregar/Modificar Turno",
    component: AppointementForm,
  },
  {
    id: "page2",
    path: "/page2",
    label: "Lista de doctores disponibles",
    component: CancelMedicAppointment,
  },
  {
    id: "page3",
    path: "/page3",
    label: "Cancelar Turno",
    component: DocList,
  },
  {
    id:"page4",
    path: "/page4",
    label: "Descargar receta",
    component: DownloadRecipe,
  }
];

export default routes;