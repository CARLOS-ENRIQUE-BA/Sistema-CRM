import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Avatar from '@mui/joy/Avatar';
import Input from '@mui/joy/Input';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/joy/IconButton';
import NewCampaignModal from '../components/NewCampaignModal';

// Datos de ejemplo para los grupos
const groupsData = [
  {
    id: 1,
    name: 'Equipo de Marketing',
    description: 'Coordinación de campañas',
    members: '12 miembros',
  },
  {
    id: 2,
    name: 'Desarrollo de Producto',
    description: 'Actualizaciones y planificación',
    members: '8 miembros',
  },
];

// Datos de ejemplo para los canales
const channelsData = [
  {
    id: 1,
    name: 'Canal de Ventas',
    description: 'Promociones y ofertas especiales',
    followers: '235.1K seguidores',
    isOfficial: true,
  },
  {
    id: 2,
    name: 'Canal de Soporte',
    description: 'Atención al cliente y ayuda',
    followers: '189.3K seguidores',
    isOfficial: true,
  },
  {
    id: 3,
    name: 'Novedades y Actualizaciones',
    description: 'Mantente al día con las últimas noticias',
    followers: '156.8K seguidores',
    isOfficial: true,
  },
];

export default function CampaignPage() {
  const [selectedChat, setSelectedChat] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);

  // Datos de ejemplo para los mensajes
  const chatMessages = [
    {
      id: 1,
      sender: 'Ana García',
      message: 'Buenos días equipo, ¿cómo va la campaña de redes sociales?',
      time: '9:30 AM',
      avatar: 'A',
    },
    {
      id: 2,
      sender: 'Ana García',
      message: 'Recuerden que mañana vamos a revisar los números en la reunión, por favor esten listos.',
      time: '9:40 AM',
      avatar: 'A',
    },
  ];

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
            Campañas
          </Typography>
          <Typography level="body-md" sx={{ mb: 4, color: 'text.secondary' }}>
            Administra y optimiza tus campañas de comunicación.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: 2,
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              boxShadow: 'sm',
              overflow: 'hidden',
              flex: 1,
              minHeight: 0,
            }}
          >
            {/* Panel izquierdo para grupos y canales */}
            <Box
              sx={{
                width: '350px',
                borderRight: '1px solid #E0E0E0',
                display: 'flex',
                flexDirection: 'column',
                minHeight: 0,
              }}
            >
              <Box sx={{ p: 2, borderBottom: '1px solid #E0E0E0' }}>
                <Button
                  startDecorator={<AddIcon />}
                  onClick={() => setOpenModal(true)}
                  sx={{
                    backgroundColor: '#24B8D2',
                    color: 'white',
                    width: '100%',
                    '&:hover': {
                      backgroundColor: '#1A91B8',
                    },
                  }}
                >
                  Nueva Campaña
                </Button>
              </Box>

              {/* Contenedor con scroll para grupos y canales */}
              <Box
                sx={{
                  flex: 1,
                  overflow: 'auto',
                  '&::-webkit-scrollbar': {
                    width: '8px',
                  },
                  '&::-webkit-scrollbar-track': {
                    backgroundColor: 'transparent',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#BFC0C1',
                    borderRadius: '4px',
                  },
                  '&::-webkit-scrollbar-thumb:hover': {
                    backgroundColor: '#A5A6A7',
                  },
                }}
              >
                {/* Sección de Grupos */}
                <Box sx={{ p: 2 }}>
                  <Typography
                    level="title-lg"
                    sx={{ color: '#213A62', mb: 2, fontWeight: 'bold' }}
                  >
                    Mis Campañas
                  </Typography>
                  <List>
                    {groupsData.map((group) => (
                      <ListItem key={group.id}>
                        <ListItemButton
                          sx={{
                            borderRadius: '8px',
                            mb: 1,
                            '&:hover': {
                              backgroundColor: 'rgba(36, 184, 210, 0.08)',
                            },
                            backgroundColor: selectedChat === group.name ? 'rgba(36, 184, 210, 0.12)' : 'transparent',
                          }}
                          onClick={() => setSelectedChat(group.name)}
                        >
                          <ListItemContent>
                            <Typography level="title-sm" sx={{ color: '#213A62', fontWeight: 'bold' }}>
                              {group.name}
                            </Typography>
                            <Typography level="body-sm" sx={{ color: '#666666' }}>
                              {group.description}
                            </Typography>
                            <Typography level="body-xs" sx={{ color: '#666666' }}>
                              {group.members}
                            </Typography>
                          </ListItemContent>
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>

                <Divider />

                {/* Sección de Canales */}
                <Box sx={{ p: 2 }}>
                  <Typography
                    level="title-lg"
                    sx={{ color: '#213A62', mb: 2, fontWeight: 'bold' }}
                  >
                    Campañas a las que pertenezco
                  </Typography>
                  <List>
                    {channelsData.map((channel) => (
                      <ListItem key={channel.id}>
                        <ListItemButton
                          sx={{
                            borderRadius: '8px',
                            mb: 1,
                            '&:hover': {
                              backgroundColor: 'rgba(36, 184, 210, 0.08)',
                            },
                          }}
                        >
                          <ListItemContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <Typography level="title-sm" sx={{ color: '#213A62', fontWeight: 'bold' }}>
                                {channel.name}
                                {channel.isOfficial && (
                                  <Typography
                                    component="span"
                                    sx={{
                                      ml: 1,
                                      backgroundColor: '#24B8D2',
                                      color: 'white',
                                      px: 1,
                                      py: 0.5,
                                      borderRadius: '4px',
                                      fontSize: '0.75rem',
                                    }}
                                  >
                                    Oficial
                                  </Typography>
                                )}
                              </Typography>
                            </Box>
                            <Typography level="body-sm" sx={{ color: '#666666' }}>
                              {channel.description}
                            </Typography>
                            <Typography level="body-xs" sx={{ color: '#666666' }}>
                              {channel.followers}
                            </Typography>
                          </ListItemContent>
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Box>

            {/* Panel derecho para el chat */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#F0F2F5',
              }}
            >
              {selectedChat === 'Equipo de Marketing' ? (
                <>
                  {/* Encabezado del chat */}
                  <Box
                    sx={{
                      p: 2,
                      backgroundColor: '#FFFFFF',
                      borderBottom: '1px solid #E0E0E0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <Avatar>M</Avatar>
                    <Box>
                      <Typography level="title-lg" sx={{ color: '#213A62' }}>
                        Equipo de Marketing
                      </Typography>
                      <Typography level="body-sm" sx={{ color: '#666666' }}>
                        12 miembros
                      </Typography>
                    </Box>
                  </Box>

                  {/* Área de mensajes */}
                  <Box
                    sx={{
                      flex: 1,
                      overflow: 'auto',
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                      '&::-webkit-scrollbar': {
                        width: '8px',
                      },
                    }}
                  >
                    {chatMessages.map((message) => (
                      <Box
                        key={message.id}
                        sx={{
                          display: 'flex',
                          gap: 1.5,
                          alignItems: 'flex-start',
                        }}
                      >
                        <Avatar size="sm">{message.avatar}</Avatar>
                        <Box
                          sx={{
                            backgroundColor: '#FFFFFF',
                            p: 1.5,
                            borderRadius: '12px',
                            maxWidth: '80%',
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                            <Typography level="title-sm" sx={{ color: '#213A62', fontWeight: 'bold' }}>
                              {message.sender}
                            </Typography>
                            <Typography level="body-xs" sx={{ color: '#666666' }}>
                              {message.time}
                            </Typography>
                          </Box>
                          <Typography level="body-sm" sx={{ color: '#213A62' }}>
                            {message.message}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>

                  {/* Área de input */}
                  <Box
                    sx={{
                      p: 2,
                      backgroundColor: '#FFFFFF',
                      borderTop: '1px solid #E0E0E0',
                      display: 'flex',
                      gap: 1,
                    }}
                  >
                    <Input
                      placeholder="Escribe un mensaje..."
                      sx={{ flex: 1 }}
                      endDecorator={
                        <IconButton variant="plain" sx={{ color: '#24B8D2' }}>
                          <SendIcon />
                        </IconButton>
                      }
                    />
                  </Box>
                </>
              ) : (
                <Box sx={{ p: 3, textAlign: 'center' }}>
                  <Typography level="body-lg" sx={{ color: '#666666' }}>
                    Selecciona un canal o grupo para ver los mensajes
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Modal de Nueva Campaña */}
      <NewCampaignModal 
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </CssVarsProvider>
  );
}
