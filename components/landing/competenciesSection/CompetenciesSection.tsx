"use client";

import { useState } from "react";
import Image from "next/image";

interface CompetencyCard {
  id: string;
  title: string;
  description: string;
  image: string;
}

const competencies: CompetencyCard[] = [
  {
    id: "1",
    title: "AI & Data Science",
    description:
      "Building intelligent, data-driven solutions that transform complex information into actionable insights and seamless user experiences.",
    image: "/assets/Competencies/compet11.jpeg",
  },
  {
    id: "2",
    title: "Frontend",
    description:
      "Crafting responsive, user-friendly interfaces that deliver seamless experiences across all devices.",
    image: "/assets/Competencies/compet11.jpeg",
  },
  {
    id: "3",
    title: "Backend",
    description:
      "Building robust and scalable server-side systems to power your applications securely and efficiently.",
    image: "/assets/Competencies/compet11.jpeg",
  },
  {
    id: "4",
    title: "UI UX",
    description:
      "Crafting intuitive, user-centered designs that elevate experiences, foster engagement, and bring ideas to life.",
    image: "/assets/Competencies/compet11.jpeg",
  },
  {
    id: "5",
    title: "Project Excellence",
    description:
      "Delivering flawless, data-driven products through rigorous testing and structured project management, from initial concept to successful completion.",
    image: "/assets/Competencies/compet11.jpeg",
  },
  {
    id: "6",
    title: "DevOps",
    description:
      "Streamlining development and operations for faster deployments, better collaboration, and continuous integration.",
    image: "/assets/Competencies/compet11.jpeg",
  },
];

export function CompetenciesSection() {
  return (
    <div className="max-w-[1600px] mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">
          Our <span className="text-[#FF6600]">Competencies</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {competencies.map((competency) => (
          <CompetencyCardHover key={competency.id} competency={competency} />
        ))}
      </div>
    </div>
  );
}

function CompetencyCardHover({ competency }: { competency: CompetencyCard }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative cursor-pointer flex flex-col bg-card rounded-3xl shadow-sm overflow-hidden transition-all duration-300"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* NORMAL CARD */}
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ${
          hover ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="relative h-64 bg-muted pointer-events-none">
          <Image
            src={competency.image || "/placeholder.svg"}
            alt={competency.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-8 flex-1 flex flex-col justify-center text-center pointer-events-none">
          <h3 className="text-lg md:text-xl font-semibold text-[#434343] mb-3">
            {competency.title}
          </h3>
          <p className="text-base md:text-lg text-[#767676] leading-relaxed">
            {competency.description}
          </p>
        </div>
      </div>

      {/* HOVER CARD (Center Smooth Animation) */}
      <div
        className={`absolute inset-0 bg-[#0F0E0E]/90 text-white rounded-3xl p-8 
          flex flex-col items-center justify-center
          transition-opacity transition-transform duration-500 ease-out
          ${hover ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-5 scale-95"}`}
      >
        <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 pointer-events-none">
          <Image
            src={competency.image || "/placeholder.svg"}
            alt={competency.title}
            fill
            className="object-cover"
          />
        </div>
        <h3 className="text-xl font-bold mb-2 pointer-events-none">{competency.title}</h3>
        <p className="text-sm text-gray-300 text-center pointer-events-none">{competency.description}</p>
      </div>
    </div>
  );
}
