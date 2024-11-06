import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-cyan-700 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">Drag & Drop</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          <a href="/about" className="hover:text-gray-400">
            About
          </a>
          <a href="/services" className="hover:text-gray-400">
            Services
          </a>
          <a href="/contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-2xl focus:outline-none"
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>

      {/* Mobile Menu  */}
      <div
        className={`md:hidden  text-white py-0 md:py-4 space-y-4 mt-2 md:mt-4 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ overflow: "hidden" }}
      >
        <a href="/" className="block px-6 py-2 hover:bg-white rounded-md hover:text-gray-700">
          Home
        </a>
        <a href="/about" className="block px-6 py-2 hover:bg-white rounded-md hover:text-gray-700">
          About
        </a>
        <a href="/services" className="block px-6 py-2 hover:bg-white rounded-md hover:text-gray-700">
          Services
        </a>
        <a href="/contact" className="block px-6 py-2 hover:bg-white rounded-md hover:text-gray-700">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
