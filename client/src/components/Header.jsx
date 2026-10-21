import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Search,
  UserRound,
  ShoppingBag,
  Menu,
  X,
  Zap,
  CarFront,
  Cpu,
} from "lucide-react";

export default function Header({
  cartCount,
  onSearch,
  onCartClick,
  onCategorySelect,
}) {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  function navigateToCategory(category) {
    onCategorySelect(category);
    setMenuOpen(false);
  }

  function submitSearch(event) {
    event.preventDefault();
    onSearch(search);
    setMenuOpen(false);
  }

  function goHome() {
    setSearch("");
    setMenuOpen(false);
    onSearch("");
  }

  const navLink = ({ isActive }) =>
    `whitespace-nowrap py-2 text-sm font-medium transition ${
      isActive
        ? "text-blue-700"
        : "text-slate-600 hover:text-blue-700"
    }`;

  const iconButton =
    "relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-slate-700 transition hover:bg-slate-100 hover:text-blue-700";

  const categoryButton =
    "flex items-center gap-2 whitespace-nowrap py-2 text-left text-sm font-medium text-slate-600 transition hover:text-blue-700";

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-2 bg-slate-950 px-4 py-2 text-center text-xs font-medium text-white sm:gap-3 sm:text-sm">
        <Zap
          size={14}
          className="shrink-0 text-blue-400"
          fill="currentColor"
        />
        <span>Produtos selecionados para acompanhar seu ritmo</span>
        <span className="hidden text-slate-500 sm:inline">•</span>
        <span className="hidden sm:inline">Compra prática e segura</span>
      </div>

      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-4 py-4 sm:px-6 lg:flex-nowrap lg:gap-6">
          <button
            type="button"
            className={`${iconButton} lg:hidden`}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>

          <Link
            to="/"
            aria-label="AutoTech Store - início"
            className="flex shrink-0 items-center gap-2"
            onClick={goHome}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-700 text-white shadow-sm">
              <Zap size={23} fill="currentColor" />
            </span>

            <span className="flex flex-col leading-none">
              <strong className="text-lg font-extrabold tracking-tight text-slate-950">
                AutoTech
              </strong>
              <small className="mt-1 text-[10px] font-bold tracking-[0.3em] text-blue-700">
                STORE
              </small>
            </span>
          </Link>

          <div className="ml-auto flex shrink-0 items-center gap-1 lg:order-last lg:ml-0">
            <button
              type="button"
              className={`${iconButton} hidden sm:inline-flex`}
              aria-label="Minha conta"
              onClick={() =>
                alert("A área da conta poderá ser conectada ao backend depois.")
              }
            >
              <UserRound size={20} />
            </button>

            <button
              type="button"
              className={iconButton}
              aria-label={`Carrinho com ${cartCount} itens`}
              onClick={onCartClick}
            >
              <ShoppingBag size={21} />
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-700 px-1 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            </button>
          </div>

          <form
            className="order-last flex w-full items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 lg:order-none lg:ml-auto lg:max-w-xs"
            onSubmit={submitSearch}
          >
            <Search size={18} className="shrink-0 text-slate-400" />

            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="O que você procura?"
              aria-label="Buscar produtos"
              className="min-w-0 flex-1 bg-transparent py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />

            <button
              type="submit"
              aria-label="Pesquisar"
              className="rounded-full p-1.5 text-slate-500 transition hover:text-blue-700"
            >
              <Search size={17} />
            </button>
          </form>

          <nav
            className={`${
              menuOpen ? "flex" : "hidden"
            } order-last w-full flex-col gap-1 border-t border-slate-100 pt-3 lg:order-none lg:flex lg:w-auto lg:flex-1 lg:flex-row lg:items-center lg:justify-center lg:gap-4 lg:border-0 lg:pt-0`}
          >
            <NavLink to="/" end className={navLink} onClick={goHome}>
              Início
            </NavLink>

            <NavLink
              to="/produtos"
              className={navLink}
              onClick={() => setMenuOpen(false)}
            >
              Produtos
            </NavLink>

            <button
              type="button"
              className={categoryButton}
              onClick={() => navigateToCategory("Estética Automotiva")}
            >
              <CarFront size={16} />
              Estética automotiva
            </button>

            <button
              type="button"
              className={categoryButton}
              onClick={() => navigateToCategory("Eletrônicos")}
            >
              <Cpu size={16} />
              Eletrônicos
            </button>

            <a
              href="/#sobre"
              className={navLink({ isActive: false })}
              onClick={() => setMenuOpen(false)}
            >
              Sobre a loja
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}