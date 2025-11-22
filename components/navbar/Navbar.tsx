// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Menu, X } from "lucide-react";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();

//   const toggleMenu = () => setIsOpen(!isOpen);

//   const navItems = [
//     { name: "Company", href: "/" },
//     { name: "Competencies", href: "/competencies" },
//     { name: "Career", href: "/career" },
//     { name: "Contact Us", href: "/contact" },
//     { name: "Team", href: "/team" },
//   ];

//   return (
//     <header className="bg-black text-white shadow-md rounded-4xl overflow-hidden fixed top-4 left-1/2 -translate-x-1/2 md:w-[94%] sm:w-[94%] w-[94%] mx-auto z-50 max-w-[1600px] mx-auto">
//       <div className="mx-4 sm:mx-6 lg:mx-12">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex items-center gap-2">
//             <Image
//               src="/assets/logo/logo.svg"
//               alt="logo"
//               width={120}
//               height={120}
//               className="rounded-md"
//             />
//           </div>

//           <nav className="hidden md:flex space-x-8 text-sm font-medium">
//             {navItems.map((item) => {
//               const isActive = pathname === item.href;
//               return (
//                 <div key={item.name} className="relative flex items-center">
//                   {isActive && (
//                     <span className="absolute -left-3 w-2 h-2 bg-[#FF6600] rounded-full"></span>
//                   )}
//                   <Link
//                     href={item.href}
//                     className={`transition pl-3 ${
//                       isActive
//                         ? "text-[#FF6600]"
//                         : "text-white hover:text-[#FF6600]"
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 </div>
//               );
//             })}
//           </nav>
//           <button
//             onClick={toggleMenu}
//             className="md:hidden focus:outline-none"
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden bg-black border-t border-gray-700">
//           <nav className="flex flex-col space-y-3 py-4 px-6 text-sm">
//             {navItems.map((item) => {
//               const isActive = pathname === item.href;
//               return (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   onClick={() => setIsOpen(false)}
//                   className={`transition flex items-center gap-2 ${
//                     isActive
//                       ? "text-[#FF6600]"
//                       : "text-white hover:text-[#FF6600]"
//                   }`}
//                 >
//                   {isActive && (
//                     <span className="w-2 h-2 bg-[#FF6600] rounded-full"></span>
//                   )}
//                   {item.name}
//                 </Link>
//               );
//             })}
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }




// "use client";

// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [companyOpen, setCompanyOpen] = useState(false);
//   const pathname = usePathname();

//   // refs for robust outside-click detection
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const toggleRef = useRef<HTMLButtonElement | null>(null);

//   const toggleMenu = () => setIsOpen((p) => !p);

//   const navItems = [
//     { name: "Company", href: "/", dropdown: true },
//     { name: "Competencies", href: "/competencies" },
//     { name: "Career", href: "/career" },
//     { name: "Contact Us", href: "/contact" },
//     { name: "Team", href: "/team" },
//   ];

//   const companyDropdownItems = [
//     { name: "Why Choose Us", href: "/why-choose-us" },
//     { name: "Our Team", href: "/team" },
//     { name: "Our Competencies", href: "/competencies" },
//     { name: "FAQs", href: "/faqs" },
//   ];

//   // Close dropdown when clicking outside (robust)
//   useEffect(() => {
//     function handleDocClick(event: MouseEvent) {
//       const target = event.target as Node | null;

//       // If click is inside container (including links), do nothing
//       if (containerRef.current && containerRef.current.contains(target)) return;

//       // If click is on the toggle button specifically, do nothing
//       if (toggleRef.current && toggleRef.current.contains(target)) return;

//       // Otherwise close dropdown
//       setCompanyOpen(false);
//     }

//     document.addEventListener("click", handleDocClick);
//     return () => document.removeEventListener("click", handleDocClick);
//   }, []);

//   // optional: close mobile menu when route changes
//   useEffect(() => {
//     setIsOpen(false);
//     setCompanyOpen(false);
//   }, [pathname]);

//   return (
//     // <header className="bg-black text-white shadow-md rounded-4xl overflow-hidden fixed top-4 left-1/2 -translate-x-1/2 md:w-[94%] sm:w-[94%] w-[94%] mx-auto z-50 max-w-[1600px]">
//     <header className="bg-black text-white shadow-md rounded-4xl fixed top-4 left-1/2 -translate-x-1/2 md:w-[94%] sm:w-[94%] w-[94%] mx-auto z-50 max-w-[1600px]">
//       <div className="mx-4 sm:mx-6 lg:mx-12">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//            <Link href="/">
//           <div className="flex items-center gap-2">
//             <Image
//               src="/assets/logo/logo.svg"
//               alt="logo"
//               width={120}
//               height={120}
//               className="rounded-md"
//             />
//           </div>
//            </Link>

//           {/* Desktop nav */}
//           <nav className="hidden md:flex space-x-8 text-sm font-medium">
//             {navItems.map((item) => {
//               const isActive = pathname === item.href;

//               if (item.dropdown) {
//                 return (
//                   <div
//                     key={item.name}
//                     className="relative"
//                     ref={containerRef}
//                   >
//                     <button
//                       ref={toggleRef}
//                       type="button"
//                       aria-expanded={companyOpen}
//                       aria-controls="company-dropdown"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         setCompanyOpen((p) => !p);
//                       }}
//                       className={`flex items-center gap-1 cursor-pointer transition ${
//                         isActive ? "text-[#FF6600]" : "text-white hover:text-[#FF6600]"
//                       }`}
//                     >
//                       {item.name}
//                       <ChevronDown
//                         size={16}
//                         className={`transition ${companyOpen ? "rotate-180" : ""}`}
//                       />
//                     </button>

//                     {companyOpen && (
//                       <div
//                         id="company-dropdown"
//                         role="menu"
//                         className="absolute left-[-50px] top-7 bg-white rounded-lg shadow-lg p-4 space-y-3 w-45 z-50"
//                       >
//                         {companyDropdownItems.map((sub) => (
//                           <Link
//                             key={sub.name}
//                             href={sub.href}
//                             onClick={() => setCompanyOpen(false)}
//                             className="block text-black hover:text-[#FF6600] transition"
//                           >
//                             {sub.name}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 );
//               }

//               return (
//                 <div key={item.name} className="relative flex items-center">
//                   {isActive && (
//                     <span className="absolute -left-3 w-2 h-2 bg-[#FF6600] rounded-full"></span>
//                   )}
//                   <Link
//                     href={item.href}
//                     className={`transition pl-3 ${
//                       isActive ? "text-[#FF6600]" : "text-white hover:text-[#FF6600]"
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 </div>
//               );
//             })}
//           </nav>

//           {/* Mobile menu button */}
//           <button
//             onClick={toggleMenu}
//             className="md:hidden focus:outline-none"
//             aria-label="Toggle menu"
//             type="button"
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isOpen && (
//         <div className="md:hidden bg-black border-t border-gray-700">
//           <nav className="flex flex-col space-y-3 py-4 px-6 text-sm">
//             {/* Company dropdown mobile */}
//             <div>
//               <button
//                 type="button"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setCompanyOpen((p) => !p);
//                 }}
//                 className="flex items-center justify-between w-full text-white hover:text-[#FF6600] transition"
//               >
//                 Company
//                 <ChevronDown className={`transition ${companyOpen ? "rotate-180" : ""}`} />
//               </button>

//               {companyOpen && (
//                 <div className="ml-4 mt-2 flex flex-col space-y-2">
//                   {companyDropdownItems.map((sub) => (
//                     <Link
//                       key={sub.name}
//                       href={sub.href}
//                       onClick={() => {
//                         setIsOpen(false);
//                         setCompanyOpen(false);
//                       }}
//                       className="text-white hover:text-[#FF6600] transition"
//                     >
//                       {sub.name}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Other items */}
//             {navItems.slice(1).map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 onClick={() => setIsOpen(false)}
//                 className="text-white hover:text-[#FF6600] transition"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }



"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const pathname = usePathname();

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

  useEffect(() => {
    setIsMobileOpen(false);
    setIsCompanyOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.getElementById("mobile-menu");
      const mobileMenuButton = document.getElementById("mobile-menu-button");
      
      if (
        mobileMenu &&
        !mobileMenu.contains(event.target as Node) &&
        mobileMenuButton &&
        !mobileMenuButton.contains(event.target as Node)
      ) {
        setIsMobileOpen(false);
        setIsCompanyOpen(false);
      }
    };

    if (isMobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileOpen]);

  const handleMobileMenuToggle = () => {
    setIsMobileOpen(!isMobileOpen);
    if (isMobileOpen) {
      setIsCompanyOpen(false);
    }
  };

  const handleMobileDropdownToggle = () => {
    setIsCompanyOpen(!isCompanyOpen);
  };

  const handleLinkClick = () => {
    setIsMobileOpen(false);
    setIsCompanyOpen(false);
  };

  return (
    <header className="bg-black text-white shadow-md rounded-4xl fixed top-4 left-1/2 -translate-x-1/2 md:w-[94%] sm:w-[94%] w-[94%] mx-auto z-50 max-w-[1600px]">
      <div className="mx-4 sm:mx-6 lg:mx-12">
        <div className="flex justify-between items-center h-16">
          <Link href="/" onClick={handleLinkClick}>
            <Image
              src="/assets/logo/logo.svg"
              alt="Logo"
              width={120}
              height={120}
              className="cursor-pointer rounded-md"
            />
          </Link>

          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <div className="relative">
              <button
                onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                className={`flex items-center gap-1 cursor-pointer transition ${
                  pathname === "/" ? "text-[#FF6600]" : "text-white hover:text-[#FF6600]"
                }`}
              >
                Company
                <ChevronDown
                  size={16}
                  className={`transition ${isCompanyOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isCompanyOpen && (
                <div className="absolute left-[-50px] top-8 bg-white rounded-lg shadow-lg p-4 space-y-3 w-45 z-50">
                  {companyDropdownItems.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      onClick={() => setIsCompanyOpen(false)}
                      className={`block transition ${
                        pathname === sub.href
                          ? "text-[#FF6600]"
                          : "text-black hover:text-orange-500"
                      }`}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
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
          <button
            id="mobile-menu-button"
            type="button"
            onClick={handleMobileMenuToggle}
            className="md:hidden focus:outline-none"
          >
            {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden bg-black border-t border-gray-700 rounded-b-4xl"
        >
          <nav className="flex flex-col py-2 px-4 text-sm">
            <div className="border-b border-gray-700 pb-2">
              <button
                onClick={handleMobileDropdownToggle}
                className="flex items-center justify-between w-full text-white hover:text-[#FF6600] transition"
              >
                <span>Company</span>
                <ChevronDown
                  className={`transition ${isCompanyOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isCompanyOpen && (
                <div className="mt-2 flex flex-col space-y-2 bg-white rounded-lg p-1">
                  {companyDropdownItems.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      onClick={handleLinkClick}
                      className={`block transition px-2 rounded ${
                        pathname === sub.href
                          ? "text-[#FF6600]"
                          : "text-black hover:text-[#FF6600]"
                      }`}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleLinkClick}
                className={`transition py-2 border-b border-gray-700 ${
                  pathname === item.href
                    ? "text-[#FF6600]"
                    : "text-white hover:text-[#FF6600]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}