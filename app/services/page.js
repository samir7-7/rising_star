"use client";
import { motion } from "framer-motion";
import {
  FaPassport,
  FaFileAlt,
  FaBriefcase,
  FaGlobeEurope,
  FaLanguage,
  FaPlaneDeparture,
  FaMoneyBillWave,
  FaCheckCircle,
  FaWhatsapp,
} from "react-icons/fa";

export default function ServicesPage() {
  const detailedServices = [
    {
      title: "Domestic and International Tickets",
      description:
        "We offer reliable ticketing services at competitive rates, ensuring your travel plans are smooth and hassle-free.",
    },
    {
      title: "Legal Visa Entry of Portugal (D1, Job Seeker, etc.)",
      description:
        "Complete assistance with obtaining Portugal’s legal visa entry from any country, including D1 and Job Seeker categories.",
    },
    {
      title: "VFS Appointment",
      description:
        "Seamless scheduling of VFS appointments for visa and documentation requirements.",
    },
    {
      title: "EU Visa Service",
      description:
        "Guidance and support for obtaining various EU visas tailored to your professional or personal needs.",
    },
    {
      title: "Portugal New NIF/NISS",
      description:
        "Help with acquiring a new NIF (Tax Number) or NISS (Social Security Number) in Portugal.",
    },
    {
      title: "NIF/NISS Password",
      description:
        "Assistance in generating and securing your NIF/NISS access credentials.",
    },
    {
      title: "Remove Address",
      description:
        "Service to update or remove outdated addresses from official records in Portugal.",
    },
    {
      title: "Translations of Any Documents",
      description:
        "Certified translations for legal, professional, and personal documents to overcome language barriers.",
    },
    {
      title: "National & International Police Clearance Certificate",
      description:
        "Assistance in obtaining police clearance certificates for official use in Portugal and abroad.",
    },
    {
      title: "Junta / Address Verification",
      description:
        "Verification and authentication of address with relevant authorities.",
    },
    {
      title: "Work Contract / Activity",
      description:
        "Guidance in preparing and verifying work contracts or registering professional activities.",
    },
    {
      title: "Lawyer Assistance",
      description:
        "Professional legal support to ensure compliance and resolve legal matters.",
    },
    {
      title: "Back Tax",
      description:
        "Support in managing and clearing pending tax obligations.",
    },
    {
      title: "Court Cases After Legal & Tax Issues",
      description:
        "Representation and guidance for legal cases related to residency, taxation, or employment.",
    },
    {
      title: "Family Appointment",
      description:
        "Appointment scheduling services for family-related documentation for your families to visit you.",
    },
    {
      title: "Residents Card Renewal Service",
      description:
        "Complete support in renewing Portuguese residency cards without stress.",
    },
    {
      title: "AIMA Case",
      description:
        "Professional handling of AIMA-related cases (migration and integration support).",
    },
    {
      title: "SNS Number",
      description:
        "Assistance in obtaining your SNS (National Health Service) Number for healthcare access in Portugal.",
    },
    {
      title: "IRS Filing",
      description:
        "Guidance in filing IRS (Income Tax Return) in compliance with Portuguese tax regulations.",
    },
    {
      title: "IVA / Recibo Verde / Faturas",
      description:
        "Expert assistance in managing IVA (VAT), Recibos Verdes (freelance invoices), and Faturas (billing).",
    },
    {
      title: "Money Transfers",
      description:
        "Secure and efficient international money transfer services.",
    },
    {
      title: "Company Opening",
      description:
        "Professional support in registering and opening a new company in Portugal.",
    },
    {
      title: "Nationality Application",
      description:
        "Step-by-step guidance in applying for Portuguese nationality, ensuring accuracy and legal compliance.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-b-3xl shadow-lg">
        <div className="container-responsive  py-14 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center py-10"
          >
            <h1 className="text-responsive-lg font-bold mb-4">Our Services</h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              At Rising Diamond Consultancy, we provide a wide range of services to support
              individuals and families in their journey to Europe—especially Portugal—and beyond.
              Our expert team ensures that every step, from visa applications to legal documentation,
              is handled with precision, transparency, and care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services List */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-responsive-lg font-bold text-gray-800">Service Offerings</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-2">
              Explore our comprehensive list of services tailored for Portugal and the EU.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {detailedServices.map((svc, idx) => (
              <motion.div
                key={svc.title}
                variants={item}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 md:p-7 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 h-full"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center justify-center font-semibold shadow">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{svc.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{svc.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-responsive-lg font-bold text-gray-800">How We Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-2">
              A clear, proven process designed to save you time and reduce risk.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "We understand your goals and assess eligibility.",
              },
              {
                step: "02",
                title: "Preparation",
                desc: "We prepare documents and finalize your file.",
              },
              {
                step: "03",
                title: "Submission",
                desc: "We submit and track your application.",
              },
              {
                step: "04",
                title: "Settlement",
                desc: "We support your move and onboarding.",
              },
            ].map((s, idx) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 h-full"
              >
                <div className="text-blue-700 font-bold text-xl mb-3">{s.step}</div>
                <h3 className="font-semibold text-gray-800 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Ready to get started?</h2>
              <p className="text-blue-100 text-lg">
                Chat with our team on WhatsApp and get personalized guidance for your
                case.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <a
                href="https://wa.me/351920448876?text=Hello!%20I%27m%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-7 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FaWhatsapp className="text-lg" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


