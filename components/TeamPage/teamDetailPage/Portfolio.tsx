"use client";

import { useState } from "react";

interface ExperienceItem {
  role: string;
  icon: string;
  company: string;
  duration: string;
  bullets: string[];
}

interface EducationItem {
  degree: string;
  university: string;
  date: string;
  icon?: string;
}

interface Member {
  name: string;
  position: string;
  image: string;
  cover: string;
  skills: string[];
  domains: string[];
  bio: string;
  experience: ExperienceItem[];
  education: EducationItem;
}

interface PortfolioProps {
  member: Member;
}

// COLLAPSIBLE SECTION

const Section = ({ title, children }: any) => {
  const [open, setOpen] = useState(true);

  return (


    <div className="pb-6">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-b-[#E5E5E5] pb-6">
        <h2 className="text-xl font-semibold">{title}</h2>

        <button
          onClick={() => setOpen(!open)}
          className="cursor-pointer"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          )}
        </button>
      </div>

      {open && <div className="mt-4">{children}</div>}
    </div>
  );
};

export function Portfolio({ member }: PortfolioProps) {
  return (
    <div className="bg-[#FBFBFB] pt-30 pb-20">
      <div className="md:w-[94%] sm:w-[94%] w-[94%] max-w-[1600px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-10">

        {/* LEFT — IMAGE + BUTTON */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="h-60 md:h-60 rounded-3xl overflow-hidden shadow-xl border">
            <img
              src={member.cover}
              alt={member.name}
              className=""
            />
          </div>

          <button className="w-[230px] px-8 py-3 bg-[#FF6600] text-white rounded-full hover:bg-[#E65A00] transition">
            Hire Now
          </button>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="space-y-10">

          {/* NAME + ROLE */}
          <div className=" pb-6">
            <h1 className="text-3xl text-[#434343] font-bold">{member.name}</h1>
            <p className=" mt-1">{member.position}</p>
          </div>

          {/* SKILLS */}
          <Section title="Skills">
            <div className="flex flex-wrap gap-3 pt-4">
              {member.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-gray-50 border rounded-full border-[#E5E5E5] text-sm text-[#434343]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Section>

          {/* DOMAINS */}
          <Section title="Domains & Expertise">
            <div className="flex flex-wrap gap-3 pt-4">
              {member.domains.map((domain, i) => (
                <span
                  key={i}
                  className="px-4 py-2 border border-orange-300 rounded-full text-sm text-[#FF6600]"
                >
                  {domain}
                </span>
              ))}
            </div>
          </Section>

          {/* BIO */}
          <Section title="Bio">
            <div className="">
              <p className="leading-7 text-sm pt-2">{member.bio}</p>
            </div>
          </Section>

          {/* EXPERIENCE */}
          <Section title="Experience">
            <div className="relative">

              {/* Vertical Dashed Line */}
              <div className="absolute left-4 top-8  h-full border-l-1 border-dashed"></div>

              <div className="flex flex-col gap-10 pl-10">
                {member.experience.map((exp, i) => (
                  <div key={i} className="relative">

                    {/* Dot for each item */}
                    <div className="absolute -left-[29px] top-8 w-3 h-3 bg-black border-2 rounded-full"></div>

                    <div className="p-4">
                      <div className="md:flex items-start justify-between ">
                        <div className="flex items-center gap-4">
                          <img
                            src={exp.icon}
                            alt={exp.role}
                            className="w-10 h-10 object-contain"
                          />

                          <div>
                            <h3 className="font-bold text-lg">{exp.role}</h3>
                            <p className="text-slate-600">{exp.company}</p>
                          </div>
                        </div>

                        <p className="text-[#FF6600] font-medium whitespace-nowrap">
                          {exp.duration}
                        </p>
                      </div>

                      <ul className="mt-4 space-y-2 text-slate-600">
                        {exp.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex gap-2">
                            • <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </Section>


          {/* EDUCATION */}
          <Section title="Education">
            {member.education && (

              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4 mt-4">

                  <div>
                    <h3 className="font-semibold text-md">
                      {member.education.degree}
                    </h3>
                    <p className="text-slate-600 mt-4">{member.education.university}</p>
                  </div>
                </div>

                <p className="text-[#FF6600] font-medium whitespace-nowrap mt-4">
                  {member.education.date}
                </p>
              </div>

            )}
          </Section>

        </div>
      </div>
      </div>
    </div>
  );
}
