"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

interface JobCardProps {
  job: {
    id: number
    title: string
    type: string
    experience: string
    location: string
  }
  custom?: number
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
}

export function JobCard({ job, custom = 0 }: JobCardProps) {
  const router = useRouter()
  const slug = job.title.toLowerCase().replace(/\s+/g, "-")

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={custom}
      className="pb-8 border-b border-gray-200 last:border-b-0"
    >
      <p className="text-xs text-[#FF6600] mb-3">OPEN ROLES</p>

      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          <h2 className="text-xl text-[#1C180D] font-semibold mb-3">{job.title}</h2>

          <div className="flex flex-wrap items-center gap-2 text-xs text-[#767676]">
            <span>{job.type}</span>
            <span>•</span>
            <span>{job.experience}</span>
            <span>•</span>
            <span>{job.location}</span>
          </div>
        </div>

        <button
          onClick={() => router.push(`/career/${slug}`)}
          className="px-8 py-2 rounded-full border-2 border-[#FF6600] text-[#FF6600] font-semibold hover:bg-orange-50 transition-colors whitespace-nowrap cursor-pointer"
        >
          Apply Now
        </button>
      </div>
    </motion.div>
  )
}
