"use client";

import CircularStat from "./CircularStat"
import AnimatedText from "@/components/ui/AnimatedText"

export default function FavouriteSection() {
  return (
      <div className="max-w-[1600px] mx-auto">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-2 md:p-4 lg:p-6">
            <div className="flex flex-col justify-center ">
              <AnimatedText as="h1" className="text-3xl md:text-3xl font-bold leading-tight text-[#434343] mb-6" speed={0.02}>
                That's why we're list of <span className="text-[#FF6600]">favorites</span>.
              </AnimatedText>

              <p className="text-[#767676] text-md leading-relaxed mb-12">
                Most of the projects fails due to a lack of skills and domain knowledge. Choose our talent, and we're
                committed to providing experts with the right skills and domain knowledge, ensuring your project's
                success is guaranteed
              </p>
              <div className="grid grid-cols-3 gap-6 md:gap-8">
                <CircularStat
                  percentage={100}
                  label="Work Success"
                  color="text-[#0CAD5F]"
                  borderColor="border-[#0CAD5F]"
                />
                <CircularStat
                  percentage={80}
                  label="Skill Scoring"
                  color="text-[#FF6600]"
                  borderColor="border-[#FF6600]"
                />
                <CircularStat
                  percentage={60}
                  label="Domain Scoring"
                  color="text-[#FFCC00]"
                  borderColor="border-[#FFCC00]"
                />
              </div>
            </div>

            {/* Right Image Section */}
            <div className="flex items-center justify-center">
              <div className="relative ">
                <img
                  src="/assets/favourite/fvrt1.svg"
                  alt="Professional team member"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    
  )
}
