import React, { useEffect } from "react";
import {
  X,
  ShoppingBag,
  Minus,
  Plus,
  Trash2,
  ArrowRight,
} from "lucide-react";

const formatPrice = (value) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

export default function CartDrawer({
  open,
  onClose,
  cart,
  onChangeQuantity,
  onRemove,
}) {
  useEffect(() => {
    if (!open) return;

    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const count = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <aside
        className="flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label="Seu carrinho"
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              Sua seleção
            </span>

            <h2 className="mt-1 text-xl font-bold text-gray-900">
              Meu carrinho{" "}
              <span className="text-gray-400">({count})</span>
            </h2>
          </div>

          <button
            className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
            onClick={onClose}
            aria-label="Fechar carrinho"
          >
            <X size={21} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <ShoppingBag size={28} />
            </span>

            <h3 className="text-lg font-bold text-gray-900">
              Seu carrinho está vazio
            </h3>

            <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-500">
              Explore a loja e adicione produtos que combinam com você.
            </p>

            <button
              className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              onClick={onClose}
            >
              Explorar produtos
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-5 overflow-y-auto px-6 py-6">
              {cart.map((item) => (
                <div
                  className="flex gap-4 border-b border-gray-100 pb-5"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-24 shrink-0 rounded-xl bg-gray-50 object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
                      {item.category}
                    </span>

                    <h3 className="mt-1 line-clamp-2 text-sm font-semibold text-gray-900">
                      {item.name}
                    </h3>

                    <strong className="mt-2 block text-sm font-bold text-blue-700">
                      {formatPrice(item.price)}
                    </strong>

                    <div className="mt-3 inline-flex items-center rounded-lg border border-gray-200">
                      <button
                        className="p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
                        onClick={() => onChangeQuantity(item.id, -1)}
                        aria-label="Diminuir quantidade"
                      >
                        <Minus size={13} />
                      </button>

                      <span className="min-w-8 text-center text-sm font-semibold text-gray-900">
                        {item.quantity}
                      </span>

                      <button
                        className="p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
                        onClick={() => onChangeQuantity(item.id, 1)}
                        aria-label="Aumentar quantidade"
                      >
                        <Plus size={13} />
                      </button>
                    </div>
                  </div>

                  <button
                    className="h-fit rounded-lg p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-600"
                    onClick={() => onRemove(item.id)}
                    aria-label={`Remover ${item.name}`}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 bg-white px-6 py-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Subtotal</span>

                <strong className="text-xl font-bold text-gray-900">
                  {formatPrice(total)}
                </strong>
              </div>

              <p className="mt-2 text-xs leading-relaxed text-gray-400">
                Frete e condições de pagamento calculados na próxima etapa.
              </p>

              <button
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                onClick={() =>
                  alert(
                    "O checkout será conectado ao backend e ao meio de pagamento em uma próxima etapa."
                  )
                }
              >
                Continuar compra
                <ArrowRight size={17} />
              </button>

              <button
                className="mt-3 w-full py-2 text-sm font-medium text-gray-500 transition hover:text-blue-600"
                onClick={onClose}
              >
                Continuar comprando
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}