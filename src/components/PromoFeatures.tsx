import styles from "./PromoFeatures.module.css";

export default function PromoFeatures() {
  return (
    <section className={styles.featuresSection} aria-label="Vantagens da loja">
      <div className={styles.grid}>        
        <div className={styles.card}>
          <div className={styles.icon} aria-hidden>🚚</div>
          <div>
            <h3 className={styles.title}>Entrega Rápida</h3>
            <p className={styles.text}>Receba em poucos dias em todo o Brasil.</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.icon} aria-hidden>🔁</div>
          <div>
            <h3 className={styles.title}>Troca Fácil</h3>
            <p className={styles.text}>7 dias para trocas sem complicação.</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.icon} aria-hidden>💬</div>
          <div>
            <h3 className={styles.title}>Suporte WhatsApp</h3>
            <p className={styles.text}>Atendimento ágil e humanizado.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
