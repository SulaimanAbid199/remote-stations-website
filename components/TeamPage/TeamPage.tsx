// import { teamMembers } from "./teamDetailPage/teamMembers";
// import TeamCard from "./TeamCards";

// export default function TeamPage() {
//   return (
//     <main className="max-w-[1600px] mx-auto">
//         <h1 className="text-center text-3xl md:text-3xl font-bold leading-tight text-[#434343] mb-6 mt-10">
//           Our <span className="text-[#FF6600]">Team</span>
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {teamMembers.map((member) => (
//             <TeamCard key={member.id} member={member} />
//           ))}
//         </div>
//     </main>
//   );
// }


"use client"

import { motion } from "framer-motion"
import { teamMembers } from "./teamDetailPage/teamMembers"
import TeamCard from "./TeamCards"
import AnimatedText from "@/components/ui/AnimatedText"

export default function TeamPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.main
      className="max-w-[1600px] mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatedText
        as="h1"
        className="text-center text-3xl md:text-3xl font-bold leading-tight text-[#434343] mb-6 mt-10"
        speed={0.02}
      >
        Our <span className="text-[#FF6600]">Team</span>
      </AnimatedText>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {teamMembers.map((member) => (
          <motion.div key={member.id} variants={itemVariants}>
            <TeamCard member={member} />
          </motion.div>
        ))}
      </motion.div>
    </motion.main>
  )
}
