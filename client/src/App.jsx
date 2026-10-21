import React, { useCallback, useMemo, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Check, X } from "lucide-react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductsSection from "./components/ProductsSection";
import Benefits from "./components/Benefits";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import { products as initialProducts } from "./data/products";

function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="toast-message" role="status">
      <span>
        <Check size={17} />
      </span>

      {message}

      <button onClick={onClose} aria-label="Fechar aviso">
        <X size={16} />
      </button>
    </div>
  );
}

function Home({ onCategorySelect }) {
  return (
    <main>
      <Hero />
      <Categories onCategorySelect={onCategorySelect} />
      <Benefits />
      <Newsletter />
    </main>
  );
}

function ProductsPage({
  products,
  searchTerm,
  selectedCategory,
  onAddToCart,
  onClearFilters,
}) {
  return (
    <main className="min-h-screen">
      <ProductsSection
        products={products}
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        onAddToCart={onAddToCart}
        onClearCategory={onClearFilters}
      />
    </main>
  );
}

export default function App() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState("");

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  const addToCart = useCallback((product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { ...product, quantity: 1 }];
    });

    setToast(`${product.name} adicionado ao carrinho`);

    window.setTimeout(() => setToast(""), 2800);
  }, []);

  function changeQuantity(id, change) {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(id) {
    setCart((current) => current.filter((item) => item.id !== id));
  }

  function searchProducts(term) {
    setSearchTerm(term);
    setSelectedCategory("");
    navigate("/produtos");
  }

  function selectCategory(category) {
    setSelectedCategory(category);
    setSearchTerm("");
    navigate("/produtos");
  }

  function clearFilters() {
    setSelectedCategory("");
    setSearchTerm("");
  }

  return (
    <>
      <Header
        cartCount={cartCount}
        onSearch={searchProducts}
        onCartClick={() => setCartOpen(true)}
        onCategorySelect={selectCategory}
      />

      <Routes>
        <Route
          path="/"
          element={<Home onCategorySelect={selectCategory} />}
        />

        <Route
          path="/produtos"
          element={
            <ProductsPage
              products={initialProducts}
              searchTerm={searchTerm}
              selectedCategory={selectedCategory}
              onAddToCart={addToCart}
              onClearFilters={clearFilters}
            />
          }
        />

        <Route
          path="*"
          element={
            <main className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-4 text-center">
              <h1 className="text-3xl font-extrabold text-slate-900">
                Página não encontrada
              </h1>

              <p className="text-slate-600">
                A página que você procura não existe.
              </p>

              <button
                onClick={() => navigate("/")}
                className="rounded-full bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
              >
                Voltar ao início
              </button>
            </main>
          }
        />
      </Routes>

      <Footer />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onChangeQuantity={changeQuantity}
        onRemove={removeFromCart}
      />

      <Toast message={toast} onClose={() => setToast("")} />
    </>
  );
}