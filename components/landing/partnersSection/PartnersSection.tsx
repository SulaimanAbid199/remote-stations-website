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
  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-12">
        {partners.map((logo, index) => (
          <div key={index} className="relative w-36 h-16">
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
    </section>
  );
}
