import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer>
      <div className="bg-[#1C180D] text-white">
        <div className="grid grid-cols-1 md:grid-cols-4  py-16 gap-12 md:w-[94%] sm:w-[94%] w-[94%] mx-auto max-w-[1600px] mx-auto">
          <div className="flex flex-col">
            <Image
              src="/assets/logo/logo.svg"
              alt="logo"
              width={150}
              height={150}
              className="rounded-md"
            />
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/competencies"
                  className="text-sm hover:text-white transition-colors"
                >
                  Competancies
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className=" text-sm  hover:text-white transition-colors"
                >
                  Why choose us?
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4">Explore Links</h3>
            <ul className="space-y-3">
             
              <li>
                <Link
                  href="/team"
                  className=" text-sm  hover:text-white transition-colors"
                >
                  Meet Our Team
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-start gap-3">
              <Image
                src="/assets/footer/mail.svg"
                alt="logo"
                width={20}
                height={20}
                className="rounded-md"
              />
              <Link
                href="mailto:support@fusionkosherphone.com"
                className="hover:text-white transition-colors break-all text-sm "
              >
                support@fusionkosherphone.com
              </Link>
            </div>
            <div className="flex items-start gap-3">
              <Image
                src="/assets/footer/viber.svg"
                alt="logo"
                width={20}
                height={20}
                className="rounded-md"
              />

              <Link
                href="tel:+12125557890"
                className=" hover:text-white transition-colors text-sm "
              >
                +1 (212) 555-7890
              </Link>
            </div>
            <div className="flex items-start gap-3">
              <Image
                src="/assets/footer/location.svg"
                alt="logo"
                width={20}
                height={20}
                className="rounded-md"
              />

              <p className=" text-sm ">
                123 Main Street, Brooklyn, NY 11219
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Image
                src="/assets/footer/clock.svg"
                alt="logo"
                width={20}
                height={20}
                className="rounded-md"
              />

              <div className="text-sm space-y-1 text-sm ">
                <p>• Monday – Thursday: 10:00 am – 7:00 pm</p>
                <p>• Friday: 10:00 am – 3:00 pm</p>
                <p>• Saturday & Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FF6600] text-white py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:w-[94%] sm:w-[94%] w-[94%] mx-auto max-w-[1600px] mx-auto">
          <div className="flex items-center gap-4">
            <span className="text-sm">Follow Us</span>
            <div className="flex gap-3">
              <Link
                href="#"
                className="w-10 h-10 bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30 transition-all"
                aria-label="Facebook"
              >
                <Image
                  src="/assets/footer/facebook.svg"
                  alt="logo"
                  width={30}
                  height={30}
                  className="rounded-md"
                />

              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30 transition-all"
                aria-label="Instagram"
              >
                <Image
                  src="/assets/footer/instagram.svg"
                  alt="logo"
                  width={30}
                  height={30}
                  className="rounded-md"
                />

              </Link>
              <Link
                href="#"
                className="w-10 h-10  bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30 transition-all"
                aria-label="LinkedIn"
              >
                <Image
                  src="/assets/footer/linkedin.svg"
                  alt="logo"
                  width={30}
                  height={30}
                  className="rounded-md"
                />

              </Link>
            </div>
          </div>

          <p className="text-sm">Privacy Policy © 2025 Remote Stations</p>
        </div>
      </div>
    </footer>
  );
}
