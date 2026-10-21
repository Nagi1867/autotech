import React from "react";
import { useEffect } from "react";
import { X, ShoppingBag, Minus, Plus, Trash2, ArrowRight } from "lucide-react";

const formatPrice = (value) => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export default function CartDrawer({ open, onClose, cart, onChangeQuantity, onRemove }) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (event) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="cart-layer" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <aside className="cart-drawer" role="dialog" aria-modal="true" aria-label="Seu carrinho">
        <div className="cart-header">
          <div><span className="section-eyebrow">SUA SELEÇÃO</span><h2>Meu carrinho <span>({count})</span></h2></div>
          <button className="icon-button" onClick={onClose} aria-label="Fechar carrinho"><X size={21} /></button>
        </div>
        {cart.length === 0 ? (
          <div className="cart-empty"><span><ShoppingBag size={28} /></span><h3>Seu carrinho está vazio</h3><p>Explore a loja e adicione produtos que combinam com você.</p><button className="button button-primary" onClick={onClose}>Explorar produtos</button></div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-info"><span>{item.category}</span><h3>{item.name}</h3><strong>{formatPrice(item.price)}</strong>
                    <div className="quantity-control">
                      <button onClick={() => onChangeQuantity(item.id, -1)} aria-label="Diminuir quantidade"><Minus size={13} /></button>
                      <span>{item.quantity}</span>
                      <button onClick={() => onChangeQuantity(item.id, 1)} aria-label="Aumentar quantidade"><Plus size={13} /></button>
                    </div>
                  </div>
                  <button className="remove-item" onClick={() => onRemove(item.id)} aria-label={`Remover ${item.name}`}><Trash2 size={16} /></button>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <div className="cart-subtotal"><span>Subtotal</span><strong>{formatPrice(total)}</strong></div>
              <p>Frete e condições de pagamento calculados na próxima etapa.</p>
              <button className="button button-primary checkout-button" onClick={() => alert("O checkout será conectado ao backend e ao meio de pagamento em uma próxima etapa.")}>Continuar compra <ArrowRight size={17} /></button>
              <button className="continue-shopping" onClick={onClose}>Continuar comprando</button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}