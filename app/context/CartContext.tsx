"use client";

// Importações necessárias do React para criar o contexto e gerenciar estado
import { createContext, useContext, useState, type ReactNode } from "react";

// Tipo que representa um item dentro do carrinho
export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// Interface que define todas as funções e dados disponíveis no contexto
interface CartContextType {
  items: CartItem[];
  addItem: (product: Omit<CartItem, "quantity">) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

// Criação do contexto com valor inicial null
const CartContext = createContext<CartContextType | null>(null);

// Componente provedor que envolve a aplicação e distribui o estado do carrinho
export function CartProvider({ children }: { children: ReactNode }) {
  // Estado principal do carrinho — lista de itens
  const [items, setItems] = useState<CartItem[]>([]);

  // Adiciona um produto ao carrinho; se já existir, incrementa a quantidade
  const addItem = (product: Omit<CartItem, "quantity">) => {
    setItems((prev) => {
      const jaExiste = prev.find((item) => item.id === product.id);
      if (jaExiste) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Remove completamente um produto do carrinho pelo id
  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Atualiza a quantidade de um produto; se chegar a 0, remove o item
  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  // Esvazia o carrinho
  const clearCart = () => setItems([]);

  // Calcula o total de itens (somando as quantidades)
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  // Calcula o preço total do carrinho
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook customizado para consumir o contexto em qualquer componente filho
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart deve ser usado dentro do CartProvider");
  return ctx;
}
