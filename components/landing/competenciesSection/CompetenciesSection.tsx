"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedText from "@/components/ui/AnimatedText"

interface CompetencyCard {
  id: string
  title: string
  description: string
  image: string
}

const competencies: CompetencyCard[] = [
  {
    id: "1",
    title: "AI & Data Science",
    description:
      "Building intelligent, data-driven solutions that transform complex information into actionable insights and seamless user experiences.",
    image: "/assets/Competencies/compet1.svg",
  },
  {
    id: "2",
    title: "Frontend",
    description:
      "Crafting responsive, user-friendly interfaces that deliver seamless experiences across all devices.",
    image: "/assets/Competencies/compet2.svg",
  },
  {
    id: "3",
    title: "Backend",
    description:
      "Building robust and scalable server-side systems to power your applications securely and efficiently.",
    image: "/assets/Competencies/compet3.jpeg",
  },
  {
    id: "4",
    title: "UI UX",
    description:
      "Crafting intuitive, user-centered designs that elevate experiences, foster engagement, and bring ideas to life.",
    image: "/assets/Competencies/compet4.svg",
  },
  {
    id: "5",
    title: "Project Excellence",
    description:
      "Delivering flawless, data-driven products through rigorous testing and structured project management, from initial concept to successful completion.",
    image: "/assets/Competencies/compet5.svg",
  },
  {
    id: "6",
    title: "DevOps",
    description:
      "Streamlining development and operations for faster deployments, better collaboration, and continuous integration.",
    image: "/assets/Competencies/compet6.svg",
  },
]

export function CompetenciesSection() {
  return (
    <div className="max-w-[1600px] mx-auto px-4">
      <div className="text-center mb-12">
        <AnimatedText as="h2" className="text-4xl md:text-3xl font-bold" speed={0.02}>
          Our <span className="text-[#FF6600]">Competencies</span>
        </AnimatedText>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {competencies.map((competency, index) => (
          <CompetencyCardHover key={competency.id} competency={competency} custom={index} />
        ))}
      </div>
    </div>
  )
}

function CompetencyCardHover({
  competency,
  custom = 0,
}: {
  competency: CompetencyCard
  custom?: number
}) {
  const [hover, setHover] = useState(false)

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={custom}
      className="relative cursor-pointer flex flex-col bg-card rounded-3xl shadow-sm overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* NORMAL CARD */}
      <div
        className={`flex flex-col flex-1 
          transition-all duration-700 
          ${hover ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
        style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)" }}
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

      <div
        className={`
          absolute inset-0 bg-[#0F0E0E]/90 text-white rounded-3xl p-8 flex flex-col
          items-center justify-center
          transition-all duration-[750ms]
          ${hover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
        style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)" }}
      >
        <div
          className={`relative w-32 h-32 rounded-full overflow-hidden mb-4 pointer-events-none
            transition-all duration-700 
            ${hover ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          `}
          style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)" }}
        >
          <Image
            src={competency.image || "/placeholder.svg"}
            alt={competency.title}
            fill
            className="object-cover"
          />
        </div>

        <h3
          className={`text-xl font-bold mb-2 transition-all duration-700
            ${hover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
          `}
          style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)" }}
        >
          {competency.title}
        </h3>

        <p
          className={`text-sm text-gray-300 text-center transition-all duration-700
            ${hover ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-2"}
          `}
          style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)" }}
        >
          {competency.description}
        </p>
      </div>
    </motion.div>
  )
}
