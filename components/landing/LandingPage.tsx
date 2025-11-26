import Hero from "./hero/Hero";
import PartnersSection from "./partnersSection/PartnersSection";
import ChooseReason from "./createStation/CreateStation";
import ReasonsSection from "./reasonsSection/ReasonsSection";
import FavouriteSection from "./favourite/FavouriteSection";
import { CompetenciesSection } from "./competenciesSection/CompetenciesSection";
import TalentCategories from "./talentCategories/TalentCategories";
import FAQSection from "./faqSection/FAQSection";

export default function LandingPage() {
  return (
    <>
      <div className="bg-[#FBFBFB] pt-22 pb-16">
        <div className="md:w-[94%] sm:w-[94%] w-[94%] mx-auto">
          <Hero />
        </div>
      </div>
      <div className="bg-[white] py-10 md:py-20">
        <div className="md:w-[94%] sm:w-[94%] w-[94%] mx-auto">
          <PartnersSection />
        </div>
      </div>
      <div id="why-choose-us" className="bg-[#FBFBFB] py-20">
        <div className="md:w-[94%] sm:w-[94%] w-[94%] mx-auto">
          <ReasonsSection />
        </div>
      </div>
      <div className="py-20">
        <div className="md:w-[94%] sm:w-[94%] w-[94%] mx-auto">
          <ChooseReason />
        </div>
      </div>
      <div className="bg-[#FBFBFB] py-10 md:py-20">
        <div className="md:w-[94%] sm:w-[94%] w-[94%] mx-auto">
          <FavouriteSection />
        </div>
      </div>
      <div className="bg-[#FBFBFB] pb-20">
        <div className="md:w-[94%] sm:w-[94%] w-[94%] mx-auto">
          <CompetenciesSection />
        </div>
      </div>
      <div className="bg-[#FBFBFB] pb-20">
        <div className="md:w-[94%] sm:w-[94%] w-[94%] mx-auto">
          <TalentCategories />
        </div>
      </div>
       <div className="bg-[white] py-20">
        <div className="md:w-[94%] sm:w-[94%] w-[94%] mx-auto">
          <FAQSection />
        </div>
      </div>   
    </>
  );
}
