"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function CompetenciesHero() {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.15 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }

    return (
        <div className="max-w-[1600px] mx-auto">
            <motion.div
                className="bg-white rounded-4xl shadow-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    <motion.div
                        className="flex flex-col justify-center p-8 md:p-12 lg:p-10 lg:col-span-8"
                        variants={itemVariants}
                    >
                        <div className="space-y-4">
                            <p className="md:text-md">
                                We build intelligent, data-driven solutions by fusing cutting-edge{" "}
                                <span className="font-semibold">AI & Data Science</span> with expert{" "}
                                <span className="font-semibold">UI/UX design</span>, creating seamless and responsive user experiences.
                                Our engineering team crafts{" "}
                                <span className="font-semibold">robust, scalable Backend and Frontend systems</span>, ensuring reliable
                                performance across all platforms. We guarantee product success and faster delivery through{" "}
                                <span className="font-semibold">Project Excellence</span> and a streamlined{" "}
                                <span className="font-semibold">DevOps</span> methodology, managing your project efficiently from concept
                                to completion.
                            </p>
                        </div>

                        <div>
                            <button className="bg-[#FF6600] hover:bg-[#FF6600] text-white text-sm font-semibold rounded-full px-6 py-3 transition mt-4 cursor-pointer">
                                Explore Services
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex justify-center lg:justify-end lg:col-span-4"
                        variants={itemVariants}
                    >
                        <div className="relative w-64 h-80 md:w-72 md:h-96 lg:w-96 lg:h-[400px] rounded-lg overflow-hidden">
                            <Image
                                src="/assets/Competencies/compet.svg"
                                alt="Professional business consultant"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}
