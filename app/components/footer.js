"use client";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaMapMarkerAlt,
  FaClock,
  FaArrowUp,
} from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative bg-white border-t border-gray-200 pt-10">
      {/* Scroll to Top Button */}
      <motion.button
        className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </motion.button>

      {/* Main Footer Content */}
      <motion.div
        className="container-responsive py-12 md:py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-8">
              <div className="relative mb-6">
                <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">
                    <img
                      src="/logo.png"
                      alt="Rising Diamond"
                      className="h-15 w-15"
                    />
                  </span>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full opacity-10 blur-sm"></div>
              </div>
              <h2 className="font-bold text-xl text-gray-800 mb-2">
                Rising Diamond
              </h2>
              <p className="text-orange-500 text-sm font-medium mb-4">
                International Consultancy
              </p>
              <p className="text-sm text-gray-600 leading-relaxed max-w-sm mb-6">
                Your trusted partner for international education and career
                opportunities. We help students achieve their dreams with expert
                guidance and support.
              </p>
            </div>

            {/* Social Media */}
            <div className="flex justify-center lg:justify-start space-x-2">
              {[
                {
                  icon: FaFacebook,
                  href: "#",
                  label: "Facebook",
                  color: "hover:bg-blue-600",
                },
                {
                  icon: FaTwitter,
                  href: "#",
                  label: "Twitter",
                  color: "hover:bg-blue-400",
                },
                {
                  icon: FaInstagram,
                  href: "#",
                  label: "Instagram",
                  color: "hover:bg-pink-500",
                },
                {
                  icon: FaYoutube,
                  href: "#",
                  label: "YouTube",
                  color: "hover:bg-red-600",
                },
                {
                  icon: FaLinkedin,
                  href: "#",
                  label: "LinkedIn",
                  color: "hover:bg-blue-700",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={`bg-gray-100 ${social.color} text-gray-600 hover:text-white p-3 rounded-full transition-all duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg text-gray-800 mb-6 text-center">
              Quick Links
            </h3>
            <ul className="space-y-4 text-center">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/study-abroad", label: "Study Abroad" },
                { href: "/courses", label: "Courses" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 inline-block font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg text-gray-800 mb-6 text-center">
              Our Services
            </h3>
            <ul className="space-y-4 text-center">
              {[
                "Student Visa Processing",
                "University Applications",
                "IELTS/PTE Preparation",
                "Career Counseling",
                "Documentation Support",
                "Pre-departure Guidance",
              ].map((service) => (
                <li
                  key={service}
                  className="text-gray-600 text-sm flex items-center justify-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0"></div>
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="mb-4">
            <h3 className="font-bold text-lg text-gray-800 mb-6 text-center">
              Contact Info
            </h3>
            <div className="space-y-5 text-center">
              <div className="flex items-start justify-center gap-3">
                <div className="bg-blue-100 p-1.5 rounded-full flex-shrink-0">
                  <FaMapMarkerAlt className="text-blue-600 text-xs" />
                </div>
                <div>
                  <p className="text-sm text-gray-700 font-medium">
                    Avenida Almirante Reis N144, <br />
                    6D, Lisbon, Portugal
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center">
                <div className="bg-green-100 p-1.5 rounded-full flex-shrink-0">
                  <FaPhoneAlt className="text-green-600 text-xs" />
                </div>
                <div>
                  <p className="text-sm text-gray-700 font-medium">
                    +351 920 448 876
                  </p>
                  <p className="text-xs text-gray-500">Office</p>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center">
                <div className="bg-green-100 p-1.5 rounded-full flex-shrink-0">
                  <FaWhatsapp className="text-green-600 text-xs" />
                </div>
                <div>
                  <p className="text-sm text-gray-700 font-medium">
                    +351 920 448 876
                  </p>
                  <p className="text-xs text-gray-500">WhatsApp</p>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center">
                <div className="bg-orange-100 p-1.5 rounded-full flex-shrink-0">
                  <FaEnvelope className="text-orange-600 text-xs" />
                </div>
                <div>
                  <p className="text-sm text-gray-700 font-medium">
                    consultancy@risingdiamond.info
                  </p>
                  <p className="text-xs text-gray-500">General Inquiry</p>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="bg-purple-100 p-1.5 rounded-full flex-shrink-0">
                  <FaClock className="text-purple-600 text-xs" />
                </div>
                <div>
                  <p className="text-sm text-gray-700 font-medium">
                    Mon - Sat: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-xs text-gray-500">
                    Sat: 9:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-50 p-3">
        <div className="container-responsive py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-sm text-gray-600 mb-2">
                © {new Date().getFullYear()} Rising Diamond Consultancy. All
                rights reserved.
              </p>
              <p className="text-xs text-gray-500">
                Licensed Consultancy | Portugal
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-8 text-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
              >
                Disclaimer
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-orange-500 to-blue-500" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-100 to-blue-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute top-1/2 left-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full blur-2xl opacity-30" />
    </footer>
  );
}
