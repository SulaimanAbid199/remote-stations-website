"use client";

import Image from "next/image";

const partners = [
  { src: "/assets/slider/telenor.svg", alt: "Telenor" },
  { src: "/assets/slider/system.svg", alt: "Systems" },
  { src: "/assets/slider/RTA.svg", alt: "RTA" },
  { src: "/assets/slider/mobily.svg", alt: "Mobily" },
  { src: "/assets/slider/askariBank.svg", alt: "Askari Bank" },
];

export default function PartnersSection() {
  const scrollingLogos = [...partners, ...partners];

  return (
    <section className="overflow-hidden max-w-[1600px] mx-auto">
      <div className="relative flex w-max animate-scroll">
        {scrollingLogos.map((logo, index) => (
          <div key={index} className="relative w-36 h-16 mx-8 flex-shrink-0">
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 120px, 150px"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          display: flex;
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
