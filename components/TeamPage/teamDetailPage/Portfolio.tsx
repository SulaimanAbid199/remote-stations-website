"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";

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
    <motion.div
      className="pb-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6 },
        },
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center border-b border-b-[#E5E5E5] pb-6">
        <AnimatedText
          as="h2"
          className="text-xl font-semibold"
          speed={0.02}
          delay={0.1}
        >
          {title}
        </AnimatedText>

        <motion.button
          onClick={() => setOpen(!open)}
          className="cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
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
        </motion.button>
      </div>

      {open && (
        <motion.div
          className="mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};

export function Portfolio({ member }: PortfolioProps) {
  return (
    <div className="bg-[#FBFBFB] pt-30 pb-20">
      <div className="md:w-[94%] sm:w-[94%] w-[94%] max-w-[1600px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-10">

        {/* LEFT — IMAGE + BUTTON */}
        <motion.div
          className="flex flex-col items-center md:items-start gap-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="h-60 md:h-60 rounded-3xl overflow-hidden shadow-xl border"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={member.cover}
              alt={member.name}
              // className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.button
            className="w-[230px] px-8 py-3 bg-[#FF6600] text-white rounded-full hover:bg-[#E65A00] transition cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Now
          </motion.button>
        </motion.div>

        {/* RIGHT SIDE CONTENT */}
        <div className="space-y-10">

          {/* NAME + ROLE */}
          <motion.div
            className="pb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <AnimatedText
              as="h1"
              className="text-3xl text-[#434343] font-bold"
              speed={0.02}
            >
              {member.name}
            </AnimatedText>
            <motion.p
              className="mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {member.position}
            </motion.p>
          </motion.div>

          {/* SKILLS */}
          <Section title="Skills">
            <motion.div
              className="flex flex-wrap gap-3 pt-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              {member.skills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  className="px-4 py-2 bg-gray-50 border rounded-full border-[#E5E5E5] text-sm text-[#434343]"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, y: 10 },
                    visible: { opacity: 1, scale: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </Section>

          {/* DOMAINS */}
          <Section title="Domains & Expertise">
            <motion.div
              className="flex flex-wrap gap-3 pt-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              {member.domains.map((domain, i) => (
                <motion.span
                  key={i}
                  className="px-4 py-2 border border-orange-300 rounded-full text-sm text-[#FF6600]"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, y: 10 },
                    visible: { opacity: 1, scale: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {domain}
                </motion.span>
              ))}
            </motion.div>
          </Section>

          {/* BIO */}
          <Section title="Bio">
            <motion.div
              className=""
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="leading-7 text-sm pt-2">{member.bio}</p>
            </motion.div>
          </Section>

          {/* EXPERIENCE */}
          <Section title="Experience">
            <div className="relative">

              {/* Vertical Dashed Line */}
              <motion.div
                className="absolute left-4 top-8 h-full border-l border-dashed"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />

              <motion.div
                className="flex flex-col gap-10 pl-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.15,
                      delayChildren: 0.3,
                    },
                  },
                }}
              >
                {member.experience.map((exp, i) => (
                  <motion.div
                    key={i}
                    className="relative"
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    {/* Dot for each item */}
                    <motion.div
                      className="absolute -left-[29px] top-8 w-3 h-3 bg-black border-2 rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + i * 0.15 }}
                    />

                    <div className="p-4">
                      <div className="md:flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <motion.img
                            src={exp.icon}
                            alt={exp.role}
                            className="w-10 h-10 object-contain"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0 }}
                            transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
                          />

                          <div>
                            <h3 className="font-bold text-lg">{exp.role}</h3>
                            <p className="text-slate-600">{exp.company}</p>
                          </div>
                        </div>

                        <motion.p
                          className="text-[#FF6600] font-medium whitespace-nowrap"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true, amount: 0 }}
                          transition={{ duration: 0.4, delay: 0.6 + i * 0.15 }}
                        >
                          {exp.duration}
                        </motion.p>
                      </div>

                      <motion.ul
                        className="mt-4 space-y-2 text-slate-600"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0 }}
                        variants={{
                          hidden: { opacity: 0 },
                          visible: {
                            opacity: 1,
                            transition: {
                              staggerChildren: 0.05,
                              delayChildren: 0.3 + i * 0.15,
                            },
                          },
                        }}
                      >
                        {exp.bullets.map((bullet, idx) => (
                          <motion.li
                            key={idx}
                            className="flex gap-2"
                            variants={{
                              hidden: { opacity: 0, x: -10 },
                              visible: { opacity: 1, x: 0 },
                            }}
                          >
                            • <span>{bullet}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>

                  </motion.div>
                ))}
              </motion.div>
            </div>
          </Section>


          {/* EDUCATION */}
          <Section title="Education">
            {member.education && (
              <motion.div
                className="flex items-start justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
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
              </motion.div>
            )}
          </Section>

        </div>
      </div>
      </div>
    </div>
  );
}
