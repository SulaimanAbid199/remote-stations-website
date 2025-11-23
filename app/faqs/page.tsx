"use client";

import { motion } from "framer-motion";
import FAQSection from "@/components/landing/faqSection/FAQSection";

export default function FAQs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="bg-[#FBFBFB] pt-30 pb-30"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="md:w-[94%] sm:w-[94%] w-[94%] mx-auto"
        variants={itemVariants}
      >
        <FAQSection />
      </motion.div>
    </motion.div>
  );
}
