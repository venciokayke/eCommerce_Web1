"use client";

import { type Product } from "@/app/data/products";
import { useCart } from "@/app/context/CartContext";
import LikeButton from "./LikeButton";
import styles from "./ProductCard.module.css";

// Propriedades esperadas pelo componente
interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Pega a função de adicionar ao carrinho do contexto global
  const { addItem } = useCart();

  // Formata o preço para o padrão brasileiro (R$ 99,90)
  const precoFormatado = product.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  // Quando o usuário clica em "Adicionar ao Carrinho"
  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <div className={styles.card}>
      {/* Imagem do produto com altura fixa para manter o grid alinhado */}
      <div className={styles.imageWrapper}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.image}
        />
        {/* Badge da categoria no canto superior da imagem */}
        <span className={styles.badge}>{product.category}</span>
      </div>

      <div className={styles.body}>
        {/* Nome do produto — limitado a 2 linhas via CSS */}
        <h3 className={styles.title}>{product.title}</h3>

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
            <LikeButton productId={product.id} />
            {/* Botão de adicionar ao carrinho */}
            <button
              onClick={handleAddToCart}
              className={styles.btnCart}
              title="Adicionar ao carrinho"
            >
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
