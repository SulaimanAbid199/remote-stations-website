"use client";

import { useState } from "react";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Tell Your Requirements",
    content:
      "Explain your goals and technical needs so we can design your perfect remote station setup.",
      image: "/assets/create/create.svg"
  },
  {
    id: 2,
    title: "Work With Hand",
    content:
      "Share your project details with one of our industry experts. A dedicated professional from our team will work with you to understand your goals, technical needs, and team dynamics.",
    image: "/assets/create/create.svg", 
  },
  {
    id: 3,
    title: "Station Locked. Guranteed",
    content:
      "Once finalized, we’ll lock your station setup and ensure everything is fully optimized and ready to go.",
        image: "/assets/create/create.svg"
  },
];

export default function CreateStation() {
  const [activeStep, setActiveStep] = useState<number>(2);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#434343] mb-2">
          Create Station
        </h2>
        <p className="text-[#767676] text-sm mb-10">
          Save your time, efforts and cost. Build your Remote Station in 3 simple steps.
        </p>
        </div>
      {/* LEFT SIDE */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
      <div>
        <div className="space-y-12">
          {steps.map((step) => (
            <div key={step.id}>
              <div
                onClick={() =>
                  setActiveStep(activeStep === step.id ? 0 : step.id)
                }
                className="flex justify-between items-center cursor-pointer border-b border-gray-200 pb-8"
              >
                <h3
                  className={`text-lg md:text-xl ${
                    activeStep === step.id
                      ? "text-[#434343] font-medium"
                      : "text-[#ACACAC]"
                  }`}
                >
                  {step.title}
                </h3>
                <div className="flex items-center gap-8 text-gray-400">
                  <span className="text-sm">{`0${step.id}`}</span>
                  <span className="text-lg">
                    {activeStep === step.id ? "−" : "+"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeStep !== 0 && (
        <div className="bg-gray-50 rounded-4xl  flex flex-col md:flex-row items-center gap-6 shadow-sm transition-all duration-300">
          <div className="rounded-2xl overflow-hidden flex-shrink-0 w-full md:w-1/2">
            <Image
              src={steps[activeStep - 1].image || "/assets/default.jpg"}
              alt={steps[activeStep - 1].title}
              width={500}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <p className="text-gray-600 text-base leading-relaxed">
              {steps[activeStep - 1].content}
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-full px-6 py-3 transition">
              Read More
            </button>
          </div>
        </div>
      )}

      </div>
    </section>
  );
}
