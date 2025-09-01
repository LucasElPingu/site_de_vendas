import styles from "./category-section.module.css";

export default function CategorySection({
  title,
  description,
  divider,
  center,
  children,
}: {
  title: string;
  description?: string;
  divider?: boolean;
  center?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className={divider ? styles.sectionWithDivider : undefined}>
      <div className={center ? styles.headerCentered : styles.headerRow}>
        <div className={center ? styles.headerCentered : undefined}>
          <h2 className={styles.title}>{title}</h2>
          {description ? (
            <p className={`${styles.desc} ${center ? styles.descCentered : ""}`}>{description}</p>
          ) : null}
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </section>
  );
}
