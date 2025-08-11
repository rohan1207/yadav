import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  HiOutlineCalendar,
  HiOutlineUserGroup,
  HiOutlinePhone,
  HiOutlineHeart,
} from "react-icons/hi";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleEmergencyCall = () => {
    window.location.href = "tel:8008280020";
  };

  const dentalImages = [
    "/dental1.webp",
    "/dental2.webp",
    "/dental3.webp",
    "/dental4.webp",
    "/dental5.webp",
    "/dental6.webp",
    "/dental7.webp",
    "/dental8.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === dentalImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#f8fafc]">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {dentalImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 w-full h-full transition-opacity duration-1000 transform scale-105"
            style={{ opacity: currentImageIndex === index ? 1 : 0 }}
          >
            <img
              src={image}
              alt={`Dental clinic view ${index + 1}`}
              className="w-full h-full object-cover object-center filter brightness-[0.85]"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d3b66]/80 via-[#0d3b66]/60 to-[#64c4ed]/40"></div>
      </div>

      {/* Trust Badges - Top */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20 mt-30">
        <div className="flex items-center gap-4 bg-white/95 px-6 py-2 rounded-full shadow-lg">
          
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 py-16 sm:py-24 flex flex-col items-center text-center">
        <span className="inline-flex items-center px-5 py-2.5 bg-white/95 text-[#0d3b66] rounded-full text-sm sm:text-base font-semibold shadow-lg mb-8 transform hover:scale-105 transition-transform duration-300 mt-5">
        
          <span className="flex items-center text-xs sm:text-sm text-[#0d3b66]">
            <HiOutlineUserGroup className="w-4 h-4 mr-1 text-[#64c4ed]" />
            <span className="hidden sm:inline">Trusted by</span> 1000+ Patients
          </span>
          <span className="w-px h-4 bg-[#0d3b66]/20"></span>
          <span className="flex items-center text-xs sm:text-sm text-[#0d3b66]">
            <HiOutlineHeart className="w-4 h-4 mr-1 text-[#64c4ed]" />
            15+ Years of Excellence
          </span>
        </span>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          Your Perfect Smile <br className="hidden sm:block" />
          <span className="text-[#64c4ed]">Begins Here</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
          Experience world-class dentistry in a serene, state-of-the-art
          environment. Our expert team ensures your comfort while delivering
          exceptional care for your perfect smile.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Link
            to="/contact"
            className="w-full sm:w-auto bg-[#64c4ed] hover:bg-[#5bb1d8] text-[#0d3b66] font-bold px-8 py-4 rounded-full flex items-center justify-center gap-3 transition-all duration-300 shadow-xl hover:shadow-2xl text-lg transform hover:-translate-y-0.5"
          >
            <HiOutlineCalendar className="h-6 w-6" />
            Book Appointment
          </Link>
          <a
            href="tel:8008280020"
            className="w-full sm:w-auto bg-white/95 hover:bg-[#0d3b66] text-[#0d3b66] hover:text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            onClick={(e) => {
              if (!/mobile|android|iphone/i.test(navigator.userAgent)) {
                e.preventDefault();
                handleEmergencyCall();
              }
            }}
          >
            <HiOutlinePhone className="h-6 w-6" />
            Emergency Care
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-row gap-2 sm:gap-6 w-full max-w-3xl mx-auto overflow-x-auto px-2 pb-2">
          <div className="group bg-white/95 rounded-xl p-3 sm:p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex-1 min-w-[100px]">
            <div className="text-2xl sm:text-4xl font-bold text-[#0d3b66] mb-0.5 sm:mb-2 group-hover:text-[#64c4ed] transition-colors">
              1000+
            </div>
            <div className="text-xs sm:text-sm font-medium text-[#0d3b66]/80">
              Happy Smiles
            </div>
          </div>
          <div className="group bg-white/95 rounded-xl p-3 sm:p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex-1 min-w-[100px]">
            <div className="text-2xl sm:text-4xl font-bold text-[#0d3b66] mb-0.5 sm:mb-2 group-hover:text-[#64c4ed] transition-colors">
              10+
            </div>
            <div className="text-xs sm:text-sm font-medium text-[#0d3b66]/80">
              Specialists
            </div>
          </div>
          <div className="group bg-white/95 rounded-xl p-3 sm:p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex-1 min-w-[100px]">
            <div className="text-2xl sm:text-4xl font-bold text-[#0d3b66] mb-0.5 sm:mb-2 group-hover:text-[#64c4ed] transition-colors">
              15+
            </div>
            <div className="text-xs sm:text-sm font-medium text-[#0d3b66]/80">
              Years
            </div>
          </div>
        </div>
      </div>

      {/* Modern Abstract Shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#64c4ed]/20 rounded-full blur-3xl opacity-75 mix-blend-multiply"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0d3b66]/20 rounded-full blur-3xl opacity-75 mix-blend-multiply"></div>
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-[#64c4ed]/10 rounded-full blur-2xl"></div>
    </div>
  );
};

export default Hero;
