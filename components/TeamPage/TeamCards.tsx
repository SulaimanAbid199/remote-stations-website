"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { TeamMember } from "@/components/TeamPage/teamDetailPage/teamMembers";

interface TeamCardProps {
  member: TeamMember;
  custom?: number;
}

export default function TeamCard({ member, custom = 0 }: TeamCardProps) {
  const [hover, setHover] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={custom}
    >
      <Link href={`/team/${member.slug}`}>
        <div
          className="relative cursor-pointer"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {/* NORMAL CARD */}
          <div
            className={`flex flex-col items-center py-24 bg-white rounded-[84px] shadow-sm border border-gray-100
              transition-all duration-[700ms]
              ${hover ? "opacity-0 scale-95" : "opacity-100 scale-100"}
            `}
            style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)" }}
          >
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

          <div
            className={`
              absolute inset-0 bg-[#0F0E0E] text-white rounded-[84px] p-8
              transition-all duration-[750ms]
              ${hover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
            style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)" }}
          >
            <div className="flex items-center gap-4">
              <div
                className={`
                  w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 overflow-hidden 
                  flex items-center justify-center
                  transition-all duration-[700ms]
                  ${hover ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                `}
                style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)" }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3
                  className={`
                    text-xl font-bold transition-all duration-[700ms]
                    ${hover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
                  `}
                  style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)" }}
                >
                  {member.name}
                </h3>

                <p
                  className={`
                    text-sm text-gray-300 transition-all duration-[700ms] delay-75
                    ${hover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
                  `}
                  style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)" }}
                >
                  {member.position}
                </p>
              </div>
            </div>

            <div
              className={`
                grid grid-cols-2 mt-6 mb-4 transition-all duration-[750ms] delay-100
                ${hover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
              `}
              style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)" }}
            >
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

            <div
              className={`
                mb-4 transition-all duration-[750ms] delay-150
                ${hover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
              `}
            >
              <h4 className="font-semibold">Domains</h4>
              <p className="text-gray-300 mt-1 text-sm">{member.domains.join(", ")}</p>
            </div>

            <hr className="border-gray-700 my-4" />

            <div
              className={`
                transition-all duration-[750ms] delay-200
                ${hover ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
              `}
            >
              <h4 className="font-semibold">Tools & Technologies</h4>
              <p className="text-gray-300 mt-1 text-sm">
                Selenium, JUnit/TestNG, Cypress, Appium, Postman, SoapUI, Jmeter
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
