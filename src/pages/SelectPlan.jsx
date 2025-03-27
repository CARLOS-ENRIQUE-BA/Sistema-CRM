import React from 'react';
import {
  Container,
  Button,
  Card,
  Typography,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function SelectPlan() {
  const navigate = useNavigate();

  const handleSelectFreePlan = () => {
    navigate('/');
  };

  const cardStyle = {
    width: 300,
    textAlign: 'left',
    p: 4,
    boxShadow: 3,
    borderRadius: 2,
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: 6,
    },
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#213A62',
        py: 4,
      }}
    >
      <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#FFFFFF', mb: 2 }}>
        Agente CRM
      </Typography>
      <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', color: '#24B8D2', mb: 4 }}>
        Selecciona un Plan
      </Typography>
      
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 3,
          flexWrap: { xs: 'wrap', md: 'nowrap' },
          maxWidth: '1200px',
          mx: 'auto',
          px: 2,
        }}
      >
        {/* Plan Gratuito */}
        <Card sx={cardStyle}>
          <div>
            <Typography variant="h4" sx={{ color: '#213A62', fontWeight: 'bold', mb: 2 }}>
              Gratis
            </Typography>
            <Typography variant="h6" sx={{ color: '#666', mb: 2 }}>
              Paquete Básico
            </Typography>
            <Typography variant="h5" sx={{ color: '#213A62', mb: 3 }}>
              MX$0.00
            </Typography>
            <Typography variant="body2" sx={{ color: '#666', mb: 1 }}>
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
                borderColor: '#24B8D2',
                color: '#24B8D2',
                '&:hover': {
                  borderColor: '#1A91B8',
                  backgroundColor: 'rgba(36, 184, 210, 0.1)',
                },
              }}
              onClick={handleSelectFreePlan}
            >
              Únete gratis
            </Button>
            <Typography variant="subtitle1" sx={{ color: '#213A62', fontWeight: 'bold', mb: 1 }}>
              Incluye:
            </Typography>
            <Typography variant="body2" sx={{ color: '#666', display: 'flex', alignItems: 'center', mb: 1 }}>
              • Tiempos de espera estándar
            </Typography>
            <Typography variant="body2" sx={{ color: '#666', display: 'flex', alignItems: 'center' }}>
              • Sesiones de 1 hora de duración
            </Typography>
          </div>
        </Card>

        {/* Plan Premium */}
        <Card sx={cardStyle}>
          <div>
            <Typography variant="h4" sx={{ color: '#213A62', fontWeight: 'bold', mb: 2 }}>
              Intermedio
            </Typography>
            <Typography variant="h6" sx={{ color: '#666', mb: 2 }}>
              Plan Pro
            </Typography>
            <Typography variant="h5" sx={{ color: '#213A62', mb: 3 }}>
              MX$174.00 / mes
            </Typography>
            <Typography variant="body2" sx={{ color: '#666', mb: 1 }}>
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
                backgroundColor: '#24B8D2',
                '&:hover': {
                  backgroundColor: '#1A91B8',
                },
              }}
              disabled
            >
              No Disponible
            </Button>
            <Typography variant="subtitle1" sx={{ color: '#213A62', fontWeight: 'bold', mb: 1 }}>
              Incluye:
            </Typography>
            <Typography variant="body2" sx={{ color: '#666', display: 'flex', alignItems: 'center', mb: 1 }}>
              • Tiempos de espera reducidos
            </Typography>
            <Typography variant="body2" sx={{ color: '#666', display: 'flex', alignItems: 'center' }}>
              • Sesiones de 6 horas de duración
            </Typography>
          </div>
        </Card>

        {/* Plan Empresarial */}
        <Card sx={cardStyle}>
          <div>
            <Typography variant="h4" sx={{ color: '#213A62', fontWeight: 'bold', mb: 2 }}>
              Avanzado
            </Typography>
            <Typography variant="h6" sx={{ color: '#666', mb: 2 }}>
              Plan Premium
            </Typography>
            <Typography variant="h5" sx={{ color: '#213A62', mb: 3 }}>
              MX$349.00 / mes
            </Typography>
            <Typography variant="body2" sx={{ color: '#666', mb: 1 }}>
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
                backgroundColor: '#24B8D2',
                '&:hover': {
                  backgroundColor: '#1A91B8',
                },
              }}
              disabled
            >
              No Disponible
            </Button>
            <Typography variant="subtitle1" sx={{ color: '#213A62', fontWeight: 'bold', mb: 1 }}>
              Incluye:
            </Typography>
            <Typography variant="body2" sx={{ color: '#666', display: 'flex', alignItems: 'center', mb: 1 }}>
              • Tiempos de espera mínimos
            </Typography>
            <Typography variant="body2" sx={{ color: '#666', display: 'flex', alignItems: 'center' }}>
              • Sesiones de 8 horas de duración
            </Typography>
          </div>
        </Card>
      </Box>
    </Container>
  );
} 