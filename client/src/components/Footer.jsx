import React from "react";
import { ArrowUpRight, Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-column">
            <a className="brand" href="#inicio">
              <span className="brand-mark"><span className="brand-bolt">ϟ</span></span>
              <span className="brand-copy"><strong>AutoTech</strong><small>STORE</small></span>
            </a>
            <p>Tecnologia, acessórios e soluções automotivas para acompanhar você em todos os caminhos.</p>
            <div className="social-links">
              <a href="#contato" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="#contato" aria-label="Facebook"><Facebook size={18} /></a>
            </div>
          </div>
          <div className="footer-column"><h3>Loja</h3><a href="#categorias">Categorias</a><a href="#produtos">Produtos</a><a href="#produtos">Ofertas</a><a href="#sobre">Sobre nós</a></div>
          <div className="footer-column"><h3>Atendimento</h3><a href="#contato">Fale conosco</a><a href="#contato">Dúvidas frequentes</a><a href="#contato">Entrega e envio</a><a href="#contato">Trocas e devoluções</a></div>
          <div className="footer-column footer-contact" id="contato"><h3>Entre em contato</h3><p><Mail size={16} /> contato@autotechstore.com.br</p><p><Phone size={16} /> Atendimento online</p><p><MapPin size={16} /> Brasil</p><a className="footer-contact-link" href="mailto:contato@autotechstore.com.br">Enviar mensagem <ArrowUpRight size={15} /></a></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} AutoTech Store. Todos os direitos reservados.</span><div><a href="#privacidade">Privacidade</a><a href="#termos">Termos de uso</a></div><span className="footer-made">Feito para ir mais longe <span>↗</span></span></div>
      </div>
    </footer>
  );
}