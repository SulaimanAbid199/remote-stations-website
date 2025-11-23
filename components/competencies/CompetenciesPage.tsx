// import CompetenciesHero from "./CompetenciesHero";
// import { CompetenciesSection } from "../landing/competenciesSection/CompetenciesSection";

// export default function CompetenciesPage() {
//   return (
//     <>
//       <div className="bg-[#FBFBFB] pt-20  md:pt-30">
//         <div className="md:w-[94%] sm:w-[94%] w-[94%] mx-auto">
//           <CompetenciesHero />
//           <div className="pt-20 pb-30">
//             <CompetenciesSection />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


"use client";

import { motion } from "framer-motion";
import CompetenciesHero from "./CompetenciesHero";
import { CompetenciesSection } from "../landing/competenciesSection/CompetenciesSection";

export default function CompetenciesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="bg-[#FBFBFB] pt-20 md:pt-30"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="md:w-[94%] sm:w-[94%] w-[94%] mx-auto">
        <motion.div variants={itemVariants}>
          <CompetenciesHero />
        </motion.div>
        <motion.div className="pt-20 pb-30" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <CompetenciesSection />
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  );
}
