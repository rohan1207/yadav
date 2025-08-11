import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaStethoscope,
  FaHeartbeat,
  FaUserMd,
  FaXRay,
  FaBaby,
  FaBone,
  FaHospital,
  FaFlask,
  FaProcedures,
  FaUserNurse,
  FaSearch,
  FaBrain,
  FaHandPaper,
  FaCamera,
  FaSyringe,
  FaBolt,
  FaAppleAlt,
  FaAmbulance,
  FaHandHoldingHeart,
  FaMicroscope,
  FaCut,
  FaLungs,
  FaTooth,
  FaCarrot,
  FaEye,
} from "react-icons/fa";

import servicesData from "../data/ServiceDetails.json"; // Assuming you have a servicesData.js file with service details

// ServicesPage Component

const ServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAllServices, setShowAllServices] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services = Object.keys(servicesData).map((key) => ({
    id: key,
    link: key,
    ...servicesData[key],
  }));

  const filteredServices = services.filter(
    (service) =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.overview.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="services-container min-h-screen bg-gray-50">
      {/* Hero Section */}{" "}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-[#0d3b66]/5 to-[#64c4ed]/5">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#64c4ed]/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#64c4ed]/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {" "}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#0d3b66] to-[#64c4ed] rounded-full mb-8 animate-bounce">
              <FaStethoscope className="text-white text-3xl" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-[#0d3b66] to-[#0d3b66]/80 bg-clip-text text-transparent">
              Our Dental Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive healthcare solutions with cutting-edge technology
              and expert Dental professionals
            </p>
            {/* Search Bar */}
            <div className="mt-8 max-w-xl mx-auto">
              <div className="relative group">
                {" "}
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-[#64c4ed] transition-colors" />
                <input
                  type="text"
                  placeholder="Search for a service..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-[#64c4ed]/20 focus:border-[#64c4ed] transition-all duration-300 text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Main Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Primary Dental Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our core Dental departments offering comprehensive healthcare
              solutions
            </p>
          </div>{" "}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {(isMobile
              ? showAllServices
                ? filteredServices
                : filteredServices.slice(0, 6)
              : filteredServices
            ).map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group service-card flex flex-col h-[400px] md:h-[500px] overflow-hidden transform hover:-translate-y-2"
              >
                {/* Fixed Image Container */}{" "}
                <div className="relative h-40 md:h-56 overflow-hidden rounded-t-2xl bg-gray-100 flex items-center justify-center">
                  <img
                    src={service.heroImage}
                    alt={service.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                {/* Content Section */}{" "}
                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  {" "}
                  <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-[#0d3b66] transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow text-xs md:text-sm leading-relaxed line-clamp-2 md:line-clamp-none">
                    {service.overview.description}
                  </p>
                  {/* Learn More Button */}
                  <div className="mt-auto pt-4">
                    <Link
                      to={`/services/${service.link}`}
                      className="inline-flex items-center text-amber-500 font-medium group/link hover:text-amber-700 transition-colors duration-200"
                    >
                      Learn more
                      <svg
                        className="w-4 h-4 ml-2 transform transition-transform duration-200 group-hover/link:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}{" "}
          </div>
          {/* View All Services Button - Mobile Only */}
          {isMobile && filteredServices.length > 6 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllServices(!showAllServices)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-sm font-semibold hover:from-red-600 hover:to-orange-600 transition-all duration-300"
              >
                {showAllServices ? "Show Less" : "View All Services"}
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    showAllServices ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>
      {/* Contact Strip */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {" "}
          <div className="bg-gradient-to-r from-[#0d3b66] to-[#64c4ed] rounded-3xl p-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full bg-gradient-to-r from-teal-200 to-teal-300 rounded-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
              <FaHospital className="mx-auto text-4xl text-teal-500 mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Have any questions or need a consultation?
              </h3>
              <p className="text-gray-600 mb-6 text-white md:text-lg">
                Our Dental experts are here to help. Get in touch with us for
                any Dental queries or appointment scheduling.
              </p>
              <Link to="/contact">
                <div className="inline-flex items-center gap-2 bg-white  text-black px-8 py-4 rounded-full text-base font-semibold hover:from-teal-600 hover:to-teal-700 transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  Contact Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
