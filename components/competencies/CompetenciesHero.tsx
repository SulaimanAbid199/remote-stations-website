"use client"

import Image from "next/image"


export default function CompetenciesHero() {
    return (
        <section className="w-full px-4 py-12 md:py-16 lg:py-20">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 lg:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left Content */}
                        <div className="flex flex-col justify-center space-y-6">
                            <div className="space-y-4">
                                <p className="text-base md:text-lg leading-relaxed text-foreground">
                                    We build intelligent, data-driven solutions by fusing cutting-edge{" "}
                                    <span className="font-bold">AI & Data Science</span> with expert{" "}
                                    <span className="font-bold">UI/UX design</span>, creating seamless and responsive user experiences.
                                    Our engineering team crafts{" "}
                                    <span className="font-bold">robust, scalable Backend and Frontend systems</span>, ensuring reliable
                                    performance across all platforms. We guarantee product success and faster delivery through{" "}
                                    <span className="font-bold">Project Excellence</span> and a streamlined{" "}
                                    <span className="font-bold">DevOps</span> methodology, managing your project efficiently from concept
                                    to completion.
                                </p>
                            </div>


                            <div>

                                <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-full px-6 py-3 transition">
                                    Explore Services
                                </button>

                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative w-64 h-80 md:w-72 md:h-96 lg:w-80 lg:h-full rounded-lg overflow-hidden">
                                <Image
                                    src="/assets/Competencies/compet.svg"
                                    alt="Professional business consultant"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
