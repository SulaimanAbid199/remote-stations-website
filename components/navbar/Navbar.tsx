"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const pathname = usePathname();
  const companyDropdownRef = useRef<HTMLDivElement>(null);
  const mobileCompanyDropdownRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "Competencies", href: "/competencies" },
    { name: "Career", href: "/career" },
    { name: "Contact Us", href: "/contact" },
  ];

  const companyDropdownItems = [
    { name: "Why Choose Us", href: "/why-choose-us" },
    { name: "Our Team", href: "/team" },
    { name: "Our Competencies", href: "/competencies" },
    { name: "FAQs", href: "/faqs" },
  ];

  const handleMobileMenuToggle = () => {
    setIsMobileOpen(!isMobileOpen);
    if (isMobileOpen) setIsCompanyOpen(false);
  };

  const handleLinkClick = () => {
    setIsMobileOpen(false);
    setIsCompanyOpen(false);
  };

  useEffect(() => {
    setIsMobileOpen(false);
    setIsCompanyOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (headerRef.current && headerRef.current.contains(target)) return;
      if (isMobileOpen) {
        setIsMobileOpen(false);
        setIsCompanyOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileOpen]);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      ref={headerRef}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`bg-black text-white shadow-md rounded-4xl fixed left-1/2 -translate-x-1/2 md:w-[94%] w-[94%] mx-auto z-50 max-w-[1600px] transition-all duration-300 ${
        scrolled
          ? "top-0 rounded-none md:w-[100%] w-[100%] bg-black/80 shadow-xl backdrop-blur-md"
          : "top-4"
      }`}
    >
      <div className="mx-4 sm:mx-6 lg:mx-12">
        <div className="flex justify-between items-center h-16">
          <Link href="/" onClick={handleLinkClick}>
            <Image
              src="/assets/logo/Logo2.svg"
              alt="Logo"
              width={160}
              height={160}
              className="cursor-pointer rounded-md"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <div className="relative" ref={companyDropdownRef}>
              <button
                onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                className={`flex items-center gap-1 transition ${
                  pathname === "/"
                    ? "text-[#FF6600]"
                    : "text-white hover:text-[#FF6600]"
                }`}
              >
                Company
                <ChevronDown
                  size={16}
                  className={`${isCompanyOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {isCompanyOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-[-50px] top-8 bg-white rounded-lg shadow-lg p-4 space-y-3 w-45 z-50"
                  >
                    {companyDropdownItems.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={handleLinkClick}
                        className={`block transition ${
                          pathname === sub.href
                            ? "text-[#FF6600]"
                            : "text-black hover:text-orange-500"
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition ${
                  pathname === item.href
                    ? "text-[#FF6600]"
                    : "text-white hover:text-[#FF6600]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-button"
            onClick={handleMobileMenuToggle}
            className="md:hidden focus:outline-none"
          >
            {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black border-t border-gray-700 rounded-b-4xl overflow-hidden"
          >
            <nav
              className="flex flex-col py-2 px-4 text-sm"
              ref={mobileCompanyDropdownRef}
            >
              <div className="border-b border-gray-700 pb-2">
                <button
                  onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                  className="flex items-center justify-between w-full text-white hover:text-[#FF6600]"
                >
                  Company
                  <ChevronDown
                    className={`${isCompanyOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {isCompanyOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="mt-2 flex flex-col space-y-2 bg-white rounded-lg p-1"
                    >
                      {companyDropdownItems.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={handleLinkClick}
                          className={`px-2 rounded transition ${
                            pathname === sub.href
                              ? "text-[#FF6600]"
                              : "text-black hover:text-[#FF6600]"
                          }`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={`py-2 border-b border-gray-700 transition ${
                    pathname === item.href
                      ? "text-[#FF6600]"
                      : "text-white hover:text-[#FF6600]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
