"use client";
import { useState, useEffect, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  const voltarAoTopo = (e: MouseEvent<HTMLAnchorElement>) => {
    if (pathName === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b backdrop-blur-md transition-all duration-500 ${isScrolled ? "bg-black/95 border-white/10" : "bg-black/80 border-transparent"}`}>
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 ${isScrolled ? "py-2" : "py-4"}`}
      >
        <Link
          href="/"
          onClick={voltarAoTopo}
          className="flex items-center group"
        >
          <div
            className={`relative flex items-center justify-center transition-all duration-500 group-hover:scale-105 ${isScrolled ? "w-[110px] h-[35px] md:w-[140px] md:h-[45px]" : "w-[150px] h-[50px] md:w-[180px] md:h-[60px]"}`}
          >
            <span
              className={`tracking-widest text-white logo-text transition-all duration-500 whitespace-nowrap ${
                isScrolled ? "text-[32px]" : "text-[44px]"
              }`}
            >
              P2 Store
            </span>
          </div>
        </Link>

         {/* Menu Hambúrguer (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 p-2 focus:outline-none md:hidden"
        >
          <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8 font-medium uppercase text-base tracking-wider">
          <a
            href="/#produtos"
            className="hover:text-gray-500 transition-colors"
          >
            Nossos Produtos
          </a>
          <a
            href="/contato"
            className="hover:text-gray-500 transition-colors"
          >
            Contato
          </a>
            <Link href="/favoritos" className="hover:text-rose-400 transition-colors flex items-center gap-1">
              <FaHeart className="text-lg" />
              <span>Favoritos</span>
         </Link>
          <Link
            href="/carrinho-compras"
            className="border border-white text-white px-4 py-2 rounded-full hover:bg-cyan-600 transition-colors flex items-center justify-center"
          >
            <FaShoppingCart className="text-lg" />
          </Link>
        </nav>
      </div>

      {/* Menu Mobile Dropdown */}
      <div
        className={`absolute top-full left-0 w-full bg-black border-b border-white/20 transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col gap-6 p-8 text-center text-lg font-semibold uppercase tracking-widest text-white">
          <li>
            <a href="/#solucoes" onClick={() => setIsOpen(false)}>
              Nossos Produtos
            </a>
          </li>
          <li>
            <a href="/contato" onClick={() => setIsOpen(false)}>
              Contato
            </a>
          </li>
           <li>
              <Link href="/favoritos" onClick={() => setIsOpen(false)}>
              Favoritos
             </Link>
           </li>
        </ul>
      </div>
    </header>
  );
}
