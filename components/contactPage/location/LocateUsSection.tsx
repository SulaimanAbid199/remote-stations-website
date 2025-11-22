"use client"

import { motion } from "framer-motion"

export function LocateUsSection() {
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
    <motion.div
      className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="space-y-6" variants={itemVariants}>
        <motion.h1 className="text-2xl lg:text-3xl font-bold" variants={itemVariants}>
          Locate Us
        </motion.h1>

        <motion.address className="not-italic space-y-2" variants={itemVariants}>
          <p className="text-md text-[#767676] leading-relaxed">
            Plot 33-40, Greens, Civic Center, <br />
            Remote Station 2nd Floor, <br />
            South Side, Gulberg Empire, <br />
            Executive Block, Gulberg, Islamabad, 44000
          </p>
        </motion.address>

        <motion.p className="text-base text-foreground/80 leading-relaxed max-w-md" variants={itemVariants}>
          If you have any questions, feel free to get in touch with us via email, phone number, the form below, or even
          on social media.
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
