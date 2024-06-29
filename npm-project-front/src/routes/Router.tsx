import { Routes, Route } from "react-router-dom";
import AppointementForm from "../pages/AppointmentForm";
import CancelMedicAppointment from "../pages/CancelMedicAppointment";
import DocList from "../pages/DocList";
import DownloadRecipe from "../pages/DownloadRecipe";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<AppointementForm />} />
      <Route path="/page2" element={<CancelMedicAppointment />} />
      <Route path="/page3" element={<DocList />} />
      <Route path="*" element={<AppointementForm />} />
    </Routes>
  );
}

export default Router;
