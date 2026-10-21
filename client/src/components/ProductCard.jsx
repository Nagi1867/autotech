import React, { useState } from "react";
import { Heart, ShoppingCart, ArrowUpRight } from "lucide-react";

const formatPrice = (value) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

export default function ProductCard({ product, onAddToCart }) {
  const [favorite, setFavorite] = useState(false);

  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0;

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-xl hover:shadow-slate-900/5">
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {product.badge && (
          <span
            className={`absolute left-3 top-3 rounded-md px-3 py-1 text-xs font-semibold ${
              product.badge === "Oferta"
                ? "bg-red-500 text-white"
                : "bg-blue-600 text-white"
            }`}
          >
            {product.badge}
          </span>
        )}

        {discount > 0 && (
          <span className="absolute right-3 top-3 rounded-md bg-emerald-500 px-2.5 py-1 text-xs font-bold text-white">
            -{discount}%
          </span>
        )}

        <button
          className={`absolute right-3 top-14 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-105 ${
            favorite
              ? "text-red-500"
              : "text-gray-500 hover:text-red-500"
          }`}
          onClick={() => setFavorite(!favorite)}
          aria-label={
            favorite ? "Remover dos favoritos" : "Adicionar aos favoritos"
          }
          type="button"
        >
          <Heart size={17} fill={favorite ? "currentColor" : "none"} />
        </button>

        <button
          className="absolute bottom-3 left-3 right-3 flex translate-y-3 items-center justify-center gap-2 rounded-lg bg-white/95 px-4 py-3 text-sm font-semibold text-slate-900 opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-blue-600 hover:text-white group-hover:translate-y-0 group-hover:opacity-100 focus:translate-y-0 focus:opacity-100"
          onClick={() =>
            alert(
              `${product.name}\n\n${formatPrice(product.price)}\n\nA página de detalhes será implementada em uma próxima etapa.`
            )
          }
          type="button"
        >
          Ver detalhes
          <ArrowUpRight size={15} />
        </button>
      </div>

      <div className="p-4 sm:p-5">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
          {product.category}
        </span>

        <h3 className="mt-2 min-h-12 text-sm font-semibold leading-6 text-gray-900 transition-colors group-hover:text-blue-700 sm:text-base">
          {product.name}
        </h3>

        <div className="mt-4 flex items-end justify-between gap-3">
          <div className="flex min-w-0 flex-col gap-1">
            {product.oldPrice && (
              <span className="text-xs text-gray-400 line-through">
                {formatPrice(product.oldPrice)}
              </span>
            )}

            <strong className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
              {formatPrice(product.price)}
            </strong>
          </div>

          <button
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-700 active:scale-95"
            onClick={() => onAddToCart(product)}
            aria-label={`Adicionar ${product.name} ao carrinho`}
            type="button"
          >
            <ShoppingCart size={18} />
          </button>
        </div>

        <span className="mt-3 block text-xs text-gray-500">
          ou até 3x sem juros
        </span>
      </div>
    </article>
  );
}