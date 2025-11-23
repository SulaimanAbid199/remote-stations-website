"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Wifi, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; 

interface Talent {
  name: string;
  role: string;
  projects: string;
  experience: string;
  rating: number;
  image: string;
}

const talents: Talent[] = [
  {
    name: "Rana Faizan Ahmad",
    role: "UI UX Designer",
    projects: "50+",
    experience: "10 Yr",
    rating: 5,
    image: "/assets/home/hero1.svg",
  },
  {
    name: "Umar Saleem",
    role: "Head of QA",
    projects: "30+",
    experience: "15 Yr",
    rating: 5,
    image: "/assets/home/hero2.svg",
  },
  {
    name: "Aqeel Javed",
    role: "Head of Frontend",
    projects: "35+",
    experience: "15 Yr",
    rating: 5,
    image: "/assets/home/hero3.svg",
  },
  {
    name: "Abdul Basit Javed",
    role: "Head of Devops",
    projects: "25+",
    experience: "25 Yr",
    rating: 5,
    image: "/assets/home/hero4.svg",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const talent = talents[current];
  const router = useRouter();

  const nextSlide = () => setCurrent((prev) => (prev + 1) % talents.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + talents.length) % talents.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % talents.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Framer Motion variants
  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="flex flex-col lg:flex-row gap-8 justify-center lg:items-center max-w-[1600px] mx-auto">
      <motion.div
        className="flex-1 lg:flex-[0_0_45%] sm:mb-10"
        initial="hidden"
        animate="visible"
        variants={slideUp}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
          <span className="text-[#FF6600]">HIRE</span> <br />
          <span className="text-black">DEDICATED TALENT</span>
        </h2>

        <p className="text-2xl font-semibold text-gray-800 mt-6">
          Not Just Freelancers
        </p>

        <p className="text-gray-600 leading-relaxed mt-4">
          Say goodbye to compromises. Experience commitment, quality, and
          reliability like never before. Boost your business with focus and
          quality. Lock your Remote Stations today!
        </p>

        <button className="mt-8 flex items-center gap-2 border border-[#FF6600] text-[#FF6600] font-semibold rounded-full px-6 py-3 hover:bg-[#FF6600] hover:text-white transition">
           <Wifi className="w-5 h-5 -rotate-30" />
          CREATE YOUR REMOTE STATION
        </button>
      </motion.div>

      <motion.div
        className="flex-1 lg:flex-[0_0_53%] relative flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={slideUp}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="lg:ml-30 rounded-2xl overflow-hidden relative">
          <div className="relative group">
            {talents.map((talentItem, index) => (
              <motion.div
                key={index}
                className={`${index === current ? "relative" : "absolute inset-0"
                  } transition-opacity duration-800 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === current ? 1 : 0 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src={talentItem.image}
                  alt={talentItem.name}
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain rounded-2xl"
                  priority={index === 0}
                />
              </motion.div>
            ))}


            <motion.button
              className="absolute bottom-20 left-1/2 -translate-x-1/2 
             bg-white/30 backdrop-blur-md text-white px-4 py-3 rounded-full 
             font-semibold text-md shadow-md flex items-center gap-2 
             opacity-0 group-hover:opacity-100 
             transition-all duration-500 z-20 cursor-pointer"
              onClick={() => router.push("/contact")}
              whileHover={{ scale: 1.05 }}
            >
              Book a Discovery Call
              <ArrowUpRight className="w-5 h-5" />
            </motion.button>

          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#FF6600] text-white rounded-full p-2 shadow hover:bg-orange-600 transition z-20"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#FF6600] text-white rounded-full p-2 shadow hover:bg-orange-600 transition z-20"
          >
            <ChevronRight />
          </button>
        </div>

        <motion.div
          className="absolute bottom-50 lg:bottom-30 left-[-4px] bg-[#FF6600] text-white px-6 py-3 rounded-lg font-semibold text-lg z-10 transition-opacity duration-700 ease-in-out"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {talent.name}
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 w-full gap-2 mt-4">
          {[
            { label: "Rating", value: "★ ★ ★ ★ ★", color: "#FF6600" },
            { label: "Role", value: talent.role },
            { label: "Projects", value: talent.projects },
            { label: "Experience", value: talent.experience },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-md p-4 rounded-lg flex-1 transition-opacity duration-700 ease-in-out flex flex-col justify-center items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
            >
              <p
                className={`font-semibold text-md ${item.color ? "text-[#FF6600]" : ""
                  }`}
              >
                {item.value}
              </p>
              <p className="text-gray-600 text-md">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
