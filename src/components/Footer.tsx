import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerInner}>
        <p className={styles.footerText}>© {year} Sua Loja. Todos os direitos reservados.</p>
        <p className={styles.footerSubtext}>Atendimento via WhatsApp e Instagram.</p>
      </div>
    </footer>
  );
}
