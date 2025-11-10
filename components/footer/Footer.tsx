import Link from "next/link"
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react"
export default function Footer() {
  return (
     <footer className="flex flex-col">
      <div className="bg-[#1C180D] text-white px-8 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                R
              </div>
              <span className="text-xl font-bold">Remote</span>
            </div>
            <span className="text-xs text-gray-400 font-semibold tracking-wide">STATIONS</span>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Competancies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Why choose us?
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Meet Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
              <Link
                href="mailto:support@fusionkosherphone.com"
                className="text-gray-300 hover:text-white transition-colors break-all"
              >
                support@fusionkosherphone.com
              </Link>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
              <Link href="tel:+12125557890" className="text-gray-300 hover:text-white transition-colors">
                +1 (212) 555-7890
              </Link>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
              <p className="text-gray-300">123 Main Street, Brooklyn, NY 11219</p>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
              <div className="text-gray-300 text-sm space-y-1">
                <p>• Monday – Thursday: 10:00 am – 7:00 pm</p>
                <p>• Friday: 10:00 am – 3:00 pm</p>
                <p>• Saturday & Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-orange-500 text-white px-8 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Follow Us */}
          <div className="flex items-center gap-4">
            <span className="font-semibold">Follow Us</span>
            <div className="flex gap-3">
              <Link
                href="#"
                className="w-10 h-10 bg-white bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-sm">Privacy Policy © 2025 Remote Stations</p>
        </div>
      </div>
    </footer>
  );
}