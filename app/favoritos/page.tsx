"use client";

import Link from "next/link";
import Image from "next/image";
import { useFavoritos } from "@/app/context/FavoritosContext";
import LikeButton from "@/app/components/LikeButton";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer"

export default function FavoritosPage() {
  const { favoritos, limparFavoritos } = useFavoritos();

  return (
    <main className="min-h-screen bg-slate-900">
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-24"> {/* ← mt-24 adicionado */}

        {/* Cabeçalho */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center gap-3">
              <span className="text-rose-500" aria-hidden="true"></span>
              Meus Favoritos
            </h1>
            <p className="mt-1 text-slate-400 text-sm">
              {favoritos.length === 0
                ? "Você ainda não adicionou nenhum favorito."
                : `${favoritos.length} produto${favoritos.length > 1 ? "s" : ""} salvo${favoritos.length > 1 ? "s" : ""}`}
            </p>
          </div>

          {favoritos.length > 0 && (
            <button
              onClick={limparFavoritos}
              className="px-4 py-2 rounded-full border-2 border-red-400 text-red-400 text-sm font-semibold hover:bg-red-400 hover:text-white transition-all duration-200"
            >
              Limpar tudo
            </button>
          )}
        </div>

        {/* Estado vazio */}
        {favoritos.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-5 text-center">
            <div className="text-6xl" aria-hidden="true"></div>
            <h2 className="text-xl font-bold text-white">Nenhum favorito ainda</h2>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Explore nosso catálogo e clique no coração para salvar os produtos que você mais gosta.
            </p>
            <Link
              href="/"
              className="mt-2 px-7 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-full transition-all duration-200 hover:-translate-y-0.5"     
            >
              Explorar produtos
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {favoritos.map((produto) => (
              <article
                key={produto.id}
                className="relative bg-slate-800 rounded-2xl border border-slate-700 p-4 flex flex-col gap-3 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <span className="text-[11px] font-bold uppercase tracking-wide text-rose-400 bg-slate-700 px-2.5 py-1 rounded-full w-fit">
                  {produto.category}
                </span>

                <div className="absolute top-3 right-3 z-10">
                  <LikeButton produto={produto} />
                </div>

                <Link href={`/produto/${produto.id}`} className="block">
                  <div className="w-full aspect-square flex items-center justify-center bg-white rounded-xl p-4">
                    <Image
                      src={produto.image}
                      alt={produto.title}
                      width={160}
                      height={160}
                      className="object-contain max-h-40 hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>

               <Link href={`/produto/${produto.id}`} className="block no-underline">
  <h2 className="text-sm font-semibold text-white leading-snug line-clamp-2 hover:text-rose-400 transition-colors">
    {produto.title}
  </h2>

  {/* Estrelas */}
  {produto.rating && (
    <div className="flex items-center gap-1 mt-1">
      <span className="text-yellow-400 text-sm">★ {produto.rating.rate}</span>
      <span className="text-slate-400 text-xs">({produto.rating.count})</span>
    </div>
  )}

  {/* Descrição */}
  {produto.description && (
    <p className="text-slate-400 text-xs mt-1 line-clamp-3">
      {produto.description}
    </p>
  )}

  <p className="mt-1.5 text-base font-bold text-rose-400">
    {produto.price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })}
  </p>
</Link>
              </article>
            ))}
          </div>
        )}
      </div>
      <Footer/>
    </main>
  );
}