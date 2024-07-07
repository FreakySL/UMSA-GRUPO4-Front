import { Route, Routes } from "react-router-dom";
import CreateAppointmentForm from "../pages/CreateAppointmentForm";
import DocList from "../pages/DocList";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UpdateAppointmentPage from "../pages/UpdateAppointmentPage";
import AppointmentsMenu from "../pages/AppointmentsMenu";
import ModifyAppointment from "../pages/ModifyAppointment";

const id : number = -1;

function RouterSelector() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/agendar-turno" element={<CreateAppointmentForm />} />
      <Route path="/actualizar-turno" element={<UpdateAppointmentPage appointmentId={id}/>} />
      <Route path="/consultar-doctores" element={<DocList />} />
      <Route path="/listado-turnos" element={<AppointmentsMenu/>} />
      <Route path="/appointments/edit/:id" element={<ModifyAppointment />} />
    </Routes>
  );
}

export default RouterSelector;
