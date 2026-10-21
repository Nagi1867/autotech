import React from "react";
import { Cpu, CarFront, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

const iconMap = { cpu: Cpu, "car-front": CarFront };

export default function Categories({ onCategorySelect }) {
  const categories = [
    { id: "Eletrônicos", title: "Eletrônicos", description: "Tecnologia para sua rotina", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1000&q=85", icon: "cpu", number: "01" },
    { id: "Automotivo", title: "Peças automotivas", description: "Mais cuidado para seu veículo", image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1000&q=85", icon: "car-front", number: "02" }
  ];

  return (
    <section className="section categories-section" id="categorias">
      <div className="container">
        <SectionHeading eyebrow="ENCONTRE O QUE PRECISA" title="Explore por categoria" description="Do seu dia a dia à estrada, encontre soluções em um só lugar." />
        <div className="category-grid">
          {categories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <button className="category-card" key={category.id} onClick={() => onCategorySelect(category.id)}>
                <img src={category.image} alt="" loading="lazy" />
                <span className="category-overlay" />
                <span className="category-number">{category.number} / CATEGORIA</span>
                <span className="category-content">
                  <span className="category-icon"><Icon size={21} /></span>
                  <strong>{category.title}</strong>
                  <small>{category.description}</small>
                </span>
                <span className="category-arrow"><ArrowUpRight size={20} /></span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}