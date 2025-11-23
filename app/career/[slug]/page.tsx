"use client"

import { usePathname, useRouter } from "next/navigation"
import { JOBS } from "@/components/careerPage/jobs"
import Application from "@/components/careerPage/application/Application"
import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedText from "@/components/ui/AnimatedText"

export default function JobDetailPage() {
  const router = useRouter()
  const pathname = usePathname()
  const slug = pathname.split("/").pop()

  const job = JOBS.find(
    (job) => job.title.toLowerCase().replace(/\s+/g, "-") === slug
  )

  if (!job) {
    return (
      <>
        <div className="w-full max-w-4xl mx-auto px-6 py-12 text-center">
          <h1 className="text-2xl font-bold text-red-600">Job not found</h1>
        </div>
        <Application />
      </>
    )
  }

  return (
    <div className="bg-[#FBFBFB] pt-30 pb-20">
      <div className="md:w-[94%] sm:w-[94%] w-[94%] mx-auto max-w-[1600px]">
        <motion.button
          onClick={() => router.push("/career")}
          className="flex items-center gap-2 text-sm font-sm text-[#282938] hover:underline mb-8 cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/assets/career/back.svg"
            alt="Back arrow"
            width={18}
            height={18}
          />
          Back to Jobs
        </motion.button>

        <AnimatedText
          as="h1"
          className="text-2xl md:text-2xl text-[#434343] font-semibold mb-6"
          speed={0.02}
        >
          {job.title}
        </AnimatedText>

        <motion.div
          className="space-y-1 text-sm text-muted-foreground mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              },
            },
          }}
        >
          {[
            { label: "Location", value: job.location },
            { label: "Job Type", value: job.type },
            { label: "Experience", value: job.experience },
            { label: "Positions", value: job.positions },
          ].map((item, index) => (
            <motion.p
              key={index}
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <span className="font-semibold">{item.label}:</span> {item.value}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          className="mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.2 },
            },
          }}
        >
          <AnimatedText
            as="h2"
            className="text-md font-semibold mb-1"
            speed={0.02}
            delay={0.1}
          >
            Job Summary:
          </AnimatedText>
          <motion.p
            className="text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {job.summary}
          </motion.p>
        </motion.div>

        <motion.div
          className="mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.1 },
            },
          }}
        >
          <AnimatedText
            as="h2"
            className="text-md font-semibold mb-1"
            speed={0.02}
            delay={0.1}
          >
            Required Skills and Qualifications:
          </AnimatedText>
          <motion.ul
            className="list-disc pl-6 space-y-1 text-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3,
                },
              },
            }}
          >
            {job.qualifications.map((q, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                {q}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.1 },
            },
          }}
        >
          <AnimatedText
            as="h2"
            className="text-md font-semibold mb-1"
            speed={0.02}
            delay={0.1}
          >
            Why Join Us?
          </AnimatedText>
          <motion.ul
            className="list-disc pl-6 space-y-1 text-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3,
                },
              },
            }}
          >
            {job.benefits.map((b, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                {b}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Application />
        </motion.div>
      </div>
    </div>
  )
}
