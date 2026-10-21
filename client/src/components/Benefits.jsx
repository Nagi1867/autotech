
import React from "react";
import {
  ShieldCheck,
  Truck,
  Headphones,
  CreditCard
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Compra segura",
    text: "Uma experiência pensada para sua tranquilidade."
  },
  {
    icon: Truck,
    title: "Entrega acompanhada",
    text: "Informações claras sobre o envio do pedido."
  },
  {
    icon: Headphones,
    title: "Atendimento próximo",
    text: "Suporte para ajudar você na sua escolha."
  },
  {
    icon: CreditCard,
    title: "Pagamento facilitado",
    text: "Opções de pagamento apresentadas com clareza."
  }
];

export default function Benefits() {
  return (
    <section
      id="sobre"
      className="bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-blue-400">
            A EXPERIÊNCIA AUTOTECH
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Comprar bem também faz parte da{" "}
            <span className="text-blue-400">tecnologia.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Queremos tornar sua experiência de compra simples, transparente
            e prática, do primeiro clique até a entrega.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/[0.06]"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-600 group-hover:text-white">
                <Icon size={22} />
              </span>

              <h3 className="text-lg font-bold text-white">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
