"use client";
import { motion } from "framer-motion";
import HeroSection from "./components/hero";
import ContactForm from "./components/contact-form";
import { 
  FaGraduationCap, 
  FaGlobe, 
  FaFileAlt, 
  FaUsers, 
  FaAward, 
  FaHeadset,
  FaStar,
  FaQuoteLeft,
  FaArrowRight,
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp
} from "react-icons/fa";

export default function Home() {
  const openWhatsApp = () => {
    const phoneNumber = "351920448876"; // WhatsApp number without + sign
    const message = "Hello! I'm interested in your consultancy services. Can you help me with more information?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    {
      icon: FaGraduationCap,
      title: "Work Abroad",
      description: "Comprehensive guidance for international education opportunities",
      features: ["Best paying jobs", "Application Process", "Visa Assistance"]
    },
    {
      icon: FaFileAlt,
      title: "Documentation",
      description: "Complete support for all required documentation",
      features: ["Document Preparation", "Translation Services", "Notarization"]
    },
    {
      icon: FaGlobe,
      title: "Visa Processing",
      description: "Expert assistance with visa applications and processing",
      features: ["Application Review", "Interview Preparation", "Status Tracking"]
    },
    {
      icon: FaUsers,
      title: "Career Counseling",
      description: "Professional guidance for career development",
      features: ["Career Assessment", "Skill Development", "Job Placement"]
    }
  ];


  const stats = [
    { number: "100+", label: "People Helped" },
    { number: "95%", label: "Success Rate" },
    { number: "10+", label: "Countries" },
    { number: "2+", label: "Years Experience" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen">
      <HeroSection />
      {/* Services Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-responsive">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-responsive-lg font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive consultancy services to help you achieve your international education and career goals.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="card group cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-orange-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <FaCheckCircle className="text-green-500 text-xs" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container-responsive">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                variants={itemVariants}
              >
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-responsive-lg font-bold text-gray-800 mb-6">
                Why Choose Rising Diamond?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We are committed to providing exceptional service and unmatched customer satisfaction. 
                Our experienced team ensures your success at every step.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: FaAward, title: "Certified Consultants", desc: "Our team consists of certified education consultants with years of experience." },
                  { icon: FaHeadset, title: "24/7 Support", desc: "Round-the-clock assistance to address all your queries and concerns." },
                  { icon: FaGlobe, title: "Global Network", desc: "Strong partnerships with universities and institutions worldwide." },
                  { icon: FaCheckCircle, title: "Proven Track Record", desc: "High success rate with thousands of satisfied students." }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="bg-blue-500 p-3 rounded-full">
                      <feature.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Start Your Journey?</h3>
                <p className="text-blue-100 mb-8">
                  Get in touch with our experts today and take the first step towards your international education dream.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FaPhone className="text-orange-300" />
                    <span>+351 920 448 876</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-orange-300" />
                    <span>consultancy@risingdiamond.info</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-orange-300" />
                    <span>Avenida Almirante Reis N144,
                    6D, Lisbon, Portugal</span>
                  </div>
                </div>

                <a href="#contact"><button 
                 
                  className="cursor-pointer bg-white text-black w-full mt-8 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
                >
                  <FaEnvelope className="text-lg" />
                  <span>Contact Us</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button></a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-responsive-lg font-bold mb-6">
              Start Your International Education Journey Today
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Don&apos;t let your dreams wait. Our expert consultants are ready to guide you through 
              every step of your international education journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={openWhatsApp}
                className="bg-white text-orange-600 border-2 border-white hover:bg-orange-50 px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <FaWhatsapp className="text-lg" />
                <span>WhatsApp Consultation</span>
              </button>
              
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Get in Touch + Location Section (combined) */}
      <section className="py-16 md:py-20 bg-white" id="contact">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <h2 className="text-responsive-lg font-bold text-gray-800">Get in Touch & Our Location</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-2">
              Avenida Almirante Reis N144, 6D, Lisbon, Portugal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Left: Contact Form */}
            <div className="h-full">
              <ContactForm />
            </div>

            {/* Right: Map */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
              <iframe
                title="Rising Diamond Location"
                src="https://www.google.com/maps?q=Avenida%20Almirante%20Reis%20N144%2C6D%20Lisbon%2C%20Lisbon%2C%20Portugal&output=embed"
                className="w-full h-full min-h-[520px]"
                loading="lazy"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
