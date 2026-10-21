import React from "react";
import { ArrowRight, ShieldCheck, Truck, CreditCard, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-grid-glow" />
      <div className="container hero-content">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" /> TECNOLOGIA QUE MOVE VOCÊ</span>
          <h1>Seu próximo nível começa <span>aqui.</span></h1>
          <p>Eletrônicos, acessórios e soluções automotivas escolhidos para facilitar sua rotina e elevar sua experiência.</p>
          <div className="hero-buttons">
            <a className="button button-primary" href="#produtos">Explorar produtos <ArrowRight size={17} /></a>
            <a className="button button-secondary" href="#categorias">Conhecer categorias</a>
          </div>
          <div className="hero-trust">
            <div className="trust-item"><ShieldCheck size={17} /><span>Compra segura</span></div>
            <span className="trust-divider" />
            <div className="trust-item"><Truck size={17} /><span>Entrega acompanhada</span></div>
            <span className="trust-divider" />
            <div className="trust-item"><CreditCard size={17} /><span>Pagamento facilitado</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-backdrop" />
          <img className="hero-image" src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=90" alt="Carro moderno em destaque" />
          <div className="hero-floating-card floating-card-top">
            <span className="floating-icon"><Zap size={17} /></span>
            <span><strong>Escolhas inteligentes</strong><small>Produtos para o seu dia</small></span>
          </div>
          <div className="hero-floating-card floating-card-bottom">
            <span className="status-dot" />
            <span><strong>Tech + Auto</strong><small>Tudo em um só lugar</small></span>
          </div>
          <div className="hero-image-caption"><span>01</span><span className="caption-line" /><span>INOVAÇÃO EM MOVIMENTO</span></div>
        </div>
      </div>
      <div className="hero-bottom-line" />
    </section>
  );
}