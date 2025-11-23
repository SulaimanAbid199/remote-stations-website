"use client"

import { JobCard } from "./JobCard"
import { JOBS } from "./jobs"
import { motion } from "framer-motion"

export function CareerPage() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="mb-8">
        <p className="text-sm text-[#767676] mb-2">Join Us</p>
        <h1 className="text-3xl text-[#434343] font-bold">
          Available <span className="text-[#FF6600]">Jobs</span>
        </h1>
      </div>
      <div className="border-b border-gray-200 mb-8" />

      <motion.div
        className="space-y-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {JOBS.map((job, index) => (
          <JobCard key={job.id} job={job} custom={index} />
        ))}
      </motion.div>
    </div>
  )
}
