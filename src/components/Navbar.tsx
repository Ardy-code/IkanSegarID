import React, { useState } from "react";
import { useScrollEffect } from "@/hooks/useScrollEffect";
import Logo from "@/components/navbar/Logo";
import { NavLinks } from "@/components/navbar/NavLinks";
import MobileMenuButton from "@/components/navbar/MobileMenuButton";
import MobileMenu from "@/components/navbar/MobileMenu";
import AuthButtons from "@/components/navbar/AuthButtons";
import UserMenu from "@/components/navbar/UserMenu";
import CartDropdown from "@/components/cart/CartDropdown";

const Navbar = () => {
  const isScrolled = useScrollEffect(50);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        isScrolled || isMenuOpen ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Logo />
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <NavLinks />
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <CartDropdown />
            <UserMenu />
          </div>

          <div className="md:hidden">
            <MobileMenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen}>
        <NavLinks />
        <div className="pt-4 pb-1 border-t border-gray-200 flex items-center justify-between">
          <CartDropdown side="bottom" />
        </div>
        <div className="pb-3">
          <UserMenu isMobile={true} />
        </div>
      </MobileMenu>
    </div>
  );
};

export default Navbar;
