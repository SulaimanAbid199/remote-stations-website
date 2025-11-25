"use client"

import ContactForm from "./ContactForm"
import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedText from "@/components/ui/AnimatedText"

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with us",
}

export default function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.main
      className="max-w-[1600px] mx-auto rounded-4xl shadow-2xl p-8 md:p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatedText
        as="h1"
        className="text-2xl md:text-3xl font-bold text-center mb-2 text-[#2A2A2A]"
        speed={0.02}
      >
        Book a discovery call
      </AnimatedText>

      <AnimatedText
        as="p"
        className="mb-4 text-center"
        delay={0.3}
        speed={0.015}
      >
        We're passionate about your success. We're just a click away
      </AnimatedText>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        variants={containerVariants}
      >
        <motion.div
          className="lg:col-span-5 w-full relative h-[400px] lg:h-[710px] rounded-2xl overflow-hidden shadow-md"
          variants={itemVariants}
        >
          <Image
            src="/assets/career/apply1.svg"
            alt="Application illustration"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.div className="lg:col-span-7 w-full" variants={itemVariants}>
          <ContactForm />
        </motion.div>
      </motion.div>
    </motion.main>
  )
}
