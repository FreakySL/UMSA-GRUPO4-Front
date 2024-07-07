import { Route, Routes } from "react-router-dom";
import CreateAppointmentForm from "../pages/CreateAppointmentForm";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UpdateAppointmentPage from "../pages/UpdateAppointmentPage";
import MedicSpecialists from "../pages/MedicSpecialists";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Profile from "../pages/Profile";

function RouterSelector() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/agendar-turno" element={<CreateAppointmentForm />} />
        <Route path="/actualizar-turno" element={<UpdateAppointmentPage appointmentId={0} />} />
        <Route path="/especialistas-medicos" element={<MedicSpecialists />} />
        <Route path="/perfil" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default RouterSelector;
