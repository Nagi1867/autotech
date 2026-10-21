import React from "react";
import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-card">
          <div className="newsletter-decoration" />
          <div className="newsletter-copy">
            <span className="section-eyebrow">FIQUE POR DENTRO</span>
            <h2>Novidades que chegam primeiro até você.</h2>
            <p>Receba novidades e ofertas da AutoTech Store no seu e-mail.</p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <label className="newsletter-input"><Mail size={18} /><input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Seu melhor e-mail" aria-label="Seu e-mail" /></label>
            <button className="button button-primary" type="submit">{submitted ? "Inscrito!" : "Quero receber"} <ArrowRight size={17} /></button>
            <small>{submitted ? "Demonstração: o cadastro ainda não está conectado a um serviço de e-mail." : "Ao se cadastrar, você concorda em receber comunicações da loja."}</small>
          </form>
        </div>
      </div>
    </section>
  );
}