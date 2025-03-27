import React, { useState } from 'react';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import Checkbox from '@mui/joy/Checkbox';
import SearchIcon from '@mui/icons-material/Search';

const contactsData = [
  { id: 1, name: 'Ana García', email: 'ana.garcia@email.com', selected: false },
  { id: 2, name: 'Carlos Ruiz', email: 'carlos.ruiz@email.com', selected: false },
  { id: 3, name: 'María López', email: 'maria.lopez@email.com', selected: false },
  { id: 4, name: 'Juan Pérez', email: 'juan.perez@email.com', selected: false },
  { id: 5, name: 'Laura Torres', email: 'laura.torres@email.com', selected: false },
];

export default function NewCampaignModal({ open, onClose }) {
  const [searchValue, setSearchValue] = useState('');
  const [contacts, setContacts] = useState(contactsData);

  const handleContactToggle = (contactId) => {
    setContacts(contacts.map(contact => 
      contact.id === contactId ? { ...contact, selected: !contact.selected } : contact
    ));
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog
        sx={{
          maxWidth: 500,
          borderRadius: 'md',
          p: 3,
          boxShadow: 'lg',
        }}
      >
        <ModalClose />
        <Typography
          component="h2"
          level="h4"
          textColor="inherit"
          fontWeight="lg"
          mb={1}
        >
          Crear Nueva Campaña
        </Typography>
        
        {/* Input para nombre de campaña */}
        <Input
          size="lg"
          placeholder="Nombre de la campaña"
          sx={{
            mb: 2,
            '--Input-focusedHighlight': '#24B8D2',
            '--Input-focusedThickness': '2px',
            '&:hover': {
              '--Input-focusedHighlight': '#1A91B8',
            },
            '&::before': {
              transition: 'box-shadow .15s ease-in-out',
            },
            '&:focus-within': {
              '&::before': {
                boxShadow: '0 0 0 4px rgba(36, 184, 210, 0.1)',
              },
            },
          }}
        />

        {/* Buscador de contactos */}
        <Input
          size="lg"
          placeholder="Buscar contactos"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          startDecorator={<SearchIcon />}
          sx={{ mb: 2 }}
        />

        {/* Lista de contactos */}
        <Box
          sx={{
            maxHeight: '300px',
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
          }}
        >
          <List>
            {contacts
              .filter(contact => 
                contact.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                contact.email.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((contact) => (
                <ListItem
                  key={contact.id}
                  sx={{
                    borderRadius: 'sm',
                    mb: 1,
                    '&:hover': {
                      backgroundColor: 'rgba(36, 184, 210, 0.08)',
                    },
                  }}
                >
                  <Checkbox
                    checked={contact.selected}
                    onChange={() => handleContactToggle(contact.id)}
                    sx={{
                      color: '#24B8D2',
                      '&.Mui-checked': {
                        color: '#24B8D2',
                      },
                    }}
                  />
                  <ListItemContent>
                    <Typography level="title-sm">{contact.name}</Typography>
                    <Typography level="body-sm" sx={{ color: 'text.secondary' }}>
                      {contact.email}
                    </Typography>
                  </ListItemContent>
                </ListItem>
              ))}
          </List>
        </Box>

        {/* Botones de acción */}
        <Box sx={{ mt: 3, display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
          <Button
            variant="plain"
            color="neutral"
            onClick={onClose}
          >
            Cancelar
          </Button>
          <Button
            sx={{
              backgroundColor: '#24B8D2',
              color: 'white',
              '&:hover': {
                backgroundColor: '#1A91B8',
              },
            }}
          >
            Crear Campaña
          </Button>
        </Box>
      </ModalDialog>
    </Modal>
  );
} 