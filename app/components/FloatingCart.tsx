"use client";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

export default function FloatingCart() {
  return (
    <Link
      href="/carrinho-compras"
      className="fixed bottom-6 right-6 w-14 h-14 bg-cyan-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-cyan-700 transition-all hover:scale-110 z-40"
      title="Ir para carrinho"
    >
      <FaShoppingCart className="text-2xl" />
    </Link>
  );
}
