import ContactForm from "./ContactForm"
import Image from "next/image"

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with us",
}

export default function ContactSection() {
  return (
    <main className="max-w-7xl mx-auto bg-white rounded-4xl shadow-2xl mt-10 mb-32 p-8 md:p-12">

      <h1 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#2A2A2A]">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-5 w-full aspect-square relative rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/assets/career/apply.svg"
            alt="Application illustration"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="lg:col-span-7 w-full">
          <ContactForm />
        </div>
      </div>

    </main>
  )
}
