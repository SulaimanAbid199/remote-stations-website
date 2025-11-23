"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Tell Your Requirements",
    content:
      "Explain your goals and technical needs so we can design your perfect remote station setup.",
    image: "/assets/create/create.svg",
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
    title: "Station Locked. Guaranteed",
    content:
      "Once finalized, we’ll lock your station setup and ensure everything is fully optimized and ready to go.",
    image: "/assets/create/create.svg",
  },
];

export default function CreateStation() {
  const [activeStep, setActiveStep] = useState<number>(2);
  const router = useRouter();

  return (
    <section className="max-w-[1600px] mx-auto">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#434343] mb-2">
          Create Station
        </h2>
        <p className="text-[#767676] text-sm mb-10">
          Save your time, efforts and cost. Build your Remote Station in 3 simple steps.
        </p>
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="space-y-12">
            {steps.map((step) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: step.id * 0.15 }}
                viewport={{ once: true }}
              >
                <div
                  onClick={() =>
                    setActiveStep(activeStep === step.id ? 0 : step.id)
                  }
                  className="flex justify-between items-center cursor-pointer border-b border-gray-200 pb-8"
                >
                  <h3
                    className={`text-lg md:text-xl ${activeStep === step.id
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
              </motion.div>
            ))}
          </div>
        </motion.div>
        {activeStep !== 0 && (
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-[42px] p-4 md:p-0 flex flex-col md:flex-row items-center gap-6 shadow-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden flex-shrink-0 w-full md:w-1/2"
            >
              <Image
                src={steps[activeStep - 1].image}
                alt={steps[activeStep - 1].title}
                width={500}
                height={400}
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="md:w-1/2 space-y-4"
            >
              <p className="text-gray-600 text-base leading-relaxed">
                {steps[activeStep - 1].content}
              </p>

              <button
                onClick={() => router.push("/contact")}
                className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-full px-6 py-3 transition cursor-pointer"
              >
                Book a Discovery Call
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
