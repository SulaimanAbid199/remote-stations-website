
"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Wifi } from "lucide-react";
import Image from "next/image";

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

  const nextSlide = () => setCurrent((prev) => (prev + 1) % talents.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + talents.length) % talents.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % talents.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col lg:flex-row py-10 gap-8 lg:gap-0">
      <div className="flex-1 lg:flex-[0_0_45%]">
        <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
          <span className="text-orange-500">HIRE</span> <br />
          <span className="text-black">DEDICATED TALENT</span>
        </h2>

        <p className="text-2xl font-semibold text-gray-800 mt-6">
          Not Just Freelancers
        </p>

        <p className="text-gray-600 leading-relaxed max-w-lg mt-4">
          Say goodbye to compromises. Experience commitment, quality, and
          reliability like never before. Boost your business with focus and
          quality. Lock your Remote Stations today!
        </p>

        <button className="mt-8 flex items-center gap-2 border border-orange-500 text-orange-500 font-semibold rounded-full px-6 py-3 hover:bg-orange-500 hover:text-white transition">
          <Wifi className="w-5 h-5" />
          CREATE YOUR REMOTE STATION
        </button>
      </div>

      <div className="flex-1 lg:flex-[0_0_53%] relative flex flex-col items-center">
        <div className="lg:ml-30 rounded-2xl overflow-hidden relative">
          <div className="relative">
            {talents.map((talent, index) => (
              <div
                key={index}
                className={`${
                  index === current ? "relative" : "absolute inset-0"
                } transition-opacity duration-800 ease-in-out ${
                  index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={talent.image}
                  alt={talent.name}
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain rounded-2xl"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-orange-500 text-white rounded-full p-2 shadow hover:bg-orange-600 transition z-20"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-500 text-white rounded-full p-2 shadow hover:bg-orange-600 transition z-20"
          >
            <ChevronRight />
          </button>
        </div>

        <div className="absolute bottom-50 lg:bottom-30 left-[-4px] bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold text-lg z-10 transition-opacity duration-700 ease-in-out">
          {talent.name}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 w-full gap-2">
          <div className="bg-white shadow-md p-4 rounded-lg flex-1 transition-opacity duration-700 ease-in-out flex flex-col justify-center items-start">
            <p className="text-orange-500 text-xl mb-1">★★★★★</p>
            <p className="text-gray-600 text-md">Rating</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4 flex-1 transition-opacity duration-700 ease-in-out flex flex-col justify-center items-start">
            <p className="font-semibold text-md">{talent.role}</p>
            <p className="text-gray-600 text-md">Role</p>
          </div>

          <div className="bg-white shadow-md p-4 rounded-lg flex-1 transition-opacity duration-700 ease-in-out flex flex-col justify-center items-start">
            <p className="font-semibold">{talent.projects}</p>
            <p className="text-gray-600 text-md">Projects</p>
          </div>

          <div className="bg-white shadow-md p-4 rounded-lg flex-1 transition-opacity duration-700 ease-in-out flex flex-col justify-center items-start">
            <p className="font-semibold">{talent.experience}</p>
            <p className="text-gray-600 text-md">Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
