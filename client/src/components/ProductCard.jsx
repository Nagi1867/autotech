import React from "react";
import { Heart, ShoppingCart, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const formatPrice = (value) => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function ProductCard({ product, onAddToCart }) {
  const [favorite, setFavorite] = useState(false);
  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.badge && <span className={`product-badge ${product.badge === "Oferta" ? "badge-sale" : ""}`}>{product.badge}</span>}
        {discount > 0 && <span className="discount-badge">-{discount}%</span>}
        <button className={`favorite-button ${favorite ? "is-favorite" : ""}`} onClick={() => setFavorite(!favorite)} aria-label={favorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}>
          <Heart size={17} fill={favorite ? "currentColor" : "none"} />
        </button>
        <button className="quick-view" onClick={() => alert(`${product.name}\n\n${formatPrice(product.price)}\n\nA página de detalhes será implementada em uma próxima etapa.`)}>Ver detalhes <ArrowUpRight size={15} /></button>
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <div className="product-price-row">
          <div className="product-prices">
            {product.oldPrice && <span className="old-price">{formatPrice(product.oldPrice)}</span>}
            <strong>{formatPrice(product.price)}</strong>
          </div>
          <button className="add-cart-button" onClick={() => onAddToCart(product)} aria-label={`Adicionar ${product.name} ao carrinho`}><ShoppingCart size={18} /></button>
        </div>
        <span className="installment">ou até 3x sem juros*</span>
      </div>
    </article>
  );
}