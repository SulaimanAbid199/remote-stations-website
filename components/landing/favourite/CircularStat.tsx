"use client"

import { motion } from "framer-motion"

interface CircularStatProps {
  percentage: number
  label: string
  color: string
  borderColor: string
}

export default function CircularStat({ percentage, label, color }: CircularStatProps) {
  const strokeWidth = 14
  const radius = 45 - strokeWidth / 2
  const circumference = 2 * Math.PI * radius

  const filledOffset = circumference - (percentage / 100) * circumference

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-28 h-28">

        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">

          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
          />

          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeLinecap="round"
            className={color}
            animate={{
              strokeDashoffset: [
                circumference,
                filledOffset,
                circumference
              ]
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-xl font-semibold ${color}`}>{percentage}%</span>
        </div>
      </div>

      <p className="text-center font-medium text-sm text-[#767676]">{label}</p>
    </div>
  )
}
