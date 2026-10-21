import React from "react";
import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";

const filters = ["Todos", "Estética Automotiva", "Eletrônicos"];

export default function ProductsSection({ products, searchTerm, selectedCategory, onAddToCart, onClearCategory }) {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const visibleProducts = useMemo(() => {
    const term = searchTerm.trim().toLocaleLowerCase("pt-BR");
    return products.filter((product) => {
      const matchesTerm = !term || `${product.name} ${product.category}`.toLocaleLowerCase("pt-BR").includes(term);
      const category = selectedCategory || activeFilter;
      const matchesCategory = category === "Todos" || product.category === category;
      return matchesTerm && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory, activeFilter]);

  return (
    <section className="section products-section" id="produtos">
      <div className="container">
        <SectionHeading
          eyebrow="SELEÇÃO AUTOTECH"
          title={searchTerm ? `Resultados para "${searchTerm}"` : selectedCategory ? selectedCategory : "Produtos em destaque"}
          description={searchTerm ? "Confira os produtos encontrados na nossa vitrine." : "Tecnologia e praticidade, com escolhas para diferentes necessidades."}
          action={searchTerm || selectedCategory ? "Limpar filtros" : undefined}
          onAction={() => { onClearCategory(); setActiveFilter("Todos"); }}
        />
        <div className="product-toolbar">
          <div className="filter-tabs" aria-label="Filtrar produtos">
            {filters.map((filter) => (
              <button key={filter} className={`filter-tab ${(selectedCategory ? selectedCategory === filter : activeFilter === filter) ? "active" : ""}`} onClick={() => { setActiveFilter(filter); onClearCategory(); }}>
                {filter}
              </button>
            ))}
          </div>
          <span className="product-count"><SlidersHorizontal size={15} /> {visibleProducts.length} produtos</span>
        </div>
        {visibleProducts.length ? (
          <div className="product-grid">
            {visibleProducts.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />)}
          </div>
        ) : (
          <div className="empty-state">
            <span className="empty-state-icon"><SlidersHorizontal size={25} /></span>
            <h3>Nenhum produto encontrado</h3>
            <p>Tente buscar por outro termo ou limpe os filtros para ver toda a vitrine.</p>
            <button className="button button-primary" onClick={() => { onClearCategory(); setActiveFilter("Todos"); }}>Ver todos os produtos</button>
          </div>
        )}
        <p className="price-note">*Condições de parcelamento ilustrativas. Confirme os valores e condições antes de publicar a loja.</p>
      </div>
    </section>
  );
}