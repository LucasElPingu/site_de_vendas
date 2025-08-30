"use client";
import styles from "./SearchBar.module.css";

interface Props {
  value: string;
  onChange: (v: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className={styles.searchWrap}>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.searchInput}
        placeholder="Buscar produtos..."
        aria-label="Buscar produtos"
      />
    </div>
  );
}
