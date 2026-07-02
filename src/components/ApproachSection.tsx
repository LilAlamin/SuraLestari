import Image from "next/image";
import { cn } from "@/lib/utils";

const cards = [
  {
    title: "WISATA ALAM",
    body: "Surakarta memiliki kekayaan alam yang luar biasa. Dari perbukitan hijau hingga sungai yang jernih, nikmati pengalaman ekowisata yang menyatu dengan alam.",
    tags: ["Trekking", "Air Terjun", "Hutan Kota", "Taman Balekambang", "Kebun Raya"],
    bgImage: "/images/6500381efa378c130652ccae_bg-mask-2.webp",
    cutoutImage: "/images/6500381ea17868235c9c356a_peeking-mask-2.webp",
  },
  {
    title: "BUDAYA & HERITAGE",
    body: "Kota Solo adalah pusat kebudayaan Jawa yang kaya. Saksikan batik tulis, keris pusaka, dan pertunjukan seni tradisional yang telah berlangsung selama berabad-abad.",
    tags: ["Batik", "Keraton", "Wayang", "Gamelan", "Kuliner", "Pasar Tradisional"],
    bgImage: "/images/6500381ea7c18c4c7c3e17cf_bg-mask-1.webp",
    cutoutImage: "/images/6500381ea006a750a8f98287_peeking-mask-1.webp",
  },
  {
    title: "UMKM & KOMUNITAS",
    body: "Dukung ekonomi lokal dengan mengunjungi UMKM kreatif Surakarta. Dari kerajinan tangan hingga kuliner khas, setiap pembelian Anda berkontribusi pada keberlanjutan komunitas.",
    tags: ["Kerajinan", "Kuliner Lokal", "Homestay", "Oleh-oleh", "Workshop", "SDGs"],
    bgImage: "/images/6500381ed101e433e2357067_bg-mask.webp",
    cutoutImage: "/images/6500381e4c36ec9668677c7b_peeking-mask.webp",
  },
];

export function ApproachSection() {
  return (
    <>
      {/* Sticky Approach Header — sits behind the card sections */}
      <section className="section_sticky-header is-approach sticky top-0 z-10 w-full bg-[#def2ef]">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20">
          <div className="flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
            <h2 className="font-heading text-4xl font-bold tracking-tight text-[#181610] sm:text-5xl lg:text-6xl">
              Pendekatan Kami
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#181610]/70 sm:text-xl">
              Alam, budaya, dan komunitas menyatu dalam setiap perjalanan wisata berkelanjutan di Surakarta.
            </p>
          </div>
        </div>
      </section>

      {/* Card Sections — each one is sticky and overlaps the previous */}
      {cards.map((card, index) => {
        const isEven = index % 2 === 0;

        return (
          <section
            key={index}
            className={cn(
              "section_sticky-header is-approach-card sticky top-0 w-full min-h-screen",
              "flex items-center",
              "bg-[#def2ef]",
            )}
            style={{ zIndex: 12 + index }}
          >
            <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-20">
              <div
                className={cn(
                  "grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-24",
                )}
              >
                {/* Image */}
                <div
                  className={cn(
                    "relative w-full",
                    isEven ? "md:order-1" : "md:order-2",
                  )}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
                    {/* Background layer */}
                    <Image
                      src={card.bgImage}
                      alt={`${card.title} background`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Cutout layer on top */}
                    <div className="absolute inset-0 z-10">
                      <Image
                        src={card.cutoutImage}
                        alt={`${card.title} illustration`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div
                  className={cn(
                    "flex flex-col gap-6",
                    isEven ? "md:order-2" : "md:order-1",
                  )}
                >
                  <h3 className="font-mono text-2xl font-bold uppercase leading-tight tracking-wider text-[#181610] sm:text-3xl lg:text-4xl">
                    {card.title}
                  </h3>

                  <p className="text-base leading-relaxed text-[#181610]/80 sm:text-lg">
                    {card.body}
                  </p>

                  <div className="border-t border-[#181610]/15 pt-4">
                    <span className="mb-3 block text-xs font-bold uppercase tracking-[0.15em] text-[#181610]/60">
                      Interest Areas
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full border border-[#181610]/20 bg-white/40 px-4 py-1.5 text-sm font-medium text-[#181610]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
