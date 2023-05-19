import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { TimerProvider } from './context/TimerContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <TimerProvider>
        <App />
      </TimerProvider>
    </ThemeProvider>
  </React.StrictMode>
);
