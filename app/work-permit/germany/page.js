"use client";
import { motion } from "framer-motion";
import ContactForm from "../../components/contact-form";
import { 
  FaMapMarkerAlt, 
  FaUsers, 
  FaEuroSign, 
  FaLanguage, 
  FaClock, 
  FaCheckCircle,
  FaFileAlt,
  FaBriefcase,
  FaWhatsapp
} from "react-icons/fa";
import Image from "next/image";

export default function GermanyWorkPermit() {
  const openWhatsApp = () => {
    const phoneNumber = "351920448876";
    const message = "Hello! I'm interested in work permit services for Germany. Can you help me with more information?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const workPermits = [
    {
      title: "EU Blue Card",
      description: "For highly qualified professionals with university degree",
      requirements: ["University degree", "Job offer with minimum salary", "Health insurance"],
      duration: "4 years (renewable)"
    },
    {
      title: "Work Visa",
      description: "For skilled workers with job offer",
      requirements: ["Job offer from German employer", "Professional qualifications", "German language skills"],
      duration: "1-3 years"
    },
    {
      title: "Freelance Visa",
      description: "For self-employed professionals",
      requirements: ["Business plan", "Financial proof", "Professional portfolio"],
      duration: "1-2 years"
    }
  ];

  const requiredDocuments = [
    "Valid passport (minimum 6 months validity)",
    "Completed visa application form",
    "Recent passport-size photographs",
    "Job offer letter from German employer",
    "Educational certificates (translated and attested)",
    "Professional experience certificates",
    "German language proficiency certificate (if required)",
    "Health insurance certificate",
    "Financial proof (bank statements)",
    "Criminal background check",
    "Medical examination certificate",
    "Accommodation proof in Germany"
  ];

  const popularJobs = [
    "Software Engineer / IT Specialist",
    "Mechanical Engineer",
    "Healthcare Professional",
    "Business Analyst",
    "Marketing Manager",
    "Financial Analyst",
    "Project Manager",
    "Research Scientist"
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Country Photo Header */}
      <section className="relative h-64 md:h-80 bg-gray-800 overflow-hidden">
        {/* Background Image */}
        <Image 
          src="https://images.pexels.com/photos/1128416/pexels-photo-1128416.jpeg"
          alt="Germany landscape"
          fill
          sizes="100vw"
          className="object-cover"
        />
        {/* Light overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 container-responsive h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Work Permit in Germany</h1>
            <p className="text-lg md:text-xl text-gray-200">
              Your gateway to professional opportunities in Europe&apos;s largest economy
            </p>
          </motion.div>
        </div>
      </section>

      {/* Country Overview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
                Why Choose Germany for Work?
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
                Germany offers excellent career opportunities with competitive salaries, 
                strong job security, and a high quality of life. As Europe&apos;s economic powerhouse, 
                it provides numerous opportunities for skilled professionals across various industries.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="flex items-center gap-3">
                  <FaEuroSign className="text-blue-500 text-xl md:text-2xl" />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm md:text-base">High Salaries</h3>
                    <p className="text-xs md:text-sm text-gray-600">Competitive pay scales</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaUsers className="text-blue-500 text-xl md:text-2xl" />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm md:text-base">Job Security</h3>
                    <p className="text-xs md:text-sm text-gray-600">Strong labor protection</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaLanguage className="text-blue-500 text-xl md:text-2xl" />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm md:text-base">English Friendly</h3>
                    <p className="text-xs md:text-sm text-gray-600">Many companies use English</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-blue-500 text-xl md:text-2xl" />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm md:text-base">Central Location</h3>
                    <p className="text-xs md:text-sm text-gray-600">Easy travel across Europe</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl md:rounded-3xl p-6 md:p-8 text-white"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Quick Facts</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3">
                  <FaUsers className="text-orange-300 text-sm md:text-base" />
                  <span className="text-sm md:text-base">Population: 83+ million</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEuroSign className="text-orange-300 text-sm md:text-base" />
                  <span className="text-sm md:text-base">Currency: Euro (€)</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaLanguage className="text-orange-300 text-sm md:text-base" />
                  <span className="text-sm md:text-base">Official Language: German</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaClock className="text-orange-300 text-sm md:text-base" />
                  <span className="text-sm md:text-base">Time Zone: CET (UTC+1)</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-orange-300 text-sm md:text-base" />
                  <span className="text-sm md:text-base">Capital: Berlin</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Permit Types */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-responsive">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Types of Work Permits
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Germany offers various work permit options depending on your qualifications, 
              job offer, and professional background.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {workPermits.map((permit, index) => (
              <motion.div
                key={permit.title}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-orange-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <FaBriefcase className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{permit.title}</h3>
                  <p className="text-gray-600">{permit.description}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {permit.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <FaCheckCircle className="text-green-500 text-xs" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaClock className="text-blue-500" />
                    <span className="font-medium">Duration: {permit.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Jobs */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-responsive">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Popular Job Opportunities
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Germany has a high demand for skilled professionals in various sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {popularJobs.map((job, index) => (
              <motion.div
                key={job}
                className="bg-gradient-to-br from-blue-50 to-orange-50 p-4 rounded-lg text-center hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <FaBriefcase className="text-blue-500 text-2xl mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-800">{job}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col h-full"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
                Required Documents
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                Ensure you have all the necessary documents ready for your work permit application. 
                Our team will help you prepare and verify all requirements.
              </p>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FaFileAlt className="text-blue-500" />
                  Document Checklist
                </h3>
                <ul className="space-y-3">
                  {requiredDocuments.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-full"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>


    </main>
  );
}
