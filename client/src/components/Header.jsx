import React from "react";
import { useState } from "react";
import { Search, UserRound, ShoppingBag, Menu, X, Zap } from "lucide-react";

export default function Header({ cartCount, onSearch, onCartClick }) {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  function submitSearch(event) {
    event.preventDefault();
    onSearch(search);
    document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  return (
    <>
      <div className="announcement">
        <Zap size={14} fill="currentColor" />
        <span>Produtos selecionados para acompanhar seu ritmo</span>
        <span className="announcement-separator">•</span>
        <span>Compra prática e segura</span>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <button className="mobile-menu icon-button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <a className="brand" href="#inicio" aria-label="AutoTech Store - início">
            <span className="brand-mark"><Zap size={23} fill="currentColor" /></span>
            <span className="brand-copy"><strong>AutoTech</strong><small>STORE</small></span>
          </a>

          <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`}>
            <a href="#inicio" onClick={() => setMenuOpen(false)}>Início</a>
            <a href="#categorias" onClick={() => setMenuOpen(false)}>Categorias</a>
            <a href="#produtos" onClick={() => setMenuOpen(false)}>Produtos</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre a loja</a>
          </nav>

          <form className="header-search" onSubmit={submitSearch}>
            <Search size={18} />
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="O que você procura?" aria-label="Buscar produtos" />
            <button type="submit" aria-label="Pesquisar"><Search size={17} /></button>
          </form>

          <div className="header-actions">
            <button className="icon-button account-button" aria-label="Minha conta" onClick={() => alert("A área da conta poderá ser conectada ao backend depois.")}>
              <UserRound size={20} />
            </button>
            <button className="icon-button cart-button" aria-label={`Carrinho com ${cartCount} itens`} onClick={onCartClick}>
              <ShoppingBag size={21} />
              <span className="cart-count">{cartCount}</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}