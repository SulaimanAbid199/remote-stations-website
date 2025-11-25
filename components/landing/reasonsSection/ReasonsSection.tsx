"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";

interface Reason {
  title: string;
  icon: string;
  description: string;
}

export default function ReasonsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="text-center max-w-[1600px] mx-auto">
      <AnimatedText as="h2" className="text-sm text-gray-500" speed={0.02}>
        Structure That Mirrors Your In-House Culture
      </AnimatedText>

      <AnimatedText as="h1" className="text-3xl font-bold mt-1" delay={0.3} speed={0.02}>
        10 <span className="text-[#FF6600]">Reasons</span> To Choose Remote Stations
      </AnimatedText>
      <motion.div
        className="flex flex-wrap justify-center gap-8 mt-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
      >
        {reasons.map((item, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center w-70"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.9 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <motion.div
              className="w-40 h-40 rounded-full bg-white shadow-md flex items-center justify-center border-t-6 border-[#FF6600]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={60}
                height={60}
                className="object-contain"
              />
            </motion.div>

            <div className="w-0 h-0 border-l-24 border-r-24 border-t-[24px] border-transparent border-t-[#FF6600] mt-4"></div>

            <p className="font-medium mt-2 text-center">{item.title}</p>

            <AnimatePresence>
              {hovered === index && (
                <motion.div
                  className="absolute top-6 left-1/2 -translate-x-1/2 w-80 z-20"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.8 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="relative bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden border-2 border-[#FF6600]/20">
                    {/* Animated accent bar */}
                    <motion.div
                      className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6600] via-orange-400 to-[#FF6600]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                    
                    {/* Content */}
                    <div className="p-5 relative">
                      {/* Decorative corner elements */}
                      <div className="absolute top-4 right-4 w-16 h-16 bg-[#FF6600]/5 rounded-full blur-xl"></div>
                      <div className="absolute bottom-4 left-4 w-12 h-12 bg-orange-200/30 rounded-full blur-lg"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-start gap-4">
                          {/* <motion.div
                            className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6600] to-orange-500 flex items-center justify-center shadow-lg"
                            initial={{ rotate: -180, scale: 0 }}
                            animate={{ rotate: 0, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
                          >
                            <div className="w-3 h-3 rounded-full bg-white"></div>
                          </motion.div> */}
                          <motion.p
                            className="text-gray-700 leading-relaxed text-sm font-medium flex-1"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                          >
                            {item.description}
                          </motion.p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Arrow pointing up */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className="w-6 h-6 bg-white border-l-2 border-t-2 border-[#FF6600]/20 rotate-45"></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
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
    description:
      "Every hire operates under an experienced squad lead who reviews performance, deliverables, and quality benchmarks.",
  },
  {
    title: "Dedicated Talent",
    icon: "/assets/choose/chose3.svg",
    description:
      "Each professional is fully dedicated to one client, no multitasking, no distractions, just results.",
  },
  {
    title: "Client-Specific Training",
    icon: "/assets/choose/chose4.svg",
    description:
      "We conduct domain and stack-specific training so every expert aligns perfectly with your environment and goals.",
  },
  {
    title: "Trial Period",
    icon: "/assets/choose/chose5.svg",
    description:
      "Experience our talent risk-free, we don’t charge for the onboarding or trial period.",
  },
  {
    title: "Weekly Status Report",
    icon: "/assets/choose/chose6.svg",
    description:
      "Squad leads share structured weekly reports, keeping clients informed and projects transparent.",
  },
  {
    title: "Cross Domain Support",
    icon: "/assets/choose/chose7.svg",
    description:
      "Enjoy complimentary collaboration across domains, DevOps, QA, Backend, or AI whenever needed.",
  },
  {
    title: "Best Rates",
    icon: "/assets/choose/chose8.svg",
    description:
      "Premium quality at the most competitive rates, designed for long-term value, not inflated margins.",
  },
  {
    title: "Partnership Benefits",
    icon: "/assets/choose/chose9.svg",
    description:
      "We grow with our clients, unlocking team growth rewards, long-term discounts, and priority onboarding.",
  },
  {
    title: "No Shadowing Policy",
    icon: "/assets/choose/chose10.svg",
    description:
      "We don’t believe in shadowing models, our experts take direct ownership of their work from day one.",
  },
];
