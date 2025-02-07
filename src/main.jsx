import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"; // Keep BrowserRouter
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Dynamic_DataViz/"> {/* Ensure basename is set */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);
