import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './container/App';

// Eliminar el margen por defecto del body
const style = document.createElement('style');
style.innerHTML = `
  body {
    margin: 0;
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);