import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

// Datos de ejemplo para la tabla
const clientsData = [
  {
    id: 1,
    nombre: 'Empresa tecnologica S.A.',
    email: 'contacto@empresatech.com',
    telefono: '+52 555 123 4567',
    proyectos: 3,
    estado: 'Activo',
  },
  {
    id: 2,
    nombre: 'Consultoria Innovación',
    email: 'info@consultoria.com',
    telefono: '+52 555 987 6543',
    proyectos: 2,
    estado: 'Activo',
  },
  // Puedes agregar más clientes aquí
];

export default function ClientPage() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filterBy, setFilterBy] = React.useState('nombre');

  const filteredClients = clientsData.filter(client => {
    const searchLower = searchTerm.toLowerCase();
    return client[filterBy].toLowerCase().includes(searchLower);
  });

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
          <Typography level="h2" component="h1" sx={{ mb: 2 }}>
            Clientes
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: 2,
              my: 2,
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flex: 1 }}>
              <FilterListIcon sx={{ color: 'var(--joy-palette-primary-plainColor)' }} />
              <Select
                size="sm"
                placeholder="Filtrar por..."
                value={filterBy}
                onChange={(_, value) => setFilterBy(value)}
                sx={{
                  minWidth: 160,
                  '--Select-decoratorColor': 'var(--joy-palette-primary-plainColor)',
                }}
              >
                <Option value="nombre">Nombre</Option>
                <Option value="email">Email</Option>
                <Option value="telefono">Teléfono</Option>
              </Select>
            </Box>
            <Input
              size="sm"
              placeholder="Buscar..."
              startDecorator={<SearchIcon />}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{
                flexGrow: 1,
                maxWidth: 400,
                '--Input-decoratorColor': 'var(--joy-palette-primary-plainColor)',
                '--Input-focusedHighlight': 'var(--joy-palette-primary-500)',
              }}
            />
          </Box>

          <Sheet
            variant="outlined"
            sx={{
              width: '100%',
              borderRadius: 'sm',
              overflow: 'auto',
              '& table': {
                '--Table-headerUnderlineThickness': '1px',
                '--Table-headerUnderlineColor': 'var(--joy-palette-primary-500)',
              },
            }}
          >
            <Table
              stickyHeader
              hoverRow
              sx={{
                '--TableCell-headBackground': 'var(--joy-palette-background-level1)',
                '--TableCell-selectedBackground': 'rgba(36, 184, 210, 0.1)',
              }}
            >
              <thead>
                <tr>
                  <th style={{ width: 120, padding: '12px 16px' }}>ID</th>
                  <th style={{ width: 240, padding: '12px 16px' }}>Nombre</th>
                  <th style={{ width: 240, padding: '12px 16px' }}>Email</th>
                  <th style={{ width: 170, padding: '12px 16px' }}>Teléfono</th>
                  <th style={{ width: 120, padding: '12px 16px' }}>Proyectos</th>
                  <th style={{ width: 120, padding: '12px 16px' }}>Estado</th>
                  <th style={{ width: 120, padding: '12px 16px' }}>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredClients.map((client) => (
                  <tr key={client.id}>
                    <td style={{ padding: '12px 16px' }}>{client.id}</td>
                    <td style={{ padding: '12px 16px' }}>{client.nombre}</td>
                    <td style={{ padding: '12px 16px' }}>{client.email}</td>
                    <td style={{ padding: '12px 16px' }}>{client.telefono}</td>
                    <td style={{ padding: '12px 16px' }}>{client.proyectos}</td>
                    <td style={{ padding: '12px 16px' }}>
                      <Box
                        sx={{
                          backgroundColor: client.estado === 'Activo' 
                            ? 'var(--joy-palette-success-softBg)'
                            : 'var(--joy-palette-danger-softBg)',
                          color: client.estado === 'Activo'
                            ? 'var(--joy-palette-success-plainColor)'
                            : 'var(--joy-palette-danger-plainColor)',
                          padding: '4px 8px',
                          borderRadius: '4px',
                          display: 'inline-block',
                          fontSize: '0.875rem',
                        }}
                      >
                        {client.estado}
                      </Box>
                    </td>
                    <td style={{ padding: '12px 16px' }}>
                      <Button
                        size="sm"
                        variant="plain"
                        color="primary"
                        sx={{ 
                          color: 'var(--joy-palette-primary-plainColor)',
                          '&:hover': {
                            backgroundColor: 'var(--joy-palette-primary-softBg)',
                          }
                        }}
                      >
                        Ver
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Sheet>
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
