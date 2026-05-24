"use client";
import { useState, useEffect, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";


export default function Header() {
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
      className={`fixed top-0 z-50 w-full border-b backdrop-blur-md transition-all duration-500 ${isScrolled ? "bg-slate/95 border-gray/30" : "bg-black/80 border-white/10"}`}
    >
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
            <span className="text-[44px] tracking-widest text-white logo-text">
              P2 Store
            </span>
          </div>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8 font-medium uppercase text-base tracking-wider">
          <a href="/#produtos" className="hover:text-gray-500 transition-colors">
            Nossos Produtos
          </a>
          <a href="/#quem-somos" className="hover:text-gray-500 transition-colors">
            Quem Somos
          </a>
          <Link
                href="/carrinho-compras"
                 className="border border-white text-white px-4 py-4 rounded-full hover:bg-cyan-600 transition-colors"
              >
            <FaShoppingCart className="text-lg"/>
          </Link>
        </nav>
      </div>
    </header>
  );
}
