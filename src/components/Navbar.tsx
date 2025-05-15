
import React, { useState } from "react";
import { useScrollEffect } from "@/hooks/useScrollEffect";
import Logo from "@/components/navbar/Logo";
import { NavLinks } from "@/components/navbar/NavLinks";
import MobileMenuButton from "@/components/navbar/MobileMenuButton";
import MobileMenu from "@/components/navbar/MobileMenu";
import AuthButtons from "@/components/navbar/AuthButtons";

const Navbar = () => {
  const isScrolled = useScrollEffect(50);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <NavLinks />
          </div>

          {/* Login/Register Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-3">
            <AuthButtons />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <MobileMenuButton isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} />
    </nav>
  );
};

export default Navbar;
