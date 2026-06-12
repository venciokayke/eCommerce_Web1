"use client";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useFavoritos } from "../context/FavoritosContext";
import { Produto } from "../context/FavoritosContext";
import styles from "./LikeButton.module.css";

interface LikeButtonProps {
  produto: Produto; // agora recebe o produto inteiro, não só o id
}

export default function LikeButton({ produto }: LikeButtonProps) {
  const { isFavorito, toggleFavorito } = useFavoritos();
  const liked = isFavorito(produto.id);

  return (
    <button
      onClick={(e) => {
        e.preventDefault(); // evita navegação se estiver dentro de um Link
        toggleFavorito(produto);
      }}
      className={`${styles.btn} ${liked ? styles.liked : ""}`}
      aria-label={liked ? "Remover dos favoritos" : "Adicionar aos favoritos"}
      title={liked ? "Remover dos favoritos" : "Adicionar aos favoritos"}
    >
      {liked ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
}