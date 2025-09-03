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
} from "react-icons/fa";
import Image from "next/image";

export default function CanadaWorkPermit() {
  const requiredDocuments = [
    "Valid job offer letter from a Canadian employer",
    "Official employment contract",
    "Copy of the positive LMIA approval",
    "LMIA number",
    "Financial proof (bank statements)",
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Country Photo Header */}
      <section className="relative h-64 md:h-80 bg-gray-800 overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg"
          alt="Canada city skyline"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 container-responsive h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center text-white"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Work Permit in Canada</h1>
            <p className="text-lg md:text-xl text-gray-200">
              Move from Europe to Canada with our guidance
            </p>
          </motion.div>
          
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
                Move from Europe to Canada with Our Guidance
              </h2>
              <div className="space-y-4 text-base md:text-lg text-gray-600 leading-relaxed">
                <p>
                  If you&apos;ve already been working in Europe for 2–3 years, you may be eligible to take the next step in your career journey by moving to Canada. Many Canadian employers are actively seeking skilled professionals, and with the right process, you can secure a Work Permit through the Labour Market Impact Assessment (LMIA) pathway.
                </p>
                <h3 className="font-semibold text-gray-800">What is LMIA and Why Does It Matter?</h3>
                <p>
                  A Labour Market Impact Assessment (LMIA) is a document that Canadian employers often need before hiring a foreign worker. A positive LMIA confirms that:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>There is a genuine need for a foreign worker.</li>
                  <li>No Canadian citizen or permanent resident is available to fill the role.</li>
                </ul>
                <p>
                  With a positive LMIA, you can then apply for a Canadian work permit, which opens the door to working and living in Canada.
                </p>
                <h3 className="font-semibold text-gray-800">Who Can Apply?</h3>
                <p>
                  If you are currently employed in Europe and have 2–3 years of professional experience, you&apos;re in a strong position to qualify. Canadian employers prefer candidates who already have international exposure and proven work histories.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-br from-blue-600 to-blue-900 rounded-2xl md:rounded-3xl p-6 md:p-8 text-white"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Why Canada?</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3">
                  <FaUsers className="text-orange-300 text-sm md:text-base" />
                  <span className="text-sm md:text-base">High quality of life and welcoming immigration</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaBriefcase className="text-orange-300 text-sm md:text-base" />
                  <span className="text-sm md:text-base">Strong job market with LMIA-backed roles</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-orange-300 text-sm md:text-base" />
                  <span className="text-sm md:text-base">Pathways to permanent residence</span>
                </div>
              </div>

              <div className="mt-10 bg-white rounded-2xl p-6 shadow-lg h-full flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-4">How We Help You</h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-1" />
                    Connects you with Canadian employers seeking skilled workers.
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-1" />
                    Guides you through every step of the LMIA application.
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-1" />
                    Helps prepare and review all required documents.
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-1" />
                    Ensures your application has the best chance of approval.
                  </li>
                </ul>
              </div>
            </motion.div>
            {/* <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg h-full flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-4">How We Help You</h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-1" />
                    Connects you with Canadian employers seeking skilled workers.
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-1" />
                    Guides you through every step of the LMIA application.
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-1" />
                    Helps prepare and review all required documents.
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-1" />
                    Ensures your application has the best chance of approval.
                  </li>
                </ul>
              </div>
            </motion.div>
             */}
          </div>
        </div>
      </section>

      {/* Required Documents + Contact */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex flex-col h-full"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
                What You&apos;ll Need for a Work Permit
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                To apply for a Canadian Work Permit under the LMIA program, you&apos;ll need the following documents:
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

            {/* <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg h-full flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-4">How We Help You</h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-1" />
                    Connects you with Canadian employers seeking skilled workers.
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-1" />
                    Guides you through every step of the LMIA application.
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-1" />
                    Helps prepare and review all required documents.
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-1" />
                    Ensures your application has the best chance of approval.
                  </li>
                </ul>
              </div>
            </motion.div> */}
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
