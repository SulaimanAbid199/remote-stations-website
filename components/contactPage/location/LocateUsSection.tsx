"use client"

export function LocateUsSection() {
  return (
    <div className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center">
      <div className="space-y-6">
        <h1 className="text-5xl lg:text-6xl font-bold text-foreground">Locate Us</h1>

        <address className="not-italic space-y-2">
          <p className="text-lg text-foreground leading-relaxed">
            Plot 33-40, Greens, Civic Center, Remote Station 2nd Floor, South Side, Gulberg Empire, Executive Block
            Gulberg, Islamabad, 44000
          </p>
        </address>

        <p className="text-base text-foreground/80 leading-relaxed max-w-md">
          If you have any questions, feel free to get in touch with us via email, phone number, the form below, or even
          on social media.
        </p>

        <div className="pt-6 space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Email</h3>
            <a href="mailto:contact@example.com" className="text-blue-600 hover:underline">
              contact@example.com
            </a>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">Phone</h3>
            <a href="tel:+923001234567" className="text-blue-600 hover:underline">
              +92 300 1234567
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
