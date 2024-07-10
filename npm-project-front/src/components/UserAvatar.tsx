import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { deepOrange } from '@mui/material/colors';
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAlMedin } from "../context/AlMedinContext";

const UserAvatar: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser } = useAlMedin();
  const userProfileImage: string | undefined | null = currentUser?.photoURL;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (!currentUser) {
      navigate('/login');
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    navigate('/perfil');
    handleClose();
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error("Error al cerrar sesión: ", error);
    }
    handleClose();
  };

  return (
    <>
      <Avatar
        src={userProfileImage || undefined}
        sx={{ bgcolor: deepOrange[500], ml: 2, cursor: 'pointer' }}
        alt="Profile"
        onClick={handleClick}
      >
        {!userProfileImage && currentUser?.displayName?.charAt(0)}
      </Avatar>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          sx: {
            width: '130px',
          }
        }}
      >
        <MenuItem onClick={handleProfile}>Perfil</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default UserAvatar;
