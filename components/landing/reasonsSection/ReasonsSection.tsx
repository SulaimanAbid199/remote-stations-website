"use client";
import { useState } from "react";
import Image from "next/image"
interface Reason {
  title: string;
  icon: string;
  description: string;
}


export default function ReasonsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="text-center max-w-[1600px] mx-auto">
      <h2 className="text-sm text-gray-500">Structure That Mirrors Your In‑House Culture</h2>
      <h1 className="text-3xl font-bold mt-1">
        10 <span className="text-[#FF6600]">Reasons</span> To Choose Remote Stations
      </h1>
      <div className="flex flex-wrap justify-center gap-8 mt-12">
        {reasons.map((item, index) => (
          <div
            key={index}
            className="relative group flex flex-col items-center w-70"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="w-40 h-40 rounded-full bg-white shadow-md flex items-center justify-center border-t-6 border-[#FF6600] relative">
              <Image src={item.icon} alt={item.title} width={60} height={60} className="object-contain" />
            </div>

            <div className="w-0 h-0 border-l-24 border-r-24 border-t-[24px] border-transparent border-t-[#FF6600] mt-4"></div>

            <p className="font-medium mt-2 text-center">{item.title}</p>

            {hovered === index && (
              <div className="absolute top-6 w-64 p-4 bg-gray-100 rounded-xl shadow-lg text-sm animate-fadeIn z-20">
                {item.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}


const reasons: Reason[] = [
  {
    title: "Work From Office",
    icon: "/assets/choose/chose1.svg",
    description:
      "Our talent works full-time from our offices to ensure focus, productivity, and consistent quality.",
  },
  {
    title: "Squad Lead Supervision",
    icon: "/assets/choose/chose2.svg",
    description: "Every hire operates under an experienced squad lead who reviews performance, deliverables, and quality benchmarks.",
  },
  {
    title: "Dedicated Talent",
    icon: "/assets/choose/chose3.svg",
    description: "Each professional is fully dedicated to one client, no multitasking, no distractions, just results.",
  },
  {
    title: "Client-Specific Training",
    icon: "/assets/choose/chose4.svg",
    description: "We conduct domain and stack-specific training so every expert aligns perfectly with your environment and goals.",
  },
  {
    title: "Trial Period",
    icon: "/assets/choose/chose5.svg",
    description: "Experience our talent risk-free, we don’t charge for the onboarding or trial period.",
  },
  {
    title: "Weekly Status Report",
    icon: "/assets/choose/chose6.svg",
    description: "Squad leads share structured weekly reports, keeping clients informed and projects transparent.",
  },
  {
    title: "Cross Domain Support",
    icon: "/assets/choose/chose7.svg",
    description: "Enjoy complimentary collaboration across domains, DevOps, QA, Backend, or AI whenever needed.",
  },
  {
    title: "Best Rates",
    icon: "/assets/choose/chose8.svg",
    description: "Premium quality at the most competitive rates, designed for long-term value, not inflated margins.",
  },
  {
    title: "Partnership Benefits",
    icon: "/assets/choose/chose9.svg",
    description: "We grow with our clients, unlocking team growth rewards, long-term discounts, and priority onboarding.",
  },
  {
    title: "No Shadowing Policy",
    icon: "/assets/choose/chose10.svg",
    description: "We don’t believe in shadowing models, our experts take direct ownership of their work from day one.",
  },
];
