// "use client";

// import { useState } from "react";
// import Image from "next/image";

// const generalFaqs = [
//   "What is a Remote Station?",
//   "How does your remote station service work?",
//   "What are the benefits of using a remote station?",
//   "How quickly can I set up a remote station?",
//   "What are the costs involved?",
//   "Do you offer a trial period?",
//   "How do I get started?",
// ];

// const helpFaqs = [
//   "How do I communicate with my remote team effectively?",
//   "What happens if I encounter issues with the remote team?",
//   "What is your support process for resolving issues?",
//   "How do I scale my team during an ongoing project?",
//   "What happens if I need to replace a team member?",
// ];

// export default function FAQSection() {
//   const [activeTab, setActiveTab] = useState<"general" | "help">("general");
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggleAccordion = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const faqs = activeTab === "general" ? generalFaqs : helpFaqs;

//   return (
//     <section className="max-w-[1600px] mx-auto">
//       <h2 className="text-center text-3xl md:text-4xl font-bold mb-8">
//         Frequently Asked Questions
//       </h2>

//       <div className="flex justify-center gap-4 mb-10">
//         <button
//           onClick={() => {
//             setActiveTab("general");
//             setOpenIndex(null);
//           }}
//           className={`px-8 py-3 rounded-lg font-medium border transition ${
//             activeTab === "general"
//               ? "bg-[#FF6600] text-white border-[#FF6600]"
//               : "text-[#FF6600] border-[#FF6600]"
//           }`}
//         >
//           General
//         </button>

//         <button
//           onClick={() => {
//             setActiveTab("help");
//             setOpenIndex(null);
//           }}
//           className={`px-8 py-3 rounded-lg font-medium border transition ${
//             activeTab === "help"
//               ? "bg-[#FF6600] text-white border-[#FF6600]"
//               : "text-[#FF6600] border-[#FF6600]"
//           }`}
//         >
//           Help
//         </button>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
//         <div>
//           {faqs.map((question, index) => {
//             const isOpen = openIndex === index;

//             return (
//               <div
//                 key={index}
//                 className="border-b border-b-[#E5E5E5] py-5 cursor-pointer"
//                 onClick={() => toggleAccordion(index)}
//               >
//                 <div className="flex justify-between items-center">
//                   <p
//                     className={`text-lg font-medium transition ${
//                       isOpen ? "text-[#FF6600]" : "text-black"
//                     }`}
//                   >
//                     {question}
//                   </p>
//                   <span
//                     className={`transition-transform duration-300 ${
//                       isOpen ? "text-[#FF6600]" : "text-black"
//                     }`}
//                   >
//                     {isOpen ? (
//                       <svg
//                         width="20"
//                         height="20"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       >
//                         <polyline points="18 15 12 9 6 15" />
//                       </svg>
//                     ) : (
//                       <svg
//                         width="20"
//                         height="20"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       >
//                         <polyline points="6 9 12 15 18 9" />
//                       </svg>
//                     )}
//                   </span>
//                 </div>
//                 {isOpen && (
//                   <p className="mt-3 text-gray-600">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                     Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                   </p>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//         <div className="flex sm:justify-center md:justify-end">
//           <Image
//             src="/assets/faq/faq.svg"
//             alt="FAQ Illustration"
//             width={450}
//             height={450}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const accordionVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <section className="max-w-[1600px] mx-auto">
      <motion.h2
        className="text-center text-3xl md:text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => {
            setActiveTab("general");
            setOpenIndex(null);
          }}
          className={`px-8 py-3 rounded-lg font-medium border transition ${
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
          className={`px-8 py-3 rounded-lg font-medium border transition ${
            activeTab === "help"
              ? "bg-[#FF6600] text-white border-[#FF6600]"
              : "text-[#FF6600] border-[#FF6600]"
          }`}
        >
          Help
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {faqs.map((question, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                className="border-b border-b-[#E5E5E5] py-5 cursor-pointer"
                onClick={() => toggleAccordion(index)}
                layout
                transition={{
                  layout: {
                    duration: 0.55,
                    ease: [0.25, 0.1, 0.25, 1], // smoothest cubic-bezier
                  },
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

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{
                      duration: 0.45,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className={`${isOpen ? "text-[#FF6600]" : "text-black"}`}
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
                  </motion.span>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0, y: -8 }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        y: -6,
                      }}
                      transition={{
                        duration: 0.55,
                        ease: [0.25, 0.1, 0.25, 1],
                        opacity: { delay: 0.2 }, // delayed fade for PREMIUM FEEL
                      }}
                      className="overflow-hidden"
                    >
                      <motion.p
                        className="mt-3 text-gray-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          delay: 0.3, // extra delay on text → super smooth
                          duration: 0.4,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="flex sm:justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/assets/faq/faq.svg"
            alt="FAQ Illustration"
            width={450}
            height={450}
          />
        </motion.div>
      </div>
    </section>
  );
}
