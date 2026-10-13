import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Global styles first so component CSS can override them
import './styles/fonts.css';
import './styles/global.css';
import { LangProvider } from './i18n.jsx';
import { MotionProvider } from './motion/MotionContext.jsx';
import { App } from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LangProvider>
      <MotionProvider>
        <App />
      </MotionProvider>
    </LangProvider>
  </StrictMode>
);
