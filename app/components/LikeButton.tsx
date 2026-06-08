"use client";

// useState é necessário aqui pois o botão precisa alternar entre curtido/não curtido
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import styles from "./LikeButton.module.css";

interface LikeButtonProps {
  productId: number; // recebe o id do produto para identificar qual está sendo curtido
}

export default function LikeButton({ productId: _ }: LikeButtonProps) {
  // controla se o produto está nos favoritos ou não
  const [liked, setLiked] = useState(false);

  return (
    <button
      // alterna o estado ao clicar
      onClick={() => setLiked((prev) => !prev)}
      className={`${styles.btn} ${liked ? styles.liked : ""}`}
      aria-label={liked ? "Remover dos favoritos" : "Adicionar aos favoritos"}
      title={liked ? "Remover dos favoritos" : "Adicionar aos favoritos"}
    >
      {/* Exibe coração cheio se curtido, vazio se não */}
      {liked ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
}
