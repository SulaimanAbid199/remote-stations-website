"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { TeamMember } from "@/components/TeamPage/teamDetailPage/teamMembers";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  const [hover, setHover] = useState(false);

  return (
    <Link href={`/team/${member.slug}`}>
      <div
        className="relative cursor-pointer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* NORMAL CARD */}
        <div className={`flex flex-col items-center py-24 bg-white rounded-[84px] shadow-sm border border-gray-100 transition-all duration-300 ${hover ? "opacity-0" : "opacity-100"}`}>
          <div className="mb-6">
            <div className="relative w-48 h-48 rounded-full overflow-hidden bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center">
              <Image
                src={member.image}
                alt={member.name}
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="text-center mb-4">
            <h3 className="text-lg font-bold text-[#434343]">{member.name}</h3>
            <p className="text-sm text-[#767676]">{member.position}</p>
          </div>
        </div>

        {/* HOVER CARD (Exact same as screenshot) */}
        <div
          className={`absolute inset-0 bg-[#0F0E0E] text-white rounded-[84px] p-8 transition-all duration-300 ${hover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
        >
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 overflow-hidden flex items-center justify-center">
              <Image
                src={member.image}
                alt={member.name}
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-sm text-gray-300">{member.position}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 mt-6 mb-4">
            <div>
              <h4 className="font-semibold">Experience</h4>
              <p className="text-gray-300 mt-1">15+ Years</p>
            </div>
            <div>
              <h4 className="font-semibold">Projects</h4>
              <p className="text-gray-300 mt-1">35+</p>
            </div>
          </div>

          <hr className="border-gray-700 my-4" />

          <div className="mb-4">
            <h4 className="font-semibold">Domains</h4>
            <p className="text-gray-300 mt-1 text-sm">
              {member.domains.join(", ")}
            </p>
          </div>

          <hr className="border-gray-700 my-4" />

          <div>
            <h4 className="font-semibold">Tools & Technologies</h4>
            <p className="text-gray-300 mt-1 text-sm">
              Selenium, JUnit/TestNG, Cypress, Appium, Postman, SoapUI, Jmeter
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
