import React, { useState, useRef } from "react";
import { Container, Box, Typography, Avatar, Button, TextField } from "@mui/material";
import { deepOrange } from '@mui/material/colors';
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase"; 
import { useAlMedin } from "../context/AlMedinContext";

const Profile: React.FC = () => {
  const { currentUser, setCurrentUser } = useAlMedin();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState(currentUser!.displayName || "");
  const [email, setEmail] = useState(currentUser!.email || "");
  const [photoURL, setPhotoURL] = useState(currentUser!.photoURL || "");

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName,
          photoURL
        });
        setCurrentUser({
          ...auth.currentUser,
          displayName,
          email,
          photoURL
        });
      }
      setIsEditing(false);
    } catch (error) {
      console.error("Error al actualizar el perfil:", error);
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && auth.currentUser) {
      const storageRef = ref(storage, `profilePictures/${auth.currentUser.uid}`);
      await uploadBytes(storageRef, file);
      const newPhotoURL = await getDownloadURL(storageRef);
      setPhotoURL(newPhotoURL);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ pt: 8 }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar
          src={photoURL || undefined}
          sx={{ bgcolor: deepOrange[500], width: 100, height: 100, mb: 2, cursor: 'pointer' }}
        >
          {!photoURL && currentUser!.displayName?.charAt(0)}
        </Avatar>
        <Typography variant="h4" component="h1" color='black' gutterBottom>
          Mi perfil
        </Typography>
        <TextField
          label="Nombre"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          margin="normal"
          fullWidth
          InputProps={{
            readOnly: !isEditing,
          }}
        />
        <TextField
          label="Email"
          value={email}
          margin="normal"
          fullWidth
          InputProps={{
            readOnly: true,
          }}
        />
        {isEditing ? (
          <Button variant="contained" color="primary" onClick={handleSave} sx={{ mt: 2 }}>
            Guardar Perfil
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleEdit} sx={{ mt: 2 }}>
            Actualizar Perfil
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default Profile;
