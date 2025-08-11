import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX, HiPhone, HiClock } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuItems = [
    { title: "Home", link: "/" },

    { title: "Services", link: "/services" },
    { title: "About Us", link: "/about" },

    { title: "Our Gallery", link: "/gallery" },

    { title: "Contact Us", link: "/contact" },
  ];

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed w-full z-50 px-4 py-1 transition-all duration-300">
        <div
          className={`mx-auto max-w-7xl min-h-[60px] bg-white/95 backdrop-blur-md rounded-full px-4 py-2 transition-all duration-300 ${
            scrolled ? "shadow-lg" : "shadow-md"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center"
                >
                  <img
                    src="/logo.png"
                    alt="Hospital Logo"
                    className="h-[40px] sm:h-[80px] w-auto object-contain max-w-[180px] sm:max-w-[200px]"
                  />
                </motion.div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex flex-1 justify-center">
              <div className="flex items-center space-x-6">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.link}
                      className="relative px-4 py-2 text-gray-700 hover:text-white font-medium transition-all duration-200 rounded-full hover:bg-[#0d3b66]"
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Social Icons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="mailto:info@ujwaldental.com"
                className="text-gray-700 hover:text-[#0d3b66]"
              >
                <FiMail size={20} />
              </a>
              <a
                href="https://instagram.com/ujwaldentalclinic"
                className="text-gray-700 hover:text-[#0d3b66]"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://wa.me/1234567890"
                className="text-gray-700 hover:text-[#0d3b66]"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          className={`lg:hidden fixed inset-0 bg-white/95 backdrop-blur-md z-50 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="min-h-screen flex flex-col h-[100dvh]">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-6 py-3">
              <Link to="/">
                <img
                  src="/logo.png"
                  alt="Hospital Logo"
                  className="h-8 w-auto"
                />
              </Link>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <HiX size={24} />
              </motion.button>
            </div>

            {/* Mobile Menu Items */}
            <div className="flex-1 overflow-y-auto px-4 py-4">
              <div className="space-y-1">
                {menuItems.map((item) => (
                  <motion.div key={item.title} whileHover={{ x: 5 }}>
                    <Link
                      to={item.link}
                      className="block px-6 py-2.5 text-gray-700 hover:text-amber-600 hover:bg-amber-50 rounded-full font-medium transition-all duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Menu Footer - Fixed at bottom */}
            <div className="px-6 py-4 space-y-2 border-t border-gray-100 bg-white/80 backdrop-blur-sm">
              <Link to="/doctors">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-amber-50 text-amber-600 px-6 py-2.5 rounded-full font-medium transition-all duration-200 text-center hover:bg-amber-100"
                >
                  Find a Doctor
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
