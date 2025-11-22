import CompetenciesHero from "./CompetenciesHero";
import { CompetenciesSection } from "../landing/competenciesSection/CompetenciesSection";

export default function CompetenciesPage() {
  return (
    <>
      <div className="bg-[#FBFBFB] pt-20  md:pt-30">
        <div className="md:w-[94%] sm:w-[94%] w-[94%] mx-auto">
          <CompetenciesHero />
          <div className="pt-20 pb-30">
            <CompetenciesSection />
          </div>
        </div>
      </div>
    </>
  );
}
