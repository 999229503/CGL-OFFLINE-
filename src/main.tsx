import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// Mantém o aplicativo disponível sem internet depois do primeiro carregamento.
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {
      // O CGL continua funcionando normalmente mesmo se o cache offline não puder ser registrado.
    });
  });
}
