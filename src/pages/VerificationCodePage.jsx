import { useState, useRef } from 'react';
import { Box, Button, Container, Typography, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const CodeInput = styled(TextField)({
  width: '60px',
  margin: '0 8px',
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
      color: '#FFFFFF',
      textAlign: 'center',
      fontSize: '24px',
      padding: '12px',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#FFFFFF',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#FFFFFF',
  },
});

export default function VerificationCodePage() {
  const [code, setCode] = useState(['', '', '', '']);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];
  const isCodeComplete = code.every(digit => digit !== '');
  const navigate = useNavigate();

  const handleCodeChange = (index, value) => {
    if (!/^[0-9]*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value !== '' && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && code[index] === '' && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  const handleVerify = () => {
    console.log('Código de verificación:', code.join(''));
    navigate('/');
  };

  return (
    <Container maxWidth="sm" sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Box
        sx={{
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          textAlign: "center",
          backgroundColor: "#213A62",
          width: '100%',
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ color: "#ffffff" }}>
          Agente CRM
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ color: "#24B8D2", fontSize: "1.25rem" }}>
          Código de verificación
        </Typography>

        <Box sx={{ my: 4, display: 'flex', justifyContent: 'center' }}>
          {[0, 1, 2, 3].map((index) => (
            <CodeInput
              key={index}
              inputRef={inputRefs[index]}
              value={code[index]}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              inputProps={{ maxLength: 1 }}
              variant="outlined"
            />
          ))}
        </Box>

        <Button
          fullWidth
          variant="contained"
          disabled={!isCodeComplete}
          onClick={handleVerify}
          sx={{
            mt: 2,
            mb: 3,
            borderColor: '#24B8D2',
            borderWidth: 1,
            borderStyle: 'solid',
            backgroundColor: '#24B8D2',
            '&:hover': {
              backgroundColor: '#1A91B8',
            },
            '&.Mui-disabled': {
              backgroundColor: 'rgba(36, 184, 210, 0.3)',
            },
          }}
        >
          Verificar Código
        </Button>

        <Typography variant="body2" sx={{ color: "#FFFFFF", mt: 2 }}>
          Te hemos enviado un código de verificación a tu correo electrónico.
          <br />
          Por favor, revisa tu bandeja de entrada.
        </Typography>
      </Box>
    </Container>
  );
}
