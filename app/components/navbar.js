"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaBars,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest("nav")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  // helper for styling
  const linkClass = (href) =>
    `relative pb-1 transition-all duration-300 font-medium ${
      pathname === href ? "text-yellow-300" : "hover:text-yellow-200"
    }`;

  const openWhatsApp = () => {
    const phoneNumber = "351920448876";
    const message = "Hello! I'm interested in your consultancy services. Can you help me with more information?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className={`w-full transition-all duration-300 ${isScrolled ? 'shadow-xl' : 'shadow-lg'}`}>
      {/* 🔶 Top bar - Enhanced for laptop */}
      <div className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 text-white text-sm hidden lg:block relative overflow-hidden p-3">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-1"></div>
        </div>
        
        <div className="container-responsive flex justify-between items-center py-3 relative z-10">
          <div className="flex space-x-8">
            <span className="flex items-center gap-3 hover:text-orange-100 transition-colors group">
              <div className="bg-white/20 p-1.5 rounded-full group-hover:bg-white/30 transition-colors">
                <FaPhoneAlt className="text-xs" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-orange-100">Call Us</span>
                <span className="font-medium">+351 920 448 876</span>
              </div>
            </span>
            <span className="flex items-center gap-3 hover:text-orange-100 transition-colors group">
              <div className="bg-white/20 p-1.5 rounded-full group-hover:bg-white/30 transition-colors">
                <HiMail className="text-xs" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-orange-100">Email Us</span>
                <span className="font-medium">consultancy@risingdiamond.info</span>
              </div>
            </span>
          </div>
          
          <div className="flex items-center space-x-6">
          <div className="flex space-x-3">
              <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-300 hover:scale-110" aria-label="Facebook">
                <FaFacebook className="text-sm" />
            </a>
              <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-300 hover:scale-110" aria-label="Twitter">
                <FaTwitter className="text-sm" />
            </a>
              <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-300 hover:scale-110" aria-label="Instagram">
                <FaInstagram className="text-sm" />
            </a>
              <a href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-300 hover:scale-110" aria-label="YouTube">
                <FaYoutube className="text-sm" />
            </a>
            </div>
            <div className="h-6 w-px bg-white/30"></div>
            <span className="text-xs text-orange-100">Mon - Sat: 9:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* 🔷 Main Navbar - Enhanced for laptop */}
      <nav className={`bg-white shadow-lg transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="container-responsive flex items-center justify-between">
          {/* Logo - Enhanced */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <div className={`${isScrolled ? 'h-12 w-12' : 'h-16 w-16'} bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-105 transition-all duration-300`}>
                <span className="text-white font-bold text-lg"><Image src="/logo.png" alt="Rising Diamond" width={60} height={60} className="h-15 w-15 object-contain" /></span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-xl text-gray-800 group-hover:text-blue-600 transition-colors">Rising Diamond</h1>
              <p className="text-sm text-gray-500">International Consultancy</p>
            </div>
          </Link>

          {/* Desktop Menu - Enhanced */}
          <ul className="hidden lg:flex space-x-1 font-medium">
            <li className="relative group">
              <Link 
                href="/" 
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  pathname === "/" 
                    ? "text-blue-600 bg-blue-50 font-semibold" 
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                Home
              </Link>
              <div className={`absolute left-0 right-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 transition-all duration-300 rounded-full
                ${
                  pathname === "/"
                    ? "opacity-100 scale-x-100"
                    : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                }`}
              ></div>
            </li>
            
            <li className="relative group">
              <Link 
                href="/about" 
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  pathname === "/about" 
                    ? "text-blue-600 bg-blue-50 font-semibold" 
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                About
              </Link>
              <div className={`absolute left-0 right-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 transition-all duration-300 rounded-full
                ${
                  pathname === "/about"
                    ? "opacity-100 scale-x-100"
                    : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                }`}
              ></div>
            </li>

            {/* Work Permit Dropdown */}
            <li className="relative group">
              <span className="px-4 py-2 rounded-lg transition-all duration-300 text-gray-700 hover:text-blue-600 hover:bg-gray-50 cursor-pointer inline-flex items-center align-middle leading-none gap-1">
                Work Permit
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <div className="absolute left-0 right-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 transition-all duration-300 rounded-full opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"></div>
              
              {/* First Level Dropdown - European Countries */}
              <div className="absolute left-0 top-full mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <div className="px-4 py-2 text-sm font-semibold text-gray-500 border-b border-gray-100">
                    European Countries
                  </div>
                  
                  {/* Germany */}
                  <div className="relative group/sub">
                    <Link 
                      href="/work-permit/germany" 
                      className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      <span>Germany</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                  
                  {/* France */}
                  <div className="relative group/sub">
                    <Link 
                      href="/work-permit/france" 
                      className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      <span>France</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                  
                  {/* Netherlands */}
                  <div className="relative group/sub">
                    <Link 
                      href="/work-permit/netherlands" 
                      className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      <span>Netherlands</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                  
                  {/* Sweden */}
                  <div className="relative group/sub">
                    <Link 
                      href="/work-permit/sweden" 
                      className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      <span>Sweden</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                  
                  {/* Denmark */}
                  <div className="relative group/sub">
                    <Link 
                      href="/work-permit/denmark" 
                      className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      <span>Denmark</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            
            <li className="relative group">
              <Link 
                href="/services" 
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  pathname === "/services" 
                    ? "text-blue-600 bg-blue-50 font-semibold" 
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                Services
              </Link>
              <div className={`absolute left-0 right-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 transition-all duration-300 rounded-full
                ${
                  pathname === "/services"
                    ? "opacity-100 scale-x-100"
                    : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                }`}
              ></div>
            </li>
          </ul>

          {/* WhatsApp Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={openWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <FaWhatsapp className="text-lg" />
              <span>WhatsApp</span>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-gray-50 border-t border-gray-200 px-4 py-4">
            <ul className="flex flex-col space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/work-permit", label: "Work Permit", submenu: [
                  { href: "/work-permit/germany", label: "Germany" },
                  { href: "/work-permit/france", label: "France" },
                  { href: "/work-permit/netherlands", label: "Netherlands" },
                  { href: "/work-permit/sweden", label: "Sweden" },
                  { href: "/work-permit/denmark", label: "Denmark" },
                ]},
                { href: "/courses", label: "Courses" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
                { href: "/news", label: "News" },
              ].map((link) => (
                <li key={link.href}>
                  {link.submenu ? (
                    <div>
                      <div className="block py-3 px-4 text-gray-700 font-medium">
                        {link.label}
                      </div>
                      <ul className="ml-4 space-y-1">
                        {link.submenu.map((subLink) => (
                          <li key={subLink.href}>
                            <Link
                              href={subLink.href}
                              className={`block py-2 px-4 rounded-lg transition-all duration-200 text-sm ${
                                pathname === subLink.href
                                  ? "text-blue-600 font-semibold bg-blue-50"
                                  : "text-gray-600 hover:text-blue-600 hover:bg-gray-100"
                              }`}
                              onClick={() => setIsOpen(false)}
                            >
                              {subLink.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                  <Link
                    href={link.href}
                      className={`block py-3 px-4 rounded-lg transition-all duration-200 ${
                      pathname === link.href
                          ? "text-blue-600 font-semibold bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                  )}
                </li>
              ))}
              {/* Mobile WhatsApp Button */}
              <li className="pt-2">
                <button 
                  onClick={() => {
                    openWhatsApp();
                    setIsOpen(false);
                  }}
                  className="bg-green-500 hover:bg-green-600 text-white w-full py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="text-lg" />
                  <span>WhatsApp Us</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
