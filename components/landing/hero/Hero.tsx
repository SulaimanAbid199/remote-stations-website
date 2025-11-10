"use client";

import { useState } from "react";
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
    name: "Aqeel Javed",
    role: "Head of Frontend",
    projects: "35+ Projects",
    experience: "15 Yr Experience",
    rating: 5,
    image: "/assets/home/hero1.svg", 
  },
  {
    name: "Aqeel Javed",
    role: "Head of Frontend",
    projects: "35+ Projects",
    experience: "15 Yr Experience",
    rating: 5,
    image: "/assets/home/hero2.svg", 
  },
  {
    name: "Aqeel Javed",
    role: "Head of Frontend",
    projects: "35+ Projects",
    experience: "15 Yr Experience",
    rating: 5,
    image: "/assets/home/hero3.svg", 
  },
  {
    name: "Aqeel Javed",
    role: "Head of Frontend",
    projects: "35+ Projects",
    experience: "15 Yr Experience",
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

  return (
    <section className="flex flex-col lg:flex-row items-start justify-between px-6 lg:px-20 py-16 bg-white relative">
      {/* Left Section */}
      <div className="max-w-lg">
        <h2 className="text-5xl font-bold leading-tight">
          <span className="text-orange-500">HIRE</span>{" "}
          <br/>
          <span className="text-black">DEDICATED TALENT</span>
        </h2>

        <p className="text-2xl font-semibold text-gray-800 mt-6">
          Not Just Freelancers
        </p>

        <p className="text-gray-500 mt-3 text-base leading-relaxed">
          Say goodbye to compromises. Experience commitment, quality, and
          reliability like never before. Boost your business with focus and
          quality. Lock your Remote Stations today!
        </p>

        <button className="mt-8 flex items-center gap-2 border border-orange-500 text-orange-500 font-semibold rounded-full px-6 py-3 hover:bg-orange-500 hover:text-white transition">
          <Wifi className="w-5 h-5" />
          CREATE YOUR REMOTE STATION
        </button>
      </div>

      {/* Right Section */}
      <div className="relative flex flex-col items-center mt-12 lg:mt-0">
        <div className="absolute -z-10 w-96 h-96 rounded-full bg-gray-100 blur-3xl"></div>

        <div className="relative">
          <Image
            src={talent.image}
            alt={talent.name}
            width={400}
            height={400}
            className="rounded-2xl object-cover"
          />

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-orange-500 text-white rounded-full p-2"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-500 text-white rounded-full p-2"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Info Cards */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <div className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold text-lg">
            {talent.name}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-4 w-full">
            <div className="bg-white shadow-md p-4 rounded-lg w-40 text-center">
              <p className="text-orange-500 text-xl mb-1">★★★★★</p>
              <p className="text-gray-600 text-sm">Rating</p>
            </div>

            <div className="bg-white shadow-md p-4 rounded-lg w-40 text-center">
              <p className="font-semibold">{talent.role}</p>
              <p className="text-gray-600 text-sm">Role</p>
            </div>

            <div className="bg-white shadow-md p-4 rounded-lg w-40 text-center">
              <p className="font-semibold">{talent.projects}</p>
              <p className="text-gray-600 text-sm">Projects</p>
            </div>

            <div className="bg-white shadow-md p-4 rounded-lg w-40 text-center">
              <p className="font-semibold">{talent.experience}</p>
              <p className="text-gray-600 text-sm">Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
