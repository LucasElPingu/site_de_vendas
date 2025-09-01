"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./banner-carousel.module.css";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920&auto=format&fit=crop",
    alt: "Coleção streetwear em preto e branco",
  },
  {
    src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1920&auto=format&fit=crop",
    alt: "Camisas oversized Can Say",
  },
  {
    src: "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1920&auto=format&fit=crop",
    alt: "Detalhes e texturas minimalistas",
  },
];

export default function BannerCarousel() {
  const scroller = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    let i = 0;
    const id = setInterval(() => {
      i = (i + 1) % slides.length;
      el.scrollTo({ left: el.clientWidth * i, behavior: "smooth" });
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const next = () => {
    const el = scroller.current;
    if (!el) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    const n = (i + 1) % slides.length;
    el.scrollTo({ left: el.clientWidth * n, behavior: "smooth" });
  };
  const prev = () => {
    const el = scroller.current;
    if (!el) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    const n = (i - 1 + slides.length) % slides.length;
    el.scrollTo({ left: el.clientWidth * n, behavior: "smooth" });
  };

  return (
    <div className={styles.carouselWrapper} suppressHydrationWarning>
      <div ref={scroller} className={styles.scroller}>
        {slides.map((s, idx) => (
          <div key={idx} className={styles.slide}>
            <Image
              src={s.src}
              alt={s.alt}
              fill
              priority={idx === 0}
              sizes="100vw"
              className={styles.image}
            />
            <div className={styles.overlay} />
          </div>
        ))}
      </div>

      <div className={styles.navWrap}>
        <button
          type="button"
          aria-label="Anterior"
          onClick={prev}
          disabled={slides.length <= 1}
          className={styles.navBtn}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M15.5 19 8.5 12l7-7" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button
          type="button"
          aria-label="Próximo"
          onClick={next}
          disabled={slides.length <= 1}
          className={styles.navBtn}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M8.5 5 15.5 12l-7 7" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </div>
  );
}
