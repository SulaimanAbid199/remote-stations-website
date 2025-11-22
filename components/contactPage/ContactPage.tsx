import ContactSection from "./ContactForm/ContactSection";
import Location from "./location/Location";

export default function ContactPage() {
  return (
    <>
      <div className="bg-[#FBFBFB] pt-22">
        <div className="md:w-[94%] sm:w-[94%] w-[94%] mx-auto">
          <ContactSection />
          <div className="py-20">
            <Location />
          </div>
        </div>
      </div>
    </>
  );
}
