import { Route, Routes } from "react-router-dom";
import AppointementForm from "../pages/AppointmentForm";
import CreateAppointmentForm from "../pages/CreateAppointmentForm";
import DocList from "../pages/DocList";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UpdateAppointmentPage from "../pages/UpdateAppointmentPage";

function RouterSelector() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/agendar-turno" element={<CreateAppointmentForm />} />
      <Route path="/actualizar-turno" element={<UpdateAppointmentPage />} />
      <Route path="/consultar-doctores" element={<DocList />} />
      <Route path="*" element={<AppointementForm />} />
    </Routes>
  );
}

export default RouterSelector;
