"use client"

export function LocateUsSection() {
  return (
    <div className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center">
      <div className="space-y-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-[#434343]">Locate Us</h1>

        <address className="not-italic space-y-2">
          <p className="text-lg text-[#767676] text-foreground leading-relaxed">
            Plot 33-40, Greens, Civic Center, <br/> Remote Station 2nd Floor, <br/> South Side, Gulberg Empire, <br/>Executive Block
            Gulberg, Islamabad, 44000
          </p>
        </address>

        <p className="text-base text-foreground/80 leading-relaxed max-w-md">
          If you have any questions, feel free to get in touch with us via email, phone number, the form below, or even
          on social media.
        </p>
      </div>
    </div>
  )
}
