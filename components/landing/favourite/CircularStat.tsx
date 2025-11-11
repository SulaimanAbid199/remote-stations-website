"use client"

interface CircularStatProps {
  percentage: number
  label: string
  color: string
  borderColor: string
}

export default function CircularStat({ percentage, label, color, borderColor }: CircularStatProps) {
  const strokeWidth = 14 
  const radius = 45 - strokeWidth / 2 
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-28 h-28">
        <svg
          className="w-full h-full transform -rotate-90"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className={`transition-all duration-500 ${color}`}
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
