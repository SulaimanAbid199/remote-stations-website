import ContactForm from "./ContactForm"

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with us",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">Contact Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Image */}
          <div className="hidden lg:block">
            <img
              src="/assets/contact/contact.svg"
              alt="Person using phone"
              className="w-full h-full object-cover rounded-3xl shadow-lg"
            />
          </div>

          {/* Right side - Form */}
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
}
