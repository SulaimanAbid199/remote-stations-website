// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import AnimatedText from "@/components/ui/AnimatedText";

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
//       <AnimatedText as="h2" className="text-center text-3xl md:text-4xl font-bold mb-8" speed={0.02}>
//         Frequently Asked Questions
//       </AnimatedText>

//       {/* Tabs */}
//       <div className="flex justify-center gap-4 mb-10">
//         <button
//           onClick={() => {
//             setActiveTab("general");
//             setOpenIndex(null);
//           }}
//           className={`cursor-pointer px-8 py-3 rounded-lg font-medium border transition ${
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
//           className={`cursor-pointer px-8 py-3 rounded-lg font-medium border transition ${
//             activeTab === "help"
//               ? "bg-[#FF6600] text-white border-[#FF6600]"
//               : "text-[#FF6600] border-[#FF6600]"
//           }`}
//         >
//           Help
//         </button>
//       </div>

//       {/* Grid Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        
//         {/* FAQ LIST */}
//         <motion.div
//           className="space-y-4"
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0 }}
//           variants={{
//             hidden: {},
//             show: {
//               transition: {
//                 staggerChildren: 0.12,
//               },
//             },
//           }}
//         >
//           {faqs.map((question, index) => {
//             const isOpen = openIndex === index;

//             return (
//               <motion.div
//                 key={index}
//                 className="border-b border-b-[#E5E5E5] py-5 cursor-pointer"
//                 onClick={() => toggleAccordion(index)}
//                 variants={{
//                   hidden: { opacity: 0, y: 20, scale: 0.95 },
//                   show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
//                 }}
//               >
//                 <div className="flex justify-between items-center">
//                   <p
//                     className={`text-lg font-medium ${
//                       isOpen ? "text-[#FF6600]" : "text-black"
//                     }`}
//                   >
//                     {question}
//                   </p>

//                   <span
//                     className={`${isOpen ? "text-[#FF6600]" : "text-black"}`}
//                     style={{
//                       transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
//                       transition: "0.3s ease",
//                     }}
//                   >
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
//                   </span>
//                 </div>

//                 <AnimatePresence>
//                   {isOpen && (
//                     <motion.p
//                       className="mt-3 text-gray-600"
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       exit={{ opacity: 0, height: 0 }}
//                       transition={{ duration: 0.4, ease: "easeOut" }}
//                     >
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                       do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua.
//                     </motion.p>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//         <div className="flex sm:justify-center md:justify-end">
//             <Image
//               src="/assets/faq/faq.svg"
//               alt="FAQ Illustration"
//               width={activeTab === "general" ? 550 : 450}
//               height={activeTab === "general" ? 550 : 450}
//             />
//           </div>
//         </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";

const generalFaqs = [
  {
    question: "What is a Remote Station?",
    answer:
      "A remote station is a dedicated, fully-managed team of professionals who work remotely but function as an extension of your in-house staff. Our remote stations ensure you get the expertise you need while maintaining control over your project.",
  },
  {
    question: "How does your remote station service work?",
    answer:
      "Our process is simple. We assess your project needs, match you with the right experts from our talent pool, and establish a dedicated remote team (station) that integrates smoothly into your workflow. Our team will manage the project, will take care of operations, communication, and efficiency.",
  },
  {
    question: "What are the benefits of using a remote station?",
    answer: 
`<strong>Cost-Effective:</strong> Avoid extra costs for office space, equipment, and long-term commitments. Benefit from no extra time charges, client-specific training, cross-domain support, and long-term partnership advantages.
<strong>Scalability:</strong> Quickly scale your team up or down based on project demands.
<strong>Global Expertise:</strong> Leverage a network of experienced leads from across the globe, each specializing in different domains.
<strong>Focus on Core Business:</strong> Let us manage the delivery and quality, so you can dedicate your attention to achieving your core business objectives.`
  },
  {
    question: "How quickly can I set up a remote station?",
    answer:
      "Setting up a remote station can take as little as 2-4 weeks, depending on the complexity of your requirements. We prioritize a quick and seamless setup process to get your team up and running as soon as possible.",
  },
  {
    question: "What are the costs involved?",
    answer:
      "Our pricing is flexible and based on the resources you need. We offer competitive rates tailored to your specific project requirements, ensuring cost-efficiency without compromising on quality.",
  },
  {
    question: "Do you offer a trial period?",
    answer:
      "We do offer trial periods for certain projects so you can evaluate the performance of your remote team before committing to long-term contracts. Contact us for more details.",
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started is easy. Just reach out to us through our contact form or email, and one of our specialists will guide you through the process of setting up your customized remote station.",
  },
];

const helpFaqs = [
  {
    question: "How do I communicate with my remote team effectively?",
    answer: 
`<strong>Regular Meetings:</strong> Schedule daily or weekly check-ins to discuss progress and address any concerns.
<strong>Communication Tools:</strong> Leverage tools like Slack, Zoom, or Microsoft Teams for instant messaging and video conferencing.
<strong>Clear Expectations:</strong> Define project goals, timelines, and individual responsibilities to ensure everyone is aligned.`
  },
  {
    question: "What happens if I encounter issues with the remote team?",
    answer: 
`<strong>Address Concerns Promptly:</strong> Communicate your concerns directly to the team or project manager to seek immediate resolution.
<strong>Document Issues:</strong> Keep a record of any problems, including dates and details, to facilitate constructive discussions.
<strong>Contact Support:</strong> If issues persist, reach out to our support team for assistance in resolving the matter.`
  },
  {
    question: "What is your support process for resolving issues?",
    answer: 
`<strong>Initial Contact:</strong> Reach out to our support team via email or phone with your issue.
<strong>Assessment:</strong> We will assess the situation and may request additional information.
<strong>Resolution:</strong> Our team will work diligently to resolve the issue and keep you informed throughout the process.`
  },
  {
    question: "How do I scale my team during an ongoing project?",
    answer: 
`<strong>Evaluate Needs:</strong> Determine the additional skills and resources required.
<strong>Request Additional Resources:</strong> Contact us to discuss scaling options, and we will provide suitable candidates to meet your needs.`
  },
  {
    question: "What happens if I need to replace a team member?",
    answer: 
`<strong>Notify Us:</strong> Inform our support team about the replacement requirement.
<strong>Candidate Selection:</strong> We will present qualified candidates for your consideration.
<strong>Seamless Transition:</strong> Once selected, the new team member will be onboarded to ensure a smooth transition.`
  },
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
      <AnimatedText
        as="h2"
        className="text-center text-3xl md:text-4xl font-bold mb-8"
        speed={0.02}
      >
        Frequently Asked Questions
      </AnimatedText>

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
          viewport={{ once: true, amount: 0 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                className="border-b border-b-[#E5E5E5] py-5 cursor-pointer"
                onClick={() => toggleAccordion(index)}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
              >
                <div className="flex justify-between items-center">
                  <p
                    className={`text-lg font-medium ${
                      isOpen ? "text-[#FF6600]" : "text-black"
                    }`}
                  >
                    {item.question}
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
                      className="mt-3 text-gray-600 whitespace-pre-line"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      dangerouslySetInnerHTML={{
                        __html: item.answer,
                      }}
                    />
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
