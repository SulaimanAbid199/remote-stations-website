import type React from "react"
interface ReasonCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export default function ReasonCard({ icon, title, description }: ReasonCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex justify-center mb-4">
        <div className="text-orange-500 text-4xl">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 text-center mb-3">{title}</h3>
      <p className="text-gray-600 text-center text-sm leading-relaxed">{description}</p>
    </div>
  )
}
