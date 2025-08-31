"use client";
import dynamic from "next/dynamic";

const BannerCarouselNoSSR = dynamic(() => import("@/components/BannerCarousel"), {
  ssr: false,
  loading: () => (
    <div className="rounded-sm overflow-hidden border border-white/10">
      <div className="w-full aspect-[16/9] bg-black" />
    </div>
  ),
});

export default function CarouselClientOnly() {
  return <BannerCarouselNoSSR />;
}
