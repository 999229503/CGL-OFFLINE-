import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// Pede ao navegador para não apagar os dados do CGL quando faltar espaço no aparelho.
// A resposta depende do navegador; se for negada, nada muda para o usuário.
navigator.storage?.persist?.().catch(() => undefined);

// Mantém o aplicativo disponível sem internet depois do primeiro carregamento.
// Só roda na versão publicada: em desenvolvimento o cache serviria arquivos antigos.
if ("serviceWorker" in navigator) {
  if (import.meta.env.PROD) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // O CGL continua funcionando normalmente mesmo se o cache offline não puder ser registrado.
      });
    });
  } else {
    navigator.serviceWorker
      .getRegistrations()
      .then((registros) => registros.forEach((registro) => void registro.unregister()))
      .catch(() => undefined);
  }
}
