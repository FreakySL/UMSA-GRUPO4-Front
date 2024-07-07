import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import UserAvatar from "./UserAvatar";
import { useAlMedin } from "../context/AlMedinContext";

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser } = useAlMedin();
  const isLogged = !!currentUser;

  const handleNav = (path: string) => {
    if (!isLogged) {
      navigate('/login');
    } else {
      navigate(path);
    }
  };

  return (
    <Box display="flex" alignItems="center">
      <nav>
        <Button color='inherit' onClick={() => handleNav('/agendar-turno')}>
          Agendar Turno
        </Button>
        <Button color='inherit' onClick={() => handleNav('/actualizar-turno')}>
          Modificar Turno
        </Button>
        <Button color='inherit' onClick={() => navigate('/especialistas-medicos')}>
          Nuestros especialistas médicos
        </Button>
        <Button color='inherit' onClick={() => navigate('/about')}>
          Nosotros
        </Button>
      </nav>
      <UserAvatar />
    </Box>
  );
}

export default NavBar;
