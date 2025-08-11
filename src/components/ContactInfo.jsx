import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start p-4 sm:p-6 gap-6 sm:gap-8 w-full max-w-4xl mx-auto z-10 ">
      {/* Address */}
      <div className="flex items-start gap-3 w-full sm:w-1/3">
        <div className="w-10 h-10 sm:w-9 sm:h-9 bg-[#0d3b66] rounded-lg flex justify-center items-center shrink-0">
          <FaMapMarkerAlt className="text-[#64c4ed] text-lg sm:text-base" />
        </div>
        <div className="text-left">
          <div className="flex items-center">
            <h3 className="font-semibold text-base sm:text-lg text-[#0d3b66]">
              Clinic Address
            </h3>
          </div>
          <a
            href="https://maps.app.goo.gl/yRiS3JvhrWyccoNJ7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 text-sm leading-tight mt-1 hover:text-black transition-colors duration-200 block"
          >
            Shri Shivaji Chowk, Chikhli, Dist. Buldana - 443201
          </a>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start gap-3 w-full sm:w-1/3">
        <div className="w-10 h-10 sm:w-9 sm:h-9 bg-[#0d3b66] rounded-lg flex justify-center items-center shrink-0">
          <FaPhoneAlt className="text-[#64c4ed] text-lg sm:text-base" />
        </div>
        <div className="text-left">
          <div className="flex items-center">
            <h3 className="font-semibold text-base sm:text-lg text-[#0d3b66]">
              Emergency Contact
            </h3>
          </div>
          <p className="text-gray-600 text-sm leading-tight mt-1">
            <a
              href="tel:+919340965799"
              className="hover:text-black transition-colors duration-200"
            >
              9604716761
            </a>
            <br />
          </p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start gap-3 w-full sm:w-1/3">
        <div className="w-10 h-10 sm:w-9 sm:h-9 bg-[#0d3b66] rounded-lg flex justify-center items-center shrink-0">
          <FaEnvelope className="text-[#64c4ed] text-lg sm:text-base" />
        </div>
        <div className="text-left">
          <div className="flex items-center">
            <h3 className="font-semibold text-base sm:text-lg text-[#0d3b66]">
              Email Us
            </h3>
          </div>
          <p className="text-gray-600 text-sm leading-tight mt-1">
            <a
              href="mailto:ujwaldentalcare@gmail.com"
              className="hover:text-black transition-colors duration-200"
            >
              ujwaldentalcare@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
