import type React from "react";
interface ReasonCardProps {
  icon: string; 
  title: string;
  description: string;
}
export default function ReasonCard({ icon, title, description }: ReasonCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex justify-left mb-4">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
      </div>
      <h3 className="text-sm font-semibold text-[#434343] text-left mb-3">{title}</h3>
      <p className="text-[#767676] text-left text-xs ">{description}</p>
    </div>
  );
}
