import styles from "./footer.module.css";
import CTAButton from "@/components/CTAButton";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footerRoot}>
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className={`$"text-xl md:text-2xl font-semibold font-graffiti tracking-tight" ${styles.textLogo}`}>Can Say</h3>
            <p className={`$"text-white/70 mt-2 max-w-xl text-sm md:text-base" ${styles.fontFormat}`}>ROUPA É ARTE, NÃO PADRÃO</p>
          </div>
                 <Image
          src="/images/icon.jpg" // 🔑 caminho relativo a /public
          alt="Logo"
          height={100}
          width={100}
          className={styles.logoImage}
        />
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialLink}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill="#fff" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.055 1.97.24 2.427.403.61.223 1.045.49 1.502.947.457.457.724.892.947 1.502.163.457.348 1.257.403 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 1.97-.403 2.427a3.92 3.92 0 0 1-.947 1.502 3.92 3.92 0 0 1-1.502.947c-.457.163-1.257.348-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.97-.24-2.427-.403a3.92 3.92 0 0 1-1.502-.947 3.92 3.92 0 0 1-.947-1.502c-.163-.457-.348-1.257-.403-2.427C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.055-1.17.24-1.97.403-2.427.223-.61.49-1.045.947-1.502.457-.457.892-.724 1.502-.947.457-.163 1.257-.348 2.427-.403C8.416 2.175 8.796 2.163 12 2.163Zm0 1.622c-3.15 0-3.517.012-4.754.07-.991.045-1.53.212-1.885.353-.474.184-.812.404-1.168.76-.356.356-.576.694-.76 1.168-.141.355-.308.894-.353 1.885-.058 1.237-.07 1.604-.07 4.754s.012 3.517.07 4.754c.045.991.212 1.53.353 1.885.184.474.404.812.76 1.168.356.356.694.576 1.168.76.355.141.894.308 1.885.353 1.237.058 1.604.07 4.754.07s3.517-.012 4.754-.07c.991-.045 1.53-.212 1.885-.353.474-.184.812-.404 1.168-.76.356-.356.576-.694.76-1.168.141-.355.308-.894.353-1.885.058-1.237.07-1.604.07-4.754s-.012-3.517-.07-4.754c-.045-.991-.212-1.53-.353-1.885-.184-.474-.404-.812-.76-1.168a2.81 2.81 0 0 0-1.168-.76c-.355-.141-.894-.308-1.885-.353-1.237-.058-1.604-.07-4.754-.07Zm0 3.513a4.702 4.702 0 1 1 0 9.404 4.702 4.702 0 0 1 0-9.404Zm0 1.622a3.08 3.08 0 1 0 0 6.16 3.08 3.08 0 0 0 0-6.16Zm5.993-2.163a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"/></svg>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className={styles.socialLink}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill="#fff" d="M21 8.125a8.874 8.874 0 0 1-5.25-1.75V16.5a5.375 5.375 0 1 1-5.375-5.375 5.3 5.3 0 0 1 1.125.125v2.3a3.1 3.1 0 0 0-1.125-.2 3.075 3.075 0 1 0 3.075 3.075V2.875h2.175a6.681 6.681 0 0 0 5.25 2.6V8.125Z"/></svg>
            </a>
          </div>
        </div>
        <div className="mt-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CTAButton href="https://wa.me/5500000000000" label="Fale no WhatsApp" />
          <p className="text-white/60 text-xs">© <span suppressHydrationWarning>{new Date().getUTCFullYear()}</span> Can Say — Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
