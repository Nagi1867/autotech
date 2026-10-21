
import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  CreditCard,
  Zap
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio-hero"
      className="relative isolate overflow-hidden bg-slate-950 text-white"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_35%,rgba(37,99,235,0.22),transparent_50%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="relative z-10">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-bold tracking-[0.16em] text-blue-300">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            TECNOLOGIA QUE MOVE VOCÊ
          </span>

          <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Seu próximo nível começa{" "}
            <span className="text-blue-400">aqui.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            Produtos de estética automotiva e eletrônicos escolhidos para
            facilitar sua rotina, cuidar do seu veículo e conectar você à
            tecnologia.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#produtos"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-500"
            >
              Explorar produtos
              <ArrowRight size={17} />
            </a>

            <a
              href="#categorias"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:border-blue-400/50 hover:bg-white/10"
            >
              Conhecer categorias
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-4 border-t border-white/10 pt-6 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="shrink-0 text-blue-400" />
              <span>Compra segura</span>
            </div>

            <span className="hidden h-5 w-px bg-white/15 sm:block" />

            <div className="flex items-center gap-2">
              <Truck size={18} className="shrink-0 text-blue-400" />
              <span>Entrega acompanhada</span>
            </div>

            <span className="hidden h-5 w-px bg-white/15 sm:block" />

            <div className="flex items-center gap-2">
              <CreditCard size={18} className="shrink-0 text-blue-400" />
              <span>Pagamento facilitado</span>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-2xl lg:ml-auto">
          <div className="absolute -inset-4 rounded-[2rem] bg-blue-600/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/40">
            <img
              className="h-[340px] w-full object-cover sm:h-[440px] lg:h-[500px]"
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=90"
              alt="Carro moderno em destaque"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/10" />

            <div className="absolute left-4 right-4 top-4 flex items-center gap-3 rounded-2xl border border-white/20 bg-slate-950/75 p-4 shadow-xl backdrop-blur-md sm:left-6 sm:right-auto sm:top-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Zap size={19} fill="currentColor" />
              </span>

              <span className="flex flex-col gap-1">
                <strong className="text-sm font-bold text-white">
                  Escolhas inteligentes
                </strong>
                <small className="text-xs text-slate-300">
                  Produtos para o seu dia
                </small>
              </span>
            </div>

            <div className="absolute bottom-16 right-4 flex items-center gap-3 rounded-2xl border border-white/20 bg-slate-950/75 p-4 shadow-xl backdrop-blur-md sm:bottom-20 sm:right-6">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />

              <span className="flex flex-col gap-1">
                <strong className="text-sm font-bold text-white">
                  Tech + Auto
                </strong>
                <small className="text-xs text-slate-300">
                  Tudo em um só lugar
                </small>
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 px-5 py-4 sm:px-6">
              <span className="text-sm font-bold text-blue-300">01</span>
              <span className="h-px w-10 bg-blue-400" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-white sm:text-xs">
                INOVAÇÃO EM MOVIMENTO
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
    </section>
  );
}
