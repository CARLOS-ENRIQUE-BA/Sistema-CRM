import React, { useState } from 'react';
import { Container, Box, Typography, TextField, Button, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Lógica de inicio de sesión
    navigate('/HomePage');
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container maxWidth="sm" sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Box sx={{ p: 3, boxShadow: 3, borderRadius: 2, textAlign: "center", backgroundColor: "#213A62" }}>
        <Typography variant="h3" gutterBottom sx={{ color: "#ffffff"}}>
          Agente CRM
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ color: "#24B8D2", fontSize: "1.25rem" }}>
          Iniciar Sesión
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Correo electrónico"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#24B8D2',
                },
                '&:hover fieldset': {
                  borderColor: '#24B8D2',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#24B8D2',
                },
                '& input': {
                  color: '#FFFFFF', // Color del texto
                },
              },
              '& .MuiInputLabel-root': {
                color: '#FFFFFF', // Color del label
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#FFFFFF', // Color del label cuando está enfocado
              },
            }}
          />
          <TextField
            label="Contraseña"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#24B8D2',
                },
                '&:hover fieldset': {
                  borderColor: '#24B8D2',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#24B8D2',
                },
                '& input': {
                  color: '#FFFFFF', // Color del texto
                },
              },
              '& .MuiInputLabel-root': {
                color: '#FFFFFF', // Color del label
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#FFFFFF', // Color del label cuando está enfocado
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                    sx={{ color: '#24B8D2' }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2, borderColor: '#24B8D2', borderWidth: 1, borderStyle: 'solid' }}>
            Iniciar sesión
          </Button>
        </form>
        <Typography variant="body2" sx={{ color: "#FFFFFF", mt: 2 }}>
          <a href="#" style={{ color: "#24B8D2", textDecoration: "none" }}>¿Olvidaste la contraseña?</a>
        </Typography>
        <Typography variant="body2" sx={{ color: "#FFFFFF", mt: 1 }}>
          ¿No estás registrado?<a href="Register" style={{ color: "#24B8D2", textDecoration: "none" }}> Crea una cuenta aquí</a>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;