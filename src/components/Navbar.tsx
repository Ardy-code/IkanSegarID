
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Fish } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-2">
              <Fish className="h-8 w-8 text-ocean" />
              <span className="font-bold text-2xl text-gray-800">
                Aqua<span className="text-ocean">harvest</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a
              href="#"
              className="text-gray-700 hover:text-ocean hover:underline underline-offset-8 px-2 py-1 font-medium"
            >
              Beranda
            </a>
            <a
              href="#products"
              className="text-gray-700 hover:text-ocean hover:underline underline-offset-8 px-2 py-1 font-medium"
            >
              Produk
            </a>
            <a
              href="#track"
              className="text-gray-700 hover:text-ocean hover:underline underline-offset-8 px-2 py-1 font-medium"
            >
              Lacak Ikan
            </a>
            <a
              href="#recipes"
              className="text-gray-700 hover:text-ocean hover:underline underline-offset-8 px-2 py-1 font-medium"
            >
              Resep
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-ocean hover:underline underline-offset-8 px-2 py-1 font-medium"
            >
              Tentang Kami
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-ocean hover:underline underline-offset-8 px-2 py-1 font-medium"
            >
              Kontak
            </a>
          </div>

          {/* Login/Register Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-3">
            <Button variant="outline" className="hover:bg-ocean hover:text-white">
              Masuk
            </Button>
            <Button variant="default" className="bg-ocean hover:bg-ocean-dark">
              Daftar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Buka menu utama</span>
              {/* Hamburger Icon */}
              {!isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            Beranda
          </a>
          <a
            href="#products"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            Produk
          </a>
          <a
            href="#track"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            Lacak Ikan
          </a>
          <a
            href="#recipes"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            Resep
          </a>
          <a
            href="#about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            Tentang Kami
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
          >
            Kontak
          </a>
          <div className="flex space-x-2 mt-3 px-3">
            <Button variant="outline" className="w-1/2">
              Masuk
            </Button>
            <Button variant="default" className="w-1/2 bg-ocean">
              Daftar
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
