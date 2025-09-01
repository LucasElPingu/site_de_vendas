import CategorySection from "@/components/CategorySection";
import ProductCard from "@/components/ProductCard";
import CarouselClientOnly from "@/components/CarouselClientOnly";
import homeStyles from "./home.module.css";

const highlights = [
  {
    id: "h1",
    name: "Camiseta Oversized Onyx",
    price: 129.9,
    image:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1600&auto=format&fit=crop",
    linkWhatsApp:
      "https://wa.me/5500000000000?text=Tenho%20interesse%20na%20Camiseta%20Oversized%20Onyx",
  },
  {
    id: "h2",
    name: "Camiseta Oversized Storm",
    price: 139.9,
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1600&auto=format&fit=crop",
    linkWhatsApp:
      "https://wa.me/5500000000000?text=Tenho%20interesse%20na%20Camiseta%20Oversized%20Storm",
  },
  {
    id: "h3",
    name: "Camiseta Oversized Void",
    price: 149.9,
    image:
      "https://images.unsplash.com/photo-1456327102063-fb5054efe647?q=80&w=1600&auto=format&fit=crop",
    linkWhatsApp:
      "https://wa.me/5500000000000?text=Tenho%20interesse%20na%20Camiseta%20Oversized%20Void",
  },
  {
    id: "h4",
    name: "Camiseta Oversized Quartz",
    price: 119.9,
    image:
      "https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1600&auto=format&fit=crop",
    linkWhatsApp:
      "https://wa.me/5500000000000?text=Tenho%20interesse%20na%20Camiseta%20Oversized%20Quartz",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className={homeStyles.bannerSection}>
        <CarouselClientOnly />
      </section>
      <section className={`${homeStyles.section} ${homeStyles.topSpace}`}>
        <CategorySection title="NOVA ERA, MESMA ATITUDE" center>
          <div className={homeStyles.gridProducts}>
            {highlights.map((p) => (
              <ProductCard
                key={p.id}
                product={{
                  id: p.id,
                  name: p.name,
                  price: p.price,
                  description: "",
                  image: p.image,
                  linkWhatsApp: p.linkWhatsApp,
                  category: "Unisex",
                  available: true,
                }}
              />
            ))}
          </div>
        </CategorySection>
      </section>

      <section className={`${homeStyles.section} ${homeStyles.topSpace}`}>
        <CategorySection title="ESTILO SEM RÓTULOS" center>
          <div className={homeStyles.gridProducts}>
            {highlights.slice(0, 4).map((p) => (
              <ProductCard
                key={`v-${p.id}`}
                product={{
                  id: p.id,
                  name: p.name,
                  price: p.price,
                  description: "",
                  image: p.image,
                  linkWhatsApp: p.linkWhatsApp,
                  category: "Unisex",
                  available: true,
                }}
              />
            ))}
          </div>
        </CategorySection>
      </section>

      <section className={`${homeStyles.section} ${homeStyles.topSpace}`}>
        <CategorySection title="ONDE A MODA VIROU MOVIMENTO" center>
          <div className={homeStyles.gridProducts}>
            {highlights.slice(0, 4).map((p) => (
              <ProductCard
                key={`m-${p.id}`}
                product={{
                  id: p.id,
                  name: p.name,
                  price: p.price,
                  description: "",
                  image: p.image,
                  linkWhatsApp: p.linkWhatsApp,
                  category: "Unisex",
                  available: true,
                }}
              />
            ))}
          </div>
        </CategorySection>
      </section>
    </div>
  );
}
