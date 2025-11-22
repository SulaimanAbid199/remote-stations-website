import CompetenciesHero from "./CompetenciesHero";
import { CompetenciesSection } from "../landing/competenciesSection/CompetenciesSection";

export default function CompetenciesPage() {
  return (
    <>
      <div className="bg-[#FBFBFB]  pt-22">
        <div className="md:w-[94%] sm:w-[94%] w-[94%] mx-auto">
          <CompetenciesHero />
          <div className="py-20">
            <CompetenciesSection />
          </div>
        </div>
      </div>
    </>
  );
}
