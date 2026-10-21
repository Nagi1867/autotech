import React from "react";
import { Cpu, CarFront, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const iconMap = {
  cpu: Cpu,
  "car-front": CarFront,
};

export default function Categories({ onCategorySelect }) {
  const categories = [
    {
      id: "Eletrônicos",
      title: "Eletrônicos",
      description: "Tecnologia para sua rotina",
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1000&q=85",
      icon: "cpu",
      number: "01",
    },
    {
      id: "Automotivo",
      title: "Peças automotivas",
      description: "Mais cuidado para seu veículo",
      image:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1000&q=85",
      icon: "car-front",
      number: "02",
    },
  ];

  return (
    <section
      id="categorias"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="ENCONTRE O QUE PRECISA"
          title="Explore por categoria"
          description="Do seu dia a dia à estrada, encontre soluções em um só lugar."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {categories.map((category) => {
            const Icon = iconMap[category.icon];

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => onCategorySelect(category.id)}
                className="group relative isolate flex min-h-[320px] overflow-hidden rounded-2xl bg-slate-900 text-left sm:min-h-[380px] lg:min-h-[420px]"
              >
                <img
                  src={category.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <span className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-900/10 transition-colors duration-300 group-hover:from-slate-950 group-hover:via-slate-950/55" />

                <span className="absolute left-6 top-6 text-xs font-semibold tracking-[0.2em] text-white/75 sm:left-8 sm:top-8">
                  {category.number} / CATEGORIA
                </span>

                <span className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-6 sm:p-8">
                  <span className="flex flex-col items-start">
                    <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors duration-300 group-hover:bg-blue-600 group-hover:border-blue-500">
                      <Icon size={21} />
                    </span>

                    <strong className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {category.title}
                    </strong>

                    <span className="mt-2 text-sm text-white/75 sm:text-base">
                      {category.description}
                    </span>
                  </span>

                  <span className="mb-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-300 group-hover:rotate-45 group-hover:border-white group-hover:bg-white group-hover:text-slate-900">
                    <ArrowUpRight size={20} />
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}