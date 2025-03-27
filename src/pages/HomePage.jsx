import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import Link from '@mui/joy/Link';
import Divider from '@mui/joy/Divider';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function HomePage() {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
        <Header />
        <Sidebar />
        <Box
          component="main"
          className="MainContent"
          sx={{
            px: { xs: 2, md: 6 },
            pt: {
              xs: 'calc(12px + var(--Header-height))',
              sm: 'calc(12px + var(--Header-height))',
              md: 3,
            },
            pb: { xs: 2, sm: 2, md: 3 },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            height: '100dvh',
            gap: 1,
          }}
        >
          <Typography level="h1" sx={{ mb: 1 }}>
            Dashboard
          </Typography>
          <Typography level="body-md" sx={{ mb: 4, color: 'text.secondary' }}>
            Bienvenido a su sistema de gestión de clientes y proyectos
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
            {/* Card Clientes Activos */}
            <Card sx={{ flex: 1, minWidth: 250 }}>
              <Typography level="body-sm" sx={{ color: 'text.secondary' }}>
                Total de clientes con proyectos en curso
              </Typography>
              <Typography level="h1" sx={{ mt: 1, mb: 2 }}>
                24
              </Typography>
              <Link href="#" sx={{ color: '#24B8D2' }}>
                Ver todos los clientes
              </Link>
            </Card>

            {/* Card Proyectos Activos */}
            <Card sx={{ flex: 1, minWidth: 250 }}>
              <Typography level="body-sm" sx={{ color: 'text.secondary' }}>
                Total de proyectos en desarrollo
              </Typography>
              <Typography level="h1" sx={{ mt: 1, mb: 2 }}>
                42
              </Typography>
              <Link href="#" sx={{ color: '#24B8D2' }}>
                Ver todos los proyectos
              </Link>
            </Card>

            {/* Card Proyectos Completados */}
            <Card sx={{ flex: 1, minWidth: 250 }}>
              <Typography level="body-sm" sx={{ color: 'text.secondary' }}>
                Total de proyectos finalizados este mes
              </Typography>
              <Typography level="h1" sx={{ mt: 1, mb: 2 }}>
                8
              </Typography>
              <Link href="#" sx={{ color: '#24B8D2' }}>
                Ver proyectos completados
              </Link>
            </Card>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            {/* Sección Clientes Recientes */}
            <Card sx={{ flex: 1, minWidth: 300 }}>
              <Typography level="h4" sx={{ mb: 2 }}>
                Clientes Recientes
              </Typography>
              <Typography level="body-sm" sx={{ mb: 2, color: 'text.secondary' }}>
                Últimos clientes agregados al sistema
              </Typography>
              
              {[
                { name: 'Empresa tecnologica S.A.', time: 'Hace 2 días' },
                { name: 'Consultoria Innovación', time: 'Hace 3 días' },
                { name: 'KennStudio', time: 'Hace 1 semana' },
              ].map((client, index) => (
                <React.Fragment key={index}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
                    <Box>
                      <Typography level="body-md">{client.name}</Typography>
                      <Typography level="body-sm" sx={{ color: 'text.secondary' }}>{client.time}</Typography>
                    </Box>
                    <Link href="#" sx={{ color: '#24B8D2' }}>Ver</Link>
                  </Box>
                  {index < 2 && <Divider />}
                </React.Fragment>
              ))}
              
              <Link href="#" sx={{ display: 'block', mt: 2, color: '#24B8D2' }}>
                Ver todos los clientes
              </Link>
            </Card>

            {/* Sección Proyectos Recientes */}
            <Card sx={{ flex: 1, minWidth: 300 }}>
              <Typography level="h4" sx={{ mb: 2 }}>
                Proyectos Recientes
              </Typography>
              <Typography level="body-sm" sx={{ mb: 2, color: 'text.secondary' }}>
                Últimos proyectos actualizados
              </Typography>
              
              {[
                { name: 'Empresa tecnologica S.A.', desc: 'Proyecto 100% estratégico', time: 'Hace 2 días' },
                { name: 'Consultoria Innovación', desc: 'Proyecto 100% estratégico', time: 'Hace 3 días' },
                { name: 'LizardTech', desc: 'Proyecto 100% estratégico', time: 'Hace 5 días' },
              ].map((project, index) => (
                <React.Fragment key={index}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
                    <Box>
                      <Typography level="body-md">{project.name}</Typography>
                      <Typography level="body-sm" sx={{ color: 'text.secondary' }}>{project.desc}</Typography>
                      <Typography level="body-sm" sx={{ color: 'text.secondary' }}>{project.time}</Typography>
                    </Box>
                    <Link href="#" sx={{ color: '#24B8D2' }}>Ver</Link>
                  </Box>
                  {index < 2 && <Divider />}
                </React.Fragment>
              ))}
              
              <Link href="#" sx={{ display: 'block', mt: 2, color: '#24B8D2' }}>
                Ver todos los proyectos
              </Link>
            </Card>
          </Box>
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
