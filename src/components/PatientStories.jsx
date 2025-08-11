import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./PatientStories.css"; // Import the new CSS file

const testimonials = [
  {
    name: "Sunita Patil",
    treatment: "Root Canal Treatment",
    story:
      "I was anxious about a root canal, but Dr. Yadao’s gentle approach at Ujwal Dental Clinic made it completely pain-free. My tooth feels healthy again!",
  },
  {
    name: "Ravi Desai",
    treatment: "Dental Implant",
    story:
      "After losing a tooth, I opted for a dental implant here. Dr. Andhare’s expertise gave me a natural-looking smile and restored my confidence.",
  },
  {
    name: "Neha Sharma",
    treatment: "Cosmetic Veneers",
    story:
      "The porcelain veneers I received have transformed my smile. The team at Ujwal Dental Clinic was attentive and made sure the results were perfect.",
  },
  {
    name: "Arjun Kulkarni",
    treatment: "Braces Treatment",
    story:
      "I never thought braces could be this comfortable. Dr. Agrawal’s clear aligners straightened my teeth discreetly, and I love my new smile.",
  },
  {
    name: "Priya Mehta",
    treatment: "Professional Cleaning",
    story:
      "The scaling and polishing session was thorough and gentle. My teeth have never felt cleaner. Highly recommended for preventive care!",
  },
  {
    name: "Anita Rao",
    treatment: "All-On-4 Denture",
    story:
      "The full-arch denture solution has given me back my ability to eat and speak with ease. Dr. Shinde and his team were exceptional throughout the process.",
  },
];

// Duplicate testimonials for a seamless loop
const duplicatedTestimonials = [...testimonials, ...testimonials];

const PatientStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [isMobile]);

  const handleDragEnd = (event, info) => {
    if (!isMobile) return;

    const swipe = info.offset.x;
    if (Math.abs(swipe) > 50) {
      if (swipe > 0) {
        setCurrentIndex(
          (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
      } else {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }
    }
  };

  if (isMobile) {
    return (
      <section className="py-10 px-4 bg-gray-50 text-center overflow-hidden">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
          Patient Stories
        </h2>
        <div className="relative w-full h-[320px] mx-auto">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              className="absolute inset-0 p-2"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
            >
              <StoryCard story={testimonials[currentIndex]} />
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#f04e30] w-4" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-20 px-4 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 bg-gradient-to-r from-[#0d3b66] to-[#0d3b66] bg-clip-text text-transparent">
            Patient Stories
          </h2>
          <p className="text-gray-600">
            Real experiences shared by our valued patients about their journey
            to better health
          </p>
        </div>

        <div className="scroller-container">
          <div className="scroller-content">
            {duplicatedTestimonials.map((testimonial, index) => (
              <StoryCard key={index} story={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StoryCard = ({ story }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col h-full border-t-4 border-[#0d3b66]">
      <p className="text-gray-600 italic text-base mb-4 flex-grow">
        "{story.story}"
      </p>
      <div className="mt-auto">
        <p className="font-bold text-gray-900 text-lg">{story.name}</p>
        <p className="text-teal-600 font-medium">{story.treatment}</p>
      </div>
    </div>
  );
};

export default PatientStories;
