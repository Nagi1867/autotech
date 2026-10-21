import React from "react";
import {
  ArrowUpRight,
  Instagram,
  Facebook,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:py-16">
          <div>
            <a
              className="inline-flex items-center gap-3"
              href="#inicio"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-2xl font-bold text-white">
                ϟ
              </span>

              <span className="flex flex-col leading-none">
                <strong className="text-xl font-bold tracking-tight">
                  AutoTech
                </strong>
                <small className="mt-1 text-[10px] font-semibold tracking-[0.3em] text-blue-400">
                  STORE
                </small>
              </span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              Tecnologia, acessórios e soluções automotivas para acompanhar
              você em todos os caminhos.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#contato"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#contato"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Loja
            </h3>

            <div className="flex flex-col items-start gap-4">
              <a
                href="#categorias"
                className="text-sm text-slate-400 transition hover:text-blue-400"
              >
                Categorias
              </a>
              <a
                href="#produtos"
                className="text-sm text-slate-400 transition hover:text-blue-400"
              >
                Produtos
              </a>
              <a
                href="#produtos"
                className="text-sm text-slate-400 transition hover:text-blue-400"
              >
                Ofertas
              </a>
              <a
                href="#sobre"
                className="text-sm text-slate-400 transition hover:text-blue-400"
              >
                Sobre nós
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Atendimento
            </h3>

            <div className="flex flex-col items-start gap-4">
              <a
                href="#contato"
                className="text-sm text-slate-400 transition hover:text-blue-400"
              >
                Fale conosco
              </a>
              <a
                href="#contato"
                className="text-sm text-slate-400 transition hover:text-blue-400"
              >
                Dúvidas frequentes
              </a>
              <a
                href="#contato"
                className="text-sm text-slate-400 transition hover:text-blue-400"
              >
                Entrega e envio
              </a>
              <a
                href="#contato"
                className="text-sm text-slate-400 transition hover:text-blue-400"
              >
                Trocas e devoluções
              </a>
            </div>
          </div>

          <div id="contato">
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Entre em contato
            </h3>

            <div className="flex flex-col gap-4">
              <p className="flex items-start gap-3 text-sm leading-6 text-slate-400">
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-blue-400"
                />
                contato@autotechstore.com.br
              </p>

              <p className="flex items-center gap-3 text-sm text-slate-400">
                <Phone size={17} className="shrink-0 text-blue-400" />
                Atendimento online
              </p>

              <p className="flex items-center gap-3 text-sm text-slate-400">
                <MapPin size={17} className="shrink-0 text-blue-400" />
                Brasil
              </p>
            </div>

            <a
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
              href="mailto:contato@autotechstore.com.br"
            >
              Enviar mensagem
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/10 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} AutoTech Store. Todos os direitos
            reservados.
          </span>

          <div className="flex flex-wrap gap-5">
            <a
              href="#privacidade"
              className="transition hover:text-white"
            >
              Privacidade
            </a>
            <a
              href="#termos"
              className="transition hover:text-white"
            >
              Termos de uso
            </a>
          </div>

          <span className="flex items-center gap-1 font-medium">
            Feito para ir mais longe
            <span className="text-blue-400">↗</span>
          </span>
        </div>
      </div>
    </footer>
  );
}