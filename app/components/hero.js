// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function HeroSection() {
//   return (
//     <section className="relative w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-between overflow-hidden">
//       {/* Left Side */}
//       <div className="relative w-full md:w-1/2 h-[80vh] flex flex-col justify-center bg-gradient-to-r from-blue-900 to-blue-600 text-white px-8 md:px-16">
//         {/* Dotted design */}
//         <div className="absolute top-6 left-6 grid grid-cols-5 gap-1 opacity-50">
//           {[...Array(25)].map((_, i) => (
//             <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
//           ))}
//         </div>

//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl md:text-5xl font-bold uppercase leading-tight"
//         >
//           Supreme Direction <br /> World Wide Service
//         </motion.h1>

//         {/* Flags */}
//         <div className="flex items-center gap-3 mt-6">
//           <Image src="/flags/canada.png" alt="Canada" width={40} height={25} />
//           <Image
//             src="/flags/australia.png"
//             alt="Australia"
//             width={40}
//             height={25}
//           />
//           <Image src="/flags/uk.png" alt="UK" width={40} height={25} />
//           <Image src="/flags/nz.png" alt="New Zealand" width={40} height={25} />
//           <Image src="/flags/eu.png" alt="Europe" width={40} height={25} />
//         </div>

//         <p className="mt-6 italic text-sm md:text-base">
//           Contact us today and let us be the bridge to your success
//         </p>
//       </div>

//       {/* Right Side */}
//       <div className="relative w-full md:w-1/2 h-[80vh] flex items-center justify-center bg-gray-50 px-8 md:px-16">
//         <motion.p
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-xl md:text-2xl font-semibold text-center text-gray-800 max-w-lg"
//         >
//           We are committed to delivering exceptional service <br /> and
//           unmatched customer satisfaction
//         </motion.p>
//       </div>
//     </section>
//   );
// }

// components/HeroSection.js
// "use client";

// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <section className="relative w-full min-h-[80vh] flex items-center justify-center">
//       {/* Background image */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="buildings.jpg" // put your image in /public/building.jpg
//           alt="Building"
//           fill
//           className="object-cover"
//           priority
//         />
//         {/* Gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-blue-600/60" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-16">
//         {/* Left Side */}
//         <div className="text-white max-w-xl">
//           <h1 className="text-3xl md:text-5xl font-bold uppercase leading-tight">
//             Supreme Direction <br /> World Wide Service
//           </h1>

//           {/* Flags */}
//           <div className="flex items-center gap-3 mt-6">
//             <Image
//               src="/flags/canada.png"
//               alt="Canada"
//               width={40}
//               height={25}
//             />
//             <Image
//               src="/flags/australia.png"
//               alt="Australia"
//               width={40}
//               height={25}
//             />
//             <Image src="/flags/uk.png" alt="UK" width={40} height={25} />
//             <Image
//               src="/flags/nz.png"
//               alt="New Zealand"
//               width={40}
//               height={25}
//             />
//             <Image src="/flags/eu.png" alt="Europe" width={40} height={25} />
//           </div>

//           <p className="mt-6 italic text-sm md:text-base">
//             Contact us today and let us be the bridge to your success
//           </p>
//         </div>

//         {/* Right Side */}
//         <div className="bg-white/90 rounded-2xl p-8 mt-10 md:mt-0 md:ml-10 shadow-lg">
//           <p className="text-xl md:text-2xl font-semibold text-center text-gray-800 max-w-lg">
//             We are committed to delivering exceptional service <br /> and
//             unmatched customer satisfaction
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle, FaWhatsapp } from "react-icons/fa";

export default function HeroSection() {
  const openWhatsApp = () => {
    const phoneNumber = "971529426504"; // WhatsApp number without + sign
    const message = "Hello! I'm interested in your consultancy services. Can you help me with more information?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/buildings.jpg')" }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-orange-600/70" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-responsive">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Side - Main Content */}
          <motion.div 
            className="text-white space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <FaCheckCircle className="text-green-400" />
              Trusted by people globally
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-responsive-xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Supreme Direction
              <span className="block text-orange-400">World Wide Service</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-lg md:text-xl text-blue-100 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Your gateway to job opportunities in Europe and career opportunities. 
              We provide comprehensive consultancy services to help you achieve your dreams.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <button 
                onClick={openWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl hover:scale-105"
              >
                <FaWhatsapp className="text-lg" />
                <span>WhatsApp Us</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary text-white border-white hover:bg-white hover:text-white-800">
                Learn More
              </button>
            </motion.div>

            {/* Flags Section */}
            <motion.div 
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
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
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <img
                      src={flag.src}
                      alt={flag.alt}
                      className="w-16 h-15 object-cover rounded shadow-lg group-hover:shadow-xl transition-all duration-300"
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
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
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
                      transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
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
                  transition={{ duration: 0.6, delay: 1.6 }}
                >
                  <p className="text-center text-gray-800 font-semibold">
                    "We are committed to delivering exceptional service and unmatched customer satisfaction"
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2 }}
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
