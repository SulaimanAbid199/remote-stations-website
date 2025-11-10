import Hero from "./hero/Hero";
import PartnersSection from "./partnersSection/PartnersSection";
import ChooseReason from "./createStation/CreateStation";
import ReasonsSection from "./reasonsSection/ReasonsSection";
import FavouriteSection from "./favourite/FavouriteSection";
import { CompetenciesSection } from "./competenciesSection/CompetenciesSection";
import TalentCategories from "./talentCategories/TalentCategories";

export default function LandingPage() {
  return (
  <>
 <Hero/>
 <PartnersSection/>
 <ChooseReason/>
 <ReasonsSection/>
 <FavouriteSection/>
 <CompetenciesSection/>
 <TalentCategories/>
  </>
  );
}
