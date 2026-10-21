import React, { useState } from "react";
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
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="relative isolate grid overflow-hidden rounded-3xl bg-slate-950 px-6 py-10 shadow-xl sm:px-10 sm:py-12 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-14 lg:py-16">
          <div className="absolute -right-20 -top-24 -z-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute -bottom-32 left-1/3 -z-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

          <div>
            <span className="inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold tracking-[0.18em] text-blue-400">
              FIQUE POR DENTRO
            </span>

            <h2 className="mt-5 max-w-xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Novidades que chegam{" "}
              <span className="text-blue-400">primeiro</span> até você.
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
              Receba novidades e ofertas da AutoTech Store no seu e-mail.
            </p>
          </div>

          <form
            className="mt-8 flex flex-col gap-4 lg:mt-0"
            onSubmit={handleSubmit}
          >
            <label className="flex min-h-14 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20">
              <Mail size={19} className="shrink-0 text-slate-400" />

              <input
                type="email"
                required
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setSubmitted(false);
                }}
                placeholder="Seu melhor e-mail"
                aria-label="Seu e-mail"
                className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-slate-500"
              />
            </label>

            <button
              className="flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              type="submit"
            >
              {submitted ? "Inscrito!" : "Quero receber"}
              <ArrowRight size={17} />
            </button>

            <small className="text-xs leading-5 text-slate-500">
              {submitted
                ? "Demonstração: o cadastro ainda não está conectado a um serviço de e-mail."
                : "Ao se cadastrar, você concorda em receber comunicações da loja."}
            </small>
          </form>
        </div>
      </div>
    </section>
  );
}