import React from "react";
import { useCallback, useMemo, useState } from "react";
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
  return <div className="toast-message" role="status"><span><Check size={17} /></span>{message}<button onClick={onClose} aria-label="Fechar aviso"><X size={16} /></button></div>;
}

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState("");

  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);

  const addToCart = useCallback((product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) return current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      return [...current, { ...product, quantity: 1 }];
    });
    setToast(`${product.name} adicionado ao carrinho`);
    window.setTimeout(() => setToast(""), 2800);
  }, []);

  function changeQuantity(id, change) {
    setCart((current) => current.map((item) => item.id === id ? { ...item, quantity: item.quantity + change } : item).filter((item) => item.quantity > 0));
  }

  function removeFromCart(id) {
    setCart((current) => current.filter((item) => item.id !== id));
  }

  function searchProducts(term) {
    setSearchTerm(term);
    setSelectedCategory("");
  }

  function selectCategory(category) {
    setSelectedCategory(category);
    setSearchTerm("");
    document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
  }

  function clearFilters() {
    setSelectedCategory("");
    setSearchTerm("");
  }

  return (
    <>
      <Header cartCount={cartCount} onSearch={searchProducts} onCartClick={() => setCartOpen(true)} />
      <main>
        <Hero />
        <Categories onCategorySelect={selectCategory} />
        <ProductsSection products={initialProducts} searchTerm={searchTerm} selectedCategory={selectedCategory} onAddToCart={addToCart} onClearCategory={clearFilters} />
        <Benefits />
        <Newsletter />
      </main>
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} cart={cart} onChangeQuantity={changeQuantity} onRemove={removeFromCart} />
      <Toast message={toast} onClose={() => setToast("")} />
    </>
  );
}