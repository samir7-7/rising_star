"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaWhatsapp, FaGlobe, FaFileAlt, FaHandshake, FaPlaneDeparture, FaCalendarAlt, FaMoneyBillWave } from "react-icons/fa";

export default function AboutPage() {
  const openWhatsApp = () => {
    const phoneNumber = "351920448876";
    const message = "Hello! I'd like to know more about Rising Diamond's services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const services = [
    {
      title: "Work Visa Assistance in Europe",
      description: "Complete guidance on applications, permits, and legal paperwork (Portugal, Poland, and more).",
      icon: <FaGlobe className="text-blue-600" />,
    },
    {
      title: "Documentation, Translation & Attestation",
      description: "Accurate, valid, and legally recognized paperwork.",
      icon: <FaFileAlt className="text-blue-600" />,
    },
    {
      title: "Job Placement & Career Support",
      description: "Genuine opportunities that match your skills.",
      icon: <FaHandshake className="text-blue-600" />,
    },
    {
      title: "Resettlement Guidance",
      description: "Support for relocating to Europe, Canada, the UK, Australia, or the USA.",
      icon: <FaPlaneDeparture className="text-blue-600" />,
    },
    {
      title: "Appointment & Ticketing Services",
      description: "Hassle-free scheduling and affordable travel arrangements.",
      icon: <FaCalendarAlt className="text-blue-600" />,
    },
    {
      title: "Secure Money Transfer Services",
      description: "Safe and fast international transfers.",
      icon: <FaMoneyBillWave className="text-blue-600" />,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Mission banner with brand colors */}
      <section className="relative overflow-hidden">
        <div className="relative h-56 md:h-72 lg:h-80 bg-gray-900">
          <Image src="https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg" alt="Mission" fill sizes="100vw" className="absolute inset-0 object-cover" />
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Blue mission card */}
          <div className="container-responsive h-full relative">
            <div className="absolute right-4 md:right-10 top-8 md:top-12 bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-xl shadow-xl w-[88%] sm:w-[420px] md:w-[500px] p-5 md:p-6">
              <h2 className="text-lg md:text-xl font-semibold">Our Mission</h2>
              <p className="mt-2 text-sm md:text-base text-blue-50">
                To be a global bridge between a business seeking for a skilled employee and a qualified individual for the job. We aim to increase value through people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story section */}
      <section className="py-14 md:py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Who We Are</h2>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p>
                  Rising Diamond is a trusted consultancy dedicated to helping individuals achieve their dream of working and
                  settling in Europe. With strong global partnerships and years of combined expertise, we simplify work visa
                  applications, documentation, and relocation to ensure a smooth journey for our clients.
                </p>
                <p>
                  We are proud to be associated with organizations that hold over 25 years of experience in resettlement solutions,
                  international job placements, and business investment opportunities. Our partners span across Canada, Dubai, Qatar,
                  Oman, Pakistan, India, Nepal, and Kuwait—enabling us to serve clients from diverse backgrounds.
                </p>
                <p>
                  We understand the challenges of moving abroad—documentation requirements, language barriers, and adapting to a new
                  environment. Our team provides comprehensive solutions tailored to your goals.
                </p>
              </div>
            </motion.div>

            {/* What We Do – blue primary with icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl border border-blue-100 shadow-sm p-6 md:p-7">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-5">What We Do</h3>
                <div className="space-y-5">
                  {services.map((s) => (
                    <div key={s.title} className="flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                        <span className="text-lg">{s.icon}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{s.title}</p>
                        <p className="text-sm text-gray-600">{s.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us – brand card grid */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-responsive">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">Why Choose Us?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {[ 
              { t: "Trusted by Clients", d: "Proven track record with genuine placements and successful relocations." },
              { t: "Experienced Team", d: "Decades of combined expertise in visas, documentation, and mobility." },
              { t: "Global Network", d: "Partners across Canada, UAE, Qatar, Oman, South Asia and Europe." },
              { t: "Transparent Process", d: "Clear timelines, requirements, and updates at every step." },
            ].map((c) => (
              <div key={c.t} className="rounded-xl bg-white border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
                <div className="h-1 w-10 bg-gradient-to-r from-blue-600 to-orange-500 rounded mb-3"></div>
                <p className="font-semibold text-gray-900">{c.t}</p>
                <p className="text-sm text-gray-600 mt-2">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Managing Director section – cohesive layout */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="container-responsive">
          <div className="rounded-3xl bg-gradient-to-r from-blue-50 via-white to-blue-50 p-6 md:p-8 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: photo with decorative arcs */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 order-2 lg:order-1"
            >
              <div className="relative mx-auto max-w-sm">
                {/* Decorative arcs */}
                <svg className="absolute -left-10 top-6 h-[360px] w-[360px] -z-10 hidden md:block" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="180" cy="180" r="150" stroke="#60A5FA" strokeWidth="14" strokeOpacity="0.35" />
                  <circle cx="180" cy="180" r="120" stroke="#93C5FD" strokeWidth="10" strokeOpacity="0.45" />
                  <circle cx="180" cy="180" r="90" stroke="#3B82F6" strokeWidth="8" strokeOpacity="0.35" />
                </svg>
                <Image src="/MD.png" alt="Managing Director" width={500} height={300} className="w-full h-auto object-contain drop-shadow-xl" />
              </div>
            </motion.div>

            {/* Right: text exactly as reference style */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 order-1 lg:order-2"
            >
              <div className="bg-white rounded-2xl p-6 md:p-8 ring-1 ring-blue-100">
                <h3 className="text-2xl md:text-3xl font-bold text-blue-600">Message from the Managing Director</h3>
                <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded mt-2 mb-4"></div>
                <div className="space-y-4 text-gray-700 leading-[1.85]">
                  <p>
                    We at Rising Diamond, are trying to establish ourselves as a global bridge between a business seeking for a skilled employee and a qualified individual for the job. We aim to increase value through people.
                  </p>
                  <p>
                    The pillars of our client relationships are service quality. Rising Diamond Consultancy is committed to providing customers with professional support to discover semi-skilled and skilled manpower as per their requirement. Our team of experienced professionals always serve clients with attention and are well aware of the market and the law.
                  </p>
                  <p>
                    With the help of my brilliant team, we’ve been successful in bringing Rising Diamond Consultancy to a new milestone of global recognition.
                  </p>
                </div>
                <div className="mt-6">
                  <p className="text-blue-600 font-semibold text-lg">Managing Director</p>
                  <p className="text-gray-500 italic">Rising Diamond</p>
                </div>
              </div>
            </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-12 md:py-16 border-t border-gray-100">
        <div className="container-responsive text-center">
          <p className="text-lg md:text-xl text-gray-800 font-medium mb-4">
            Our goal is simple: to be the bridge that connects you to your future in Europe.
          </p>
          <button
            onClick={openWhatsApp}
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <FaWhatsapp />
            WhatsApp Us
          </button>
        </div>
      </section>
    </main>
  );
}


