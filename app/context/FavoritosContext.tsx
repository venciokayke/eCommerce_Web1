"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface Produto {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  rating?: { rate: number; count: number };
}

interface FavoritosContextType {
  favoritos: Produto[];
  isFavorito: (id: number) => boolean;
  toggleFavorito: (produto: Produto) => void;
  limparFavoritos: () => void;
}

const FavoritosContext = createContext<FavoritosContextType | undefined>(undefined);

export function FavoritosProvider({ children }: { children: ReactNode }) {
  const [favoritos, setFavoritos] = useState<Produto[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("favoritos");
    if (saved) {
      try {
        setFavoritos(JSON.parse(saved));
      } catch {
        localStorage.removeItem("favoritos");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  function isFavorito(id: number) {
    return favoritos.some((p) => p.id === id);
  }

  function toggleFavorito(produto: Produto) {
    setFavoritos((prev) =>
      prev.some((p) => p.id === produto.id)
        ? prev.filter((p) => p.id !== produto.id)
        : [...prev, produto]
    );
  }

  function limparFavoritos() {
    setFavoritos([]);
  }

  return (
    <FavoritosContext.Provider value={{ favoritos, isFavorito, toggleFavorito, limparFavoritos }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritos() {
  const context = useContext(FavoritosContext);
  if (!context) throw new Error("useFavoritos deve ser usado dentro de FavoritosProvider");
  return context;
}