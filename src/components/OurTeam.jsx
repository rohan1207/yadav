import React from "react";
import { motion } from "framer-motion";

const doctors = [
  {
    name: "Dr. Sachin V. Yadao",
    qualifications: "B.D.S. (Aurangabad)",
    regNo: "Reg. No. A/19483",
    specialization: "Dental Surgeon",
    image: "/sachin.webp", // Replace with actual image path
  },
  {
    name: "Dr. Anita S. Yadao",
    qualifications: "B.D.S. (Nagpur), M.D.S. Endodontist (Chha. Sambhajinagar)",
    regNo: "Reg. No. A/19485",
    specialization:
      "Cosmetic Dentistry Expert & Root Canal Treatment Specialist",
    image: "/anita.webp", // Replace with actual image path
  },
  {
    name: "Dr. Adinath Jadhao",
    qualifications: "MDS",
    specialization: "Maxiliofacial Surgeon",
    image: "/adinath.webp", // Replace with actual image path
  },
  {
    name: "Dr. Shivam Agrawal",
    qualifications: "MDS",
    specialization: "Orthodontics and Dentofacial Orthopedics",
    image: "/shivam.webp", // Replace with actual image path
  },
  {
    name: "Dr. Abhijit Khade",
    qualifications: "MDS",
    specialization: "Endodontist",
    image: "/abhijit.webp", // Replace with actual image path
  },
  {
    name: "Dr. Dhananjay Gunawat",
    qualifications: "MDS",
    specialization: "Endodontist",
    image: "/dhananjay.webp", // Replace with actual image path
  },
  {
    name: "Dr. Jitendra Shinde",
    qualifications: "MDS",
    specialization: "Prosthodontist",
    image: "/jitendra.webp", // Replace with actual image path
  },
  {
    name: "Dr. Mangesh Andhare",
    qualifications: "MDS",
    specialization: "Periodontics & Oral Implantology",
    image: "/mangesh.webp", // Replace with actual image path
  },
  {
    name: "Dr. Kapil Jadiya",
    qualifications: "MDS",
    specialization: "Endodontist",
    image: "/kapil.webp", // Replace with actual image path
  },
  {
    name: "Dr. Jayant Ambulgikar",
    qualifications: "MDS",
    specialization: "Periodontist",
    image: "/jayant.webp", // Replace with actual image path
  },
  {
    name: "Dr. Rashmi Lokhande",
    qualifications: "MDS",
    specialization: "Pedodontist",
    image: "/rashmi.webp", // Replace with actual image path
  },
  {
    name: "Dr. Namrata Ghunawat",
    qualifications: "MDS",
    specialization: "Orthodontist",
    image: "/namrata.webp", // Replace with actual image path
  },
];

const OurTeam = () => {
  return (
    <div className="bg-[#f8fafc] py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-thin tracking-[0.2em] text-[#0d3b66] mb-4">
            MEET OUR CONSULTING DOCTORS
          </h2>
          <div className="w-24 h-px bg-[#64c4ed] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 border-2 border-transparent hover:border-[#64c4ed]"
            >
              <div className="h-64 sm:h-72 bg-gray-200 flex items-center justify-center">
                {/* Placeholder for image */}
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#0d3b66] mb-1">
                  {doctor.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3 h-10">
                  {doctor.specialization}
                </p>
                <div className="w-16 h-px bg-[#64c4ed] mx-auto mb-3"></div>
                <p className="text-[#0d3b66] font-medium text-sm">
                  {doctor.qualifications}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
