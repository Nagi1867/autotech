import React from "react";
import { ShieldCheck, Truck, Headphones, CreditCard } from "lucide-react";

const benefits = [
  { icon: ShieldCheck, title: "Compra segura", text: "Uma experiência pensada para sua tranquilidade." },
  { icon: Truck, title: "Entrega acompanhada", text: "Informações claras sobre o envio do pedido." },
  { icon: Headphones, title: "Atendimento próximo", text: "Suporte para ajudar você na sua escolha." },
  { icon: CreditCard, title: "Pagamento facilitado", text: "Opções de pagamento apresentadas com clareza." }
];

export default function Benefits() {
  return (
    <section className="benefits-section" id="sobre">
      <div className="container">
        <div className="benefits-heading">
          <span className="section-eyebrow">A EXPERIÊNCIA AUTOTECH</span>
          <h2>Comprar bem também faz parte da tecnologia.</h2>
        </div>
        <div className="benefits-grid">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div className="benefit-item" key={title}>
              <span className="benefit-icon"><Icon size={21} /></span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}