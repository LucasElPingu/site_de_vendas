"use client";
import styles from "./CategoryFilter.module.css";
import type { Category } from "@/types/product";

interface Props {
  active: Category | "todas";
  onChange: (c: Category | "todas") => void;
}

const options: (Category | "todas")[] = ["todas", "feminino", "masculino", "acessorios"];

export default function CategoryFilter({ active, onChange }: Props) {
  return (
    <div className={styles.filterBar}>
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={opt === active ? styles.filterBtnActive : styles.filterBtn}
          aria-pressed={opt === active}
        >
          {opt === "todas" ? "Todas" : opt === "acessorios" ? "Acessórios" : opt === "masculino" ? "Masculino" : "Feminino"}
        </button>
      ))}
    </div>
  );
}
