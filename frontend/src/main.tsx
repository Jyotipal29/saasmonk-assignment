import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CriticProvider } from "./context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CriticProvider>
      <App />
    </CriticProvider>
  </StrictMode>
);
