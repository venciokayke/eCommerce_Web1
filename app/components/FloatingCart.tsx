"use client";

import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/app/context/CartContext";

export default function FloatingCart() {
  // Pega o total de itens para exibir no badge
  const { totalItems } = useCart();

  return (
    <Link
      href="/carrinho-compras"
      className="fixed bottom-6 right-6 w-14 h-14 bg-cyan-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-cyan-700 transition-all hover:scale-110 z-40"
      title="Ir para carrinho"
    >
      <FaShoppingCart className="text-2xl" />

      {/* Badge com a quantidade de itens — só aparece quando há algo no carrinho */}
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
          {totalItems > 99 ? "99+" : totalItems}
        </span>
      )}
    </Link>
  );
}
