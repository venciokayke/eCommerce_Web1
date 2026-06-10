"use client";

import { useState, useEffect } from "react";
import { type Product } from "@/app/data/products";
import ProductCard from "./ProductCard";
import styles from "./ProductsSection.module.css";

export default function ProductsSection() {
  // Lista de produtos vindos da API
  const [products, setProducts] = useState<Product[]>([]);

  // Controla o estado de carregamento
  const [loading, setLoading] = useState(true);

  // Guarda a mensagem de erro caso a requisição falhe
  const [error, setError] = useState("");

  // Categoria selecionada para filtrar — "all" significa todas
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("all");

  // Mapa de tradução das categorias da API para português
  const traducoes: Record<string, string> = {
    all: "Todos",
    "men's clothing": "Roupas Masculinas",
    "women's clothing": "Roupas Femininas",
    jewelery: "Joias",
    electronics: "Eletrônicos",
  };

  // Busca os produtos da API ao montar o componente
  useEffect(() => {
    async function buscarProdutos() {
      try {
        const resposta = await fetch("https://fakestoreapi.com/products");
        if (!resposta.ok) throw new Error("Erro ao buscar produtos");
        const dados: Product[] = await resposta.json();
        setProducts(dados);
      } catch (err) {
        setError("Não foi possível carregar os produtos. Tente novamente.");
        console.error(err);
      } finally {
        // Para o loading independente de sucesso ou falha
        setLoading(false);
      }
    }

    buscarProdutos();
  }, []); // array vazio = executa só uma vez quando monta

  // Extrai as categorias únicas da lista de produtos para os filtros
  const categorias = ["all", ...new Set(products.map((p) => p.category))];

  // Filtra os produtos conforme a categoria escolhida
  const produtosFiltrados =
    categoriaSelecionada === "all"
      ? products
      : products.filter((p) => p.category === categoriaSelecionada);

  return (
    // Âncora #produtos usada pelo Header para scroll suave
    <section id="produtos" className={styles.section}>
      <div className={styles.container}>
        {/* Cabeçalho da seção */}
        <div className={styles.heading}>
          <h2 className={styles.title}>Nossos Produtos</h2>
          <p className={styles.subtitle}>
            Encontre tudo o que você precisa com qualidade e estilo.
          </p>
        </div>

        {/* Botões de filtro por categoria */}
        <div className={styles.filters}>
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaSelecionada(cat)}
              className={`${styles.filterBtn} ${
                categoriaSelecionada === cat ? styles.filterActive : ""
              }`}
            >
              {traducoes[cat] ?? cat}
            </button>
          ))}
        </div>

        {/* Estado de carregamento */}
        {loading && (
          <div className={styles.feedback}>
            <div className={styles.spinner} />
            <p>Carregando produtos...</p>
          </div>
        )}

        {/* Estado de erro */}
        {error && !loading && (
          <div className={styles.feedback}>
            <p className={styles.errorMsg}>{error}</p>
          </div>
        )}

        {/* Grid de produtos */}
        {!loading && !error && (
          <div className={styles.grid}>
            {produtosFiltrados.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
