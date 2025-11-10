"use client"

interface CircularStatProps {
  percentage: number
  label: string
  color: string
  borderColor: string
}

export default function CircularStat({ percentage, label, color, borderColor }: CircularStatProps) {
  const circumference = 2 * Math.PI * 45
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-28 h-28">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          {/* Background circle */}
          <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="6" />

          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className={`transition-all duration-500 ${color}`}
          />
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-2xl font-bold ${color}`}>{percentage}%</span>
        </div>
      </div>

      {/* Label */}
      <p className="text-center text-gray-700 font-medium text-sm">{label}</p>
    </div>
  )
}
