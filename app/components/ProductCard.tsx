"use client";

import Link from "next/link";
import { type Product } from "@/app/data/products";
import LikeButton from "./LikeButton";
import AddToCartButton from "./AddToCartButton";
import styles from "./ProductCard.module.css";

// Traduz as categorias da API (em inglês) para português
const traducaoCategoria: Record<string, string> = {
  "men's clothing": "Roupas Masculinas",
  "women's clothing": "Roupas Femininas",
  jewelery: "Joias",
  electronics: "Eletrônicos",
};

// Propriedades esperadas pelo componente
interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {

  // Formata o preço para o padrão brasileiro
  const precoFormatado = product.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className={styles.card}>
      {/* Imagem do produto com altura fixa para manter o grid alinhado */}
      <Link href={`/produto/${product.id}`} className={styles.imageWrapper}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.image}
        />
        {/* Badge da categoria traduzida para português */}
        <span className={styles.badge}>
          {traducaoCategoria[product.category] ?? product.category}
        </span>
      </Link>

      <div className={styles.body}>
        
        <Link href={`/produto/${product.id}`} className={styles.titleLink}>
          <h3 className={styles.title}>{product.title}</h3>
        </Link>

        {/* Avaliação com estrelas */}
        <div className={styles.rating}>
          <span className={styles.stars}>★ {product.rating.rate}</span>
          <span className={styles.ratingCount}>({product.rating.count})</span>
        </div>

        {/* Descrição curta — máximo de 3 linhas */}
        <p className={styles.description}>{product.description}</p>

        {/* Rodapé do card: preço + ações */}
        <div className={styles.footer}>
          <span className={styles.price}>{precoFormatado}</span>
          <div className={styles.actions}>
            {/* Botão de favoritar */}
            <LikeButton produto={product} />
            {/* Botão de adicionar ao carrinho */}
            <AddToCartButton product={product} className={styles.btnCart} />
          </div>
        </div>
      </div>
    </div>
  );
}
