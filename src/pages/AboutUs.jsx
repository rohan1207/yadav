import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
  Home,
  Calendar,
  Clock,
  Eye,
  Heart,
  Shield,
  Activity,
  Users,
  UserCheck,
  MapPin,
  Award,
  CheckCircle,
} from "react-feather";
import OurTeam from "../components/OurTeam";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState("founder");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((elem) => {
      observer.observe(elem);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const specialties = [
    "General Dentistry",
    "Cosmetic Dentistry",
    "Root Canal Treatment",
    "Dental Implants",
    "Orthodontics",
    "Periodontics",
    "Prosthodontics",
    "Pediatric Dentistry",
    "Oral Surgery",
    "Endodontics",
    "Dental Emergency Care",
    "Smile Makeover",
  ];

  const facilities = [
    {
      icon: Home,
      title: "Modern Dental Chairs",
      desc: "State-of-the-art dental equipment for comfortable treatments",
    },
    {
      icon: Heart,
      title: "Advanced Technology",
      desc: "Latest dental technology for precise diagnostics and treatment",
    },
    {
      icon: Users,
      title: "Sterilization Unit",
      desc: "Advanced sterilization protocols for patient safety",
    },
    {
      icon: Eye,
      title: "Digital X-Ray",
      desc: "Modern digital imaging for accurate diagnosis",
    },
    {
      icon: Activity,
      title: "Dental Laboratory",
      desc: "In-house lab for custom dental prosthetics and appliances",
    },
    {
      icon: Shield,
      title: "Emergency Care",
      desc: "Prompt attention for dental emergencies",
    },
  ];

  const stats = [
    { number: "25+", label: "Years of Excellence", icon: Calendar },
    { number: "100k+", label: "Happy Patients", icon: Users },
    { number: "12+", label: "Expert Dentists", icon: UserCheck },
    { number: "24/7", label: "Emergency Care", icon: Clock },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative bg-gradient-to-r from-[#0d3b66]/70 via-[#0d3b66]/80 to-[#0d3b66] text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6 sm:mt-20 mt-5"
            >
              <Heart className="w-5 h-5 mr-2 text-[#64c4ed]" />
              <span className="text-sm font-medium">Best Dental Clinic</span>
            </motion.div>{" "}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              About <span className="text-[#64c4ed]">Ujwal Dental Clinic</span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed text-[#64c4ed]/90"
            >
              Serving the community with excellence, compassion, and world-class
              healthcare since 1997
            </motion.p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
      </motion.div>

      {/* Stats Section */}
      <div className="relative -mt-16 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white rounded-2xl p-6 shadow-xl border-t-4 border-[#0d3b66] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <stat.icon className="w-8 h-8 text-[#0d3b66] mb-3" />
              <div className="text-3xl sm:text-4xl font-bold text-gray-800 mb-1">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm sm:text-base font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
            {[
              { id: "founder", label: "Founder" },
              { id: "overview", label: "Overview" },
              { id: "vision", label: "Vision & Mission" },
              { id: "facilities", label: "Facilities" },
              { id: "team", label: "Our Team" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[#0d3b66] to-[#0d3b66]/80 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch h-full"
            >
              {" "}
              <div className="flex flex-col h-full">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
                  About{" "}
                  <span className="text-[#0d3b66]">
                    Ujwal Multispeciality Dental Clinic
                  </span>
                </h2>
                <div className="flex-grow space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg">
                    Ujwal Multispeciality Dental Clinic offers comprehensive
                    dental care with a focus on advanced treatments and patient
                    comfort. Our team of expert dentists ensures the highest
                    standards of oral health, catering to a wide range of dental
                    needs with precision and care. Visit us for a brighter,
                    healthier smile.
                  </p>
                </div>{" "}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="bg-[#0d3b66]/5 rounded-xl p-6 border border-[#0d3b66]/20 flex flex-col items-center sm:items-start text-center sm:text-left"
                  >
                    <div className="bg-white/80 rounded-full p-3 mb-3">
                      <MapPin className="w-6 h-6 text-[#0d3b66]" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Location
                    </h3>
                    <p className="text-gray-600">Heart of Nagar, Nagar</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="bg-[#0d3b66]/5 rounded-xl p-6 border border-[#0d3b66]/20 flex flex-col items-center sm:items-start text-center sm:text-left"
                  >
                    <div className="bg-white/80 rounded-full p-3 mb-3">
                      <Award className="w-6 h-6 text-[#0d3b66]" />
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Accreditation
                    </h3>
                    <p className="text-gray-600">NABH Accredited Facility</p>
                  </motion.div>
                </div>
              </div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <div className="bg-gradient-to-br from-[#0d3b66] to-[#0d3b66]/80 rounded-3xl p-8 text-white h-full flex flex-col">
                  <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm flex-grow">
                    <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
                    <ul className="space-y-4">
                      {[
                        "Experienced team of specialist doctors",
                        "State-of-the-art medical equipment",
                        "Affordable healthcare packages",
                        "Cashless facility for all mediclaims",
                        "24/7 emergency and ambulance services",
                        "Comprehensive diagnostic services",
                        "Patient-centric care with compassion",
                        "Hygienic and comfortable environment",
                        "Community-focused healthcare initiatives",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-green-300 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
          {/* Vision & Mission Tab */}
          {activeTab === "vision" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-[#0d3b66]/95 to-[#0d3b66]/80 backdrop-blur-lg rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[url('/logo.png')] opacity-5 bg-center bg-no-repeat bg-contain"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                  <div className="relative">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mb-8">
                      <Eye className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                      Our Vision
                    </h2>
                    <p className="text-lg sm:text-xl leading-relaxed text-white/90">
                      To be regions best and most cost effective dental health
                      care provider through Ujwal Multispeciality Dental Clinic,
                      Implant and Trauma Care Center and engaging ourselves in
                      dental healthcare.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 relative overflow-hidden"
                >
                  {" "}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0d3b66]/5 to-[#0d3b66]/10"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#0d3b66]/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#0d3b66]/20 rounded-full translate-y-12 -translate-x-12"></div>
                  <div className="relative">
                    {" "}
                    <div className="bg-gradient-to-br from-[#0d3b66] to-[#0d3b66]/80 rounded-full w-16 h-16 flex items-center justify-center mb-8">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
                      Our Mission & Objectives
                    </h2>
                    <p className="text-lg sm:text-xl leading-relaxed text-gray-600">
                      Ujwal Multispeciality Dental Hospital decided to provide
                      high quality and cost effective dental and oral health
                      care facilities by setting new standards in dental health
                      care management using all modern technologies,
                      sophisticated equipment diagnostic facilities, critical
                      care management and providing emergency services to all
                      the needy patients abiding the medical ethics. Patient’s
                      safety and respecting their values and beliefs.
                    </p>
                    <p className="text-lg sm:text-xl leading-relaxed text-gray-600 mt-4">
                      Our aim is to work for excellent services and so dedicated
                      experienced team of highly qualified doctors and qualified
                      staff.
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
              >
                <div className="relative p-8 sm:p-12">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 to-white/80"></div>
                  <div className="relative">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
                      Our Core Values
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        {
                          icon: Heart,
                          title: "Compassion",
                          desc: "Caring with empathy",
                          gradient: "from-[#0d3b66] to-[#0d3b66]/80",
                          bg: "from-[#0d3b66]/5 to-[#0d3b66]/10",
                        },
                        {
                          icon: Shield,
                          title: "Safety",
                          desc: "Ensuring patient safety",
                          gradient: "from-teal-400 to-teal-500",
                          bg: "from-teal-50 to-teal-100",
                        },
                        {
                          icon: Award,
                          title: "Excellence",
                          desc: "Striving for the best",
                          gradient: "from-teal-500 to-teal-600",
                          bg: "from-teal-50 to-teal-100",
                        },
                        {
                          icon: Users,
                          title: "Respect",
                          desc: "Treating all with dignity",
                          gradient: "from-teal-400 to-teal-500",
                          bg: "from-teal-50 to-teal-100",
                        },
                      ].map((value, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * index }}
                          whileHover={{
                            scale: 1.02,
                            transition: { duration: 0.2 },
                          }}
                          className="group relative rounded-2xl p-6 transition-all duration-300"
                        >
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${value.bg} rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
                          ></div>
                          <div className="relative">
                            <div
                              className={`bg-gradient-to-br ${value.gradient} rounded-xl p-3 w-12 h-12 flex items-center justify-center mb-4 mx-auto transform group-hover:scale-110 transition-transform duration-300`}
                            >
                              <value.icon className="w-6 h-6 text-white" />
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2 text-center">
                              {value.title}
                            </h4>
                            <p className="text-sm text-gray-600 text-center">
                              {value.desc}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
          {/* Facilities Tab */}
          {activeTab === "facilities" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                  World-Class{" "}
                  <span className="text-[#0d3b66]">Facilities & Services</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  State-of-the-art infrastructure and advanced medical equipment
                  to provide the best possible care
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Key Facilities
                  </h3>
                  {facilities.map((facility, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
                    >
                      {" "}
                      <div className="bg-[#0d3b66]/5 p-3 rounded-xl">
                        <facility.icon className="w-6 h-6 text-[#0d3b66]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          {facility.title}
                        </h4>
                        <p className="text-gray-600 text-sm">{facility.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Our Specialties
                  </h3>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {specialties.map((service, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm sm:text-base">
                            {service}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}{" "}
          {/* Founder Tab */}
          {activeTab === "founder" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto py-8"
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Image Section */}
                  <div className="relative h-[400px] md:h-full">
                    <img
                      src="/founder.webp"
                      alt="Dr. Amit Badve"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 md:p-12">
                    <div className="mb-8">
                      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Dr. V.R. Yadao
                      </h2>
                      <p className="text-lg text-gray-600 mb-6">
                        Dr. V.R. Yadao is the owner of Ujwal Dental Clinic.
                        B.D.S. (Nagpur) Reg. No. A/2256, Senior Dental Surgeon
                        He practices as a Surgeon in the Hospital.
                      </p>
                    </div>
                    <div className="space-y-6">
                      {[
                        { label: "Speciality", value: "Senior Dental Surgeon" },
                        {
                          label: "Education",
                          value: "B.D.S. (Nagpur)",
                        },
                        { label: "Experience", value: "35 years" },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center border-b border-gray-100 pb-4"
                        >
                          <span className="text-gray-600 min-w-[120px]">
                            {item.label}
                          </span>
                          <span className="text-gray-900 font-medium ml-4">
                            {item.value}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          {activeTab === "team" && <OurTeam />}
        </motion.div>
      </div>

      {/* Contact Strip */}
      <div className="mt-8 sm:mt-16 bg-gradient-to-r from-[#0d3b66]/5 to-[#0d3b66]/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F04E30' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
            Have any questions or need a consultation?
          </h3>
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg">
            Our medical experts are here to help. Get in touch with us for any
            medical queries or appointment scheduling.
          </p>

          <Link
            to="/contact"
            href="#"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0d3b66] to-[#0d3b66]/80 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:from-[#0d3b66]/90 hover:to-[#0d3b66]/70 transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
