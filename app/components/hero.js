"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight, FaCheckCircle, FaWhatsapp } from "react-icons/fa";

export default function HeroSection() {
  const openWhatsApp = () => {
    const phoneNumber = "971529426504";
    const message = "Hello! I'm interested in your consultancy services. Can you help me with more information?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Optimized */}
      <div className="absolute inset-0">
        <Image 
          src="/buildings.jpg" 
          alt="Background" 
          fill 
          priority
          sizes="100vw"
          className="object-cover"
          quality={85}
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-orange-600/70" />
      
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-400/20 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-responsive">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Side - Main Content */}
          <motion.div 
            className="text-white space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/10 md:bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <FaCheckCircle className="text-green-400" />
              Trusted by people globally
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-responsive-xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Supreme Direction
              <span className="block text-orange-400">World Wide Service</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-lg md:text-xl text-blue-100 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              Your gateway to job opportunities in Europe and career opportunities. 
              We provide comprehensive consultancy services to help you achieve your dreams.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <button 
                onClick={openWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl hover:scale-105"
              >
                <FaWhatsapp className="text-lg" />
                <span>WhatsApp Us</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="/about"><button className="w-full cursor-pointer text-white border-white border-1 p-2 rounded-full hover:bg-blue-700 hover:text-white-800 hover:border-blue-700">
                Learn More
              </button></a>
            </motion.div>

            {/* Flags Section - Optimized */}
            <motion.div 
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-sm text-blue-200 mb-4">We serve people worldwide:</p>
              <div className="flex flex-wrap items-center gap-4">
                {[
                  { src: "/flags/canada.jpg", alt: "Canada", name: "Canada" },
                  { src: "/flags/netherland.jpg", alt: "Netherlands", name: "Netherlands" },
                  { src: "/flags/uk.jpg", alt: "United Kingdom", name: "UK" },
                  { src: "/flags/eu.webp", alt: "Europe", name: "Europe" },
                ].map((flag, index) => (
                  <motion.div
                    key={flag.name}
                    className="group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={flag.src}
                      alt={flag.alt}
                      width={64}
                      height={48}
                      className="w-17 h-14 object-cover rounded shadow-lg group-hover:shadow-xl transition-all duration-200"
                      loading="lazy"
                    />
                    <p className="text-xs text-center mt-1 text-blue-200 group-hover:text-white transition-colors">
                      {flag.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Feature Card */}
          <motion.div 
            className="lg:justify-self-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Why Choose Us?
                </h3>
                
                <div className="space-y-4">
                  {[
                    "Expert guidance from certified consultants",
                    "100% success rate in visa applications",
                    "24/7 support throughout your journey",
                    "Affordable and transparent pricing",
                    "Strong network of partner companies"
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <FaCheckCircle className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div 
                  className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-center text-gray-800 font-semibold">
                    &quot;We are committed to delivering exceptional service and unmatched customer satisfaction&quot;
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Simplified */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
