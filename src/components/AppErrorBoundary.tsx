import React from "react";
import { estilos } from "../estilos";

export class AppErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { erro: Error | null }
> {
  state = { erro: null as Error | null };

  static getDerivedStateFromError(erro: Error) {
    return { erro };
  }

  componentDidCatch(erro: Error) {
    console.error("Erro ao renderizar o CGL:", erro);
  }

  render() {
    if (this.state.erro) {
      return (
        <>
          <style>{estilos}</style>
          <div className="authScreen">
            <div className="authCard">
              <div className="authLogo">⚠️</div>
              <h1>O CGL encontrou um problema</h1>
              <p>Seus dados continuam salvos. O erro aconteceu ao montar a tela depois do login.</p>
              <div style={{marginTop:12,padding:12,borderRadius:10,background:"#fff0f3",border:"1px solid #f7ccd6",color:"#d85c78",fontSize:11,textAlign:"left",wordBreak:"break-word"}}>
                <strong>Detalhe técnico:</strong><br />
                {this.state.erro.message || "Erro de renderização sem mensagem."}
              </div>
              <button className="primary authButton" onClick={() => window.location.reload()}>
                Recarregar o CGL
              </button>
              <small className="authHint">
                Se o problema continuar, envie esta mensagem junto com o print da tela.
              </small>
            </div>
          </div>
        </>
      );
    }
    return this.props.children;
  }
}
