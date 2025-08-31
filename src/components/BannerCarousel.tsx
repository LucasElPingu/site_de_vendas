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
    <div className={`${styles.carouselWrapper} rounded-sm overflow-hidden mt-0 relative`} suppressHydrationWarning>
      <div ref={scroller} className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {slides.map((s, idx) => (
          <div key={idx} className="relative w-full shrink-0 snap-center aspect-[16/9] bg-black">
            <Image
              src={s.src}
              alt={s.alt}
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between p-2">
        <button
          type="button"
          aria-label="Anterior"
          onClick={prev}
          disabled={slides.length <= 1}
          className="pointer-events-auto inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-white shadow-md hover:bg-white/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M15.5 19 8.5 12l7-7" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button
          type="button"
          aria-label="Próximo"
          onClick={next}
          disabled={slides.length <= 1}
          className="pointer-events-auto inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-white shadow-md hover:bg-white/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M8.5 5 15.5 12l-7 7" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
    </div>
  );
}
