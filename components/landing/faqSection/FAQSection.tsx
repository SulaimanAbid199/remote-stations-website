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

//       {/* Main Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
//         {/* Left FAQ Column */}
//         <div>
//           {faqs.map((question, index) => (
//             <div
//               key={index}
//               className="border-b border-b-[#E5E5E5] py-5 cursor-pointer"
//               onClick={() => toggleAccordion(index)}
//             >
//               <div className="flex justify-between items-center">
//                 <p className="text-lg font-medium">{question}</p>

//                 <span className="transition-transform duration-300">
//                   {openIndex === index ? (
                 
//                     <svg
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <polyline points="18 15 12 9 6 15" />
//                     </svg>
//                   ) : (
                  
//                     <svg
//                       width="20"
//                       height="20"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <polyline points="6 9 12 15 18 9" />
//                     </svg>
//                   )}
//                 </span>
//               </div>

//               {openIndex === index && (
//                 <p className="mt-3 text-gray-600">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                   do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>

//         <div className="flex sm:justify-center md:justify-end">
//           <Image
//             src="/assets/faq/faq.svg"
//             alt="FAQ Illustration"
//             width={450}
//             height={450}
//             className="rounded-lg object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import Image from "next/image";

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

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

        {/* FAQ LIST */}
        <div>
          {faqs.map((question, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-b-[#E5E5E5] py-5 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex justify-between items-center">

                  {/* Question Text */}
                  <p
                    className={`text-lg font-medium transition ${
                      isOpen ? "text-[#FF6600]" : "text-black"
                    }`}
                  >
                    {question}
                  </p>

                  {/* Arrow Icon with Orange Color When Open */}
                  <span
                    className={`transition-transform duration-300 ${
                      isOpen ? "text-[#FF6600]" : "text-black"
                    }`}
                  >
                    {isOpen ? (
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
                        <polyline points="18 15 12 9 6 15" />
                      </svg>
                    ) : (
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
                    )}
                  </span>
                </div>

                {/* Answer */}
                {isOpen && (
                  <p className="mt-3 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Side Image */}
        <div className="flex sm:justify-center md:justify-end">
          <Image
            src="/assets/faq/faq.svg"
            alt="FAQ Illustration"
            width={450}
            height={450}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

