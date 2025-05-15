
import React from "react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  return (
    <div
      className={`md:hidden ${isOpen ? "block" : "hidden"}`}
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
  );
};

export default MobileMenu;
