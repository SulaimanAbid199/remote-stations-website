"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const generalFaqs = [
  "What is a Remote Station?",
  "How does your remote station service work?",
  "What are the benefits of using a remote station?",
  "How quickly can I set up a remote station?",
  "What are the costs involved?",
  "Do you offer a trial period?",
  "How do I get started?",
];

const helpFaqs = [
  "How do I communicate with my remote team effectively?",
  "What happens if I encounter issues with the remote team?",
  "What is your support process for resolving issues?",
  "How do I scale my team during an ongoing project?",
  "What happens if I need to replace a team member?",
];

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState<"general" | "help">("general");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = activeTab === "general" ? generalFaqs : helpFaqs;

  return (
    <section className="max-w-[1600px] mx-auto">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">
        Frequently Asked Questions
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => {
            setActiveTab("general");
            setOpenIndex(null);
          }}
          className={`cursor-pointer px-8 py-3 rounded-lg font-medium border transition ${
            activeTab === "general"
              ? "bg-[#FF6600] text-white border-[#FF6600]"
              : "text-[#FF6600] border-[#FF6600]"
          }`}
        >
          General
        </button>

        <button
          onClick={() => {
            setActiveTab("help");
            setOpenIndex(null);
          }}
          className={`cursor-pointer px-8 py-3 rounded-lg font-medium border transition ${
            activeTab === "help"
              ? "bg-[#FF6600] text-white border-[#FF6600]"
              : "text-[#FF6600] border-[#FF6600]"
          }`}
        >
          Help
        </button>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        
        {/* FAQ LIST */}
        <motion.div
          className="space-y-4"
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
          {faqs.map((question, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                className="border-b border-b-[#E5E5E5] py-5 cursor-pointer"
                onClick={() => toggleAccordion(index)}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
                }}
              >
                <div className="flex justify-between items-center">
                  <p
                    className={`text-lg font-medium ${
                      isOpen ? "text-[#FF6600]" : "text-black"
                    }`}
                  >
                    {question}
                  </p>

                  <span
                    className={`${isOpen ? "text-[#FF6600]" : "text-black"}`}
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "0.3s ease",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.p
                      className="mt-3 text-gray-600"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
        <div className="flex sm:justify-center md:justify-end">
            <Image
              src="/assets/faq/faq.svg"
              alt="FAQ Illustration"
              width={activeTab === "general" ? 550 : 450}
              height={activeTab === "general" ? 550 : 450}
            />
          </div>
        </div>
    </section>
  );
}
