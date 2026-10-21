import React, { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";

const filters = ["Todos", "Estética Automotiva", "Eletrônicos"];

export default function ProductsSection({
  products,
  searchTerm,
  selectedCategory,
  onAddToCart,
  onClearCategory,
}) {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const visibleProducts = useMemo(() => {
    const term = searchTerm.trim().toLocaleLowerCase("pt-BR");

    return products.filter((product) => {
      const matchesTerm =
        !term ||
        `${product.name} ${product.category}`
          .toLocaleLowerCase("pt-BR")
          .includes(term);

      const category = selectedCategory || activeFilter;
      const matchesCategory =
        category === "Todos" || product.category === category;

      return matchesTerm && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory, activeFilter]);

  function clearFilters() {
    onClearCategory();
    setActiveFilter("Todos");
  }

  return (
    <section
      id="produtos"
      className="bg-gray-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="SELEÇÃO AUTOTECH"
          title={
            searchTerm
              ? `Resultados para "${searchTerm}"`
              : selectedCategory || "Produtos em destaque"
          }
          description={
            searchTerm
              ? "Confira os produtos encontrados na nossa vitrine."
              : "Tecnologia e praticidade, com escolhas para diferentes necessidades."
          }
          action={
            searchTerm || selectedCategory ? "Limpar filtros" : undefined
          }
          onAction={clearFilters}
        />

        <div className="mt-10 mb-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div
            className="flex flex-wrap gap-2"
            aria-label="Filtrar produtos"
          >
            {filters.map((filter) => {
              const isActive = selectedCategory
                ? selectedCategory === filter
                : activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                    isActive
                      ? "border-blue-600 bg-blue-600 text-white shadow-md shadow-blue-600/20"
                      : "border-gray-200 bg-white text-gray-600 hover:border-blue-300 hover:text-blue-600"
                  }`}
                  onClick={() => {
                    setActiveFilter(filter);
                    onClearCategory();
                  }}
                >
                  {filter}
                </button>
              );
            })}
          </div>

          <span className="inline-flex items-center gap-2 text-sm text-gray-500">
            <SlidersHorizontal size={16} />
            <strong className="font-semibold text-gray-900">
              {visibleProducts.length}
            </strong>
            {visibleProducts.length === 1 ? "produto" : "produtos"}
          </span>
        </div>

        {visibleProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <SlidersHorizontal size={25} />
            </span>

            <h3 className="mt-5 text-lg font-bold text-gray-900">
              Nenhum produto encontrado
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
              Tente buscar por outro termo ou limpe os filtros para ver toda a
              vitrine.
            </p>

            <button
              type="button"
              className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              onClick={clearFilters}
            >
              Ver todos os produtos
            </button>
          </div>
        )}

        <p className="mt-8 text-xs leading-5 text-gray-400">
          *Condições de parcelamento ilustrativas. Confirme os valores e
          condições antes de publicar a loja.
        </p>
      </div>
    </section>
  );
}