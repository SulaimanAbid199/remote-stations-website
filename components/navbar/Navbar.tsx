"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Company", href: "/" },
    { name: "Competencies", href: "/competencies" },
    { name: "Career", href: "/career" },
    { name: "Contact Us", href: "/contact" },
    { name: "Team", href: "/team" },
  ];

  return (
    <header className="bg-black text-white shadow-md rounded-4xl overflow-hidden fixed top-4 left-1/2 -translate-x-1/2 md:w-[94%] sm:w-[96%] w-[96%] mx-auto z-50">
      <div className="mx-4 sm:mx-6 lg:mx-12">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/logo/logo.svg"
              alt="logo"
              width={120}
              height={120}
              className="rounded-md"
            />
          </div>

          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <div key={item.name} className="relative flex items-center">
                  {isActive && (
                    <span className="absolute -left-3 w-2 h-2 bg-[#FF6600] rounded-full"></span>
                  )}
                  <Link
                    href={item.href}
                    className={`transition pl-3 ${
                      isActive
                        ? "text-[#FF6600]"
                        : "text-white hover:text-[#FF6600]"
                    }`}
                  >
                    {item.name}
                  </Link>
                </div>
              );
            })}
          </nav>
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">
          <nav className="flex flex-col space-y-3 py-4 px-6 text-sm">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`transition flex items-center gap-2 ${
                    isActive
                      ? "text-[#FF6600]"
                      : "text-white hover:text-[#FF6600]"
                  }`}
                >
                  {isActive && (
                    <span className="w-2 h-2 bg-[#FF6600] rounded-full"></span>
                  )}
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
