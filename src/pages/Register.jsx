import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    // Lógica de registro de usuario
    navigate('/VerificationCode');
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          textAlign: "center",
          backgroundColor: "#213A62",
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ color: "#ffffff" }}>
          Agente CRM
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ color: "#24B8D2", fontSize: "1.25rem" }}
        >
          Registro de Usuario
        </Typography>
        <form onSubmit={handleRegister}>
          <TextField
            label="Correo electrónico"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#24B8D2",
                },
                "&:hover fieldset": {
                  borderColor: "#24B8D2",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#24B8D2",
                },
                "& input": {
                  color: "#FFFFFF",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#FFFFFF",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#FFFFFF",
              },
            }}
          />
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#24B8D2",
                },
                "&:hover fieldset": {
                  borderColor: "#24B8D2",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#24B8D2",
                },
                "& input": {
                  color: "#FFFFFF",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#FFFFFF",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#FFFFFF",
              },
            }}
          />
          <TextField
            label="Contraseña"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#24B8D2",
                },
                "&:hover fieldset": {
                  borderColor: "#24B8D2",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#24B8D2",
                },
                "& input": {
                  color: "#FFFFFF",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#FFFFFF",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#FFFFFF",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                    sx={{ color: "#24B8D2" }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Confirmar Contraseña"
            type={showConfirmPassword ? "text" : "password"}
            variant="outlined"
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#24B8D2",
                },
                "&:hover fieldset": {
                  borderColor: "#24B8D2",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#24B8D2",
                },
                "& input": {
                  color: "#FFFFFF",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#FFFFFF",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#FFFFFF",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle confirm password visibility"
                    onClick={handleClickShowConfirmPassword}
                    edge="end"
                    sx={{ color: "#24B8D2" }}
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              borderColor: "#24B8D2",
              borderWidth: 1,
              borderStyle: "solid",
            }}
          >
            Registrarse
          </Button>
        </form>
        <Typography variant="body2" sx={{ color: "#FFFFFF", mt: 2 }}>
          ¿Ya tienes una cuenta?
          <a
            href="/"
            style={{ color: "#24B8D2", textDecoration: "none" }}
          >
            {" "}
            Inicia sesion aquí
          </a>
        </Typography>
      </Box>
    </Container>
  );
};

export default Register;
