import styles from "./SectionHeading.module.css";

export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>{children}</h2>
    </div>
  );
}
