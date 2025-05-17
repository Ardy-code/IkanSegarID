
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, selector: string) => {
    e.preventDefault();
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`md:hidden ${isOpen ? "block" : "hidden"}`}
      id="mobile-menu"
    >
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
        <Link
          to="/"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
        >
          Beranda
        </Link>
        <Link
          to="/products"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
        >
          Produk
        </Link>
        <Link
          to="/fish-traceability"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
        >
          Lacak Ikan
        </Link>
        <Link
          to="/#recipes"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
        >
          Resep
        </Link>
        <a
          href="#about"
          onClick={(e) => handleScrollToSection(e, "#about")}
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
        >
          Tentang Kami
        </a>
        <a
          href="#contact"
          onClick={(e) => handleScrollToSection(e, "#contact")}
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
  );
};

export default MobileMenu;
