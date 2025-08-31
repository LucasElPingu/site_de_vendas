import styles from "./category-section.module.css";

export default function CategorySection({
  title,
  description,
  divider,
  children,
}: {
  title: string;
  description?: string;
  divider?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className={divider ? styles.sectionWithDivider : undefined}>
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
          {description ? (
            <p className="text-white/60 text-sm md:text-base mt-1 max-w-2xl">{description}</p>
          ) : null}
        </div>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}
