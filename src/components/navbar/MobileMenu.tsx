
import React from "react";

interface MobileMenuProps {
  isOpen: boolean;
  children?: React.ReactNode;
}

const MobileMenu = ({ isOpen, children }: MobileMenuProps) => {
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
        {children}
      </div>
    </div>
  );
};

export default MobileMenu;
