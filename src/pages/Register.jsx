import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Card,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    // Lógica de registro de usuario
    setOpenDialog(true); // Abrir la ventana emergente
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSelectFreePlan = () => {
    setOpenDialog(false); // Cerrar el diálogo
    navigate('/VerificationCode'); // Redirigir a la página de inicio
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
            href="/Register"
            style={{ color: "#24B8D2", textDecoration: "none" }}
          >
            {" "}
            Inicia sesion aquí
          </a>
        </Typography>
      </Box>

      {/* Ventana emergente para los planes */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth={false}
        sx={{
          "& .MuiDialog-paper": {
            width: "100%",
            maxWidth: "1200px",
          },
        }}
      >
        <DialogTitle sx={{ textAlign: "center", fontWeight: "bold", color: "#213A62" }}>
          Selecciona un Plan
        </DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
            flexWrap: "nowrap",
            p: 4,
            overflowX: "auto",
            "& > *": {
              flex: "0 0 auto",
            }
          }}
        >
          {/* Plan Gratuito */}
          <Card
            sx={{
              width: 300,
              textAlign: "left",
              p: 4,
              boxShadow: 3,
              borderRadius: 2,
              background: "#ffffff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Typography variant="h4" sx={{ color: "#213A62", fontWeight: "bold", mb: 2 }}>
                Gratis
              </Typography>
              <Typography variant="h6" sx={{ color: "#666", mb: 2 }}>
                Paquete Básico
              </Typography>
              <Typography variant="h5" sx={{ color: "#213A62", mb: 3 }}>
                MX$0.00
              </Typography>
              <Typography variant="body2" sx={{ color: "#666", mb: 1 }}>
                (incluye publicidad)
              </Typography>
            </div>
            <div>
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  mt: 2,
                  mb: 3,
                  borderColor: "#24B8D2",
                  color: "#24B8D2",
                  "&:hover": {
                    borderColor: "#1A91B8",
                    backgroundColor: "rgba(36, 184, 210, 0.1)",
                  },
                }}
                onClick={handleSelectFreePlan}
              >
                Únete gratis
              </Button>
              <Typography variant="subtitle1" sx={{ color: "#213A62", fontWeight: "bold", mb: 1 }}>
                Incluye:
              </Typography>
              <Typography variant="body2" sx={{ color: "#666", display: "flex", alignItems: "center", mb: 1 }}>
                • Tiempos de espera estándar
              </Typography>
              <Typography variant="body2" sx={{ color: "#666", display: "flex", alignItems: "center" }}>
                • Sesiones de 1 hora de duración
              </Typography>
            </div>
          </Card>

          {/* Plan Premium */}
          <Card
            sx={{
              width: 300,
              textAlign: "left",
              p: 4,
              boxShadow: 3,
              borderRadius: 2,
              background: "#ffffff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <div>
              <Typography variant="h4" sx={{ color: "#213A62", fontWeight: "bold", mb: 2 }}>
                Intermedio
              </Typography>
              <Typography variant="h6" sx={{ color: "#666", mb: 2 }}>
                Plan Pro
              </Typography>
              <Typography variant="h5" sx={{ color: "#213A62", mb: 3 }}>
                MX$174.00 / mes
              </Typography>
              <Typography variant="body2" sx={{ color: "#666", mb: 1 }}>
                (sin publicidad)
              </Typography>
            </div>
            <div>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  mb: 3,
                  backgroundColor: "#24B8D2",
                  "&:hover": {
                    backgroundColor: "#1A91B8",
                  },
                }}
                disabled
              >
                No Disponible
              </Button>
              <Typography variant="subtitle1" sx={{ color: "#213A62", fontWeight: "bold", mb: 1 }}>
                Incluye:
              </Typography>
              <Typography variant="body2" sx={{ color: "#666", display: "flex", alignItems: "center", mb: 1 }}>
                • Tiempos de espera reducidos
              </Typography>
              <Typography variant="body2" sx={{ color: "#666", display: "flex", alignItems: "center" }}>
                • Sesiones de 6 horas de duración
              </Typography>
            </div>
          </Card>

          {/* Plan Empresarial */}
          <Card
            sx={{
              width: 300,
              textAlign: "left",
              p: 4,
              boxShadow: 3,
              borderRadius: 2,
              background: "#ffffff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Typography variant="h4" sx={{ color: "#213A62", fontWeight: "bold", mb: 2 }}>
                Avanzado
              </Typography>
              <Typography variant="h6" sx={{ color: "#666", mb: 2 }}>
                Plan Premium 
              </Typography>
              <Typography variant="h5" sx={{ color: "#213A62", mb: 3 }}>
                MX$349.00 / mes
              </Typography>
              <Typography variant="body2" sx={{ color: "#666", mb: 1 }}>
                (sin publicidad)
              </Typography>
            </div>
            <div>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  mb: 3,
                  backgroundColor: "#24B8D2",
                  "&:hover": {
                    backgroundColor: "#1A91B8",
                  },
                }}
                disabled
              >
                No Disponible
              </Button>
              <Typography variant="subtitle1" sx={{ color: "#213A62", fontWeight: "bold", mb: 1 }}>
                Incluye:
              </Typography>
              <Typography variant="body2" sx={{ color: "#666", display: "flex", alignItems: "center", mb: 1 }}>
                • Tiempos de espera mínimos
              </Typography>
              <Typography variant="body2" sx={{ color: "#666", display: "flex", alignItems: "center" }}>
                • Sesiones de 8 horas de duración
              </Typography>
            </div>
          </Card>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} variant="text" color="secondary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Register;
