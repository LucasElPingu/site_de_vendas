import styles from "./AnnouncementBar.module.css";

export default function AnnouncementBar() {
  return (
    <div className={styles.announce}>
      <p className={styles.text}>
        Liquida de Verão: até 50% OFF • Entrega rápida • Compre pelo WhatsApp
      </p>
    </div>
  );
}
