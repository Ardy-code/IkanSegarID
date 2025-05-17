
import React from "react";
import { Link } from "react-router-dom";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
};

export const NavLink = ({ href, children, isExternal = false }: NavLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#') && !isExternal) {
      e.preventDefault();
      // Handle smooth scrolling to section in current page
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (isExternal || href.startsWith('#')) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className="text-gray-700 hover:text-ocean hover:underline underline-offset-8 px-2 py-1 font-medium"
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      to={href}
      className="text-gray-700 hover:text-ocean hover:underline underline-offset-8 px-2 py-1 font-medium"
    >
      {children}
    </Link>
  );
};

export const NavLinks = () => {
  return (
    <>
      <NavLink href="/">Beranda</NavLink>
      <NavLink href="/products">Produk</NavLink>
      <NavLink href="/fish-traceability">Lacak Ikan</NavLink>
      <NavLink href="/#recipes">Resep</NavLink>
      <NavLink href="#about">Tentang Kami</NavLink>
      <NavLink href="#contact">Kontak</NavLink>
    </>
  );
};
