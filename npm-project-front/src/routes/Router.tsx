import { Routes, Route } from "react-router-dom";
import AppointementForm from "../pages/AppointmentForm";
import CancelMedicAppointment from "../pages/CancelMedicAppointment";
import DocList from "../pages/DocList";
import Home from "../pages/Home";
import DownloadRecipe from "../pages/DownloadRecipe";
import CreateAppointmentForm from "../pages/CreateAppointmentForm";

function RouterSelector() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agendar-turno" element={<CreateAppointmentForm />} />
      <Route path="/cancelar-turno" element={<CancelMedicAppointment />} />
      <Route path="/consultar-doctores" element={<DocList />} />
      <Route path="*" element={<AppointementForm />} />
    </Routes>
  );
}

export default RouterSelector;
