"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/app/context/CartContext";
import { type Product } from "@/app/data/products";

interface Props {
  product: Product;
  className?: string;
}

export default function AddToCartButton({ product, className }: Props) {
  const { items, addItem } = useCart();

  const inCart = items.some((i) => i.id === product.id);

  // pequeno estado local para forçar re-render e mostrar o texto atualizado
  const [added, setAdded] = useState(inCart);

  useEffect(() => {
    setAdded(inCart);
  }, [inCart]);

  const handle = () => {
    if (!inCart) {
      addItem({
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.image,
      });
    }
  };

  return (
    <button
      onClick={handle}
      className={className}
      disabled={added}
      aria-pressed={added}
      title={added ? "Produto adicionado" : "Adicionar ao carrinho"}
    >
      {added ? "Adicionado!" : "Adicionar"}
    </button>
  );
}
