"use client";

import { FaSearch } from "react-icons/fa";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className={styles.wrapper}>
      <FaSearch className={styles.icon} />
      <input
        type="text"
        placeholder="Buscar produtos por nome..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.input}
        aria-label="Buscar produtos"
      />
    </div>
  );
}
