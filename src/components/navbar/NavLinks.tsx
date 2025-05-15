
import React from "react";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <a
      href={href}
      className="text-gray-700 hover:text-ocean hover:underline underline-offset-8 px-2 py-1 font-medium"
    >
      {children}
    </a>
  );
};

export const NavLinks = () => {
  return (
    <>
      <NavLink href="#">Beranda</NavLink>
      <NavLink href="#products">Produk</NavLink>
      <NavLink href="#track">Lacak Ikan</NavLink>
      <NavLink href="#recipes">Resep</NavLink>
      <NavLink href="#about">Tentang Kami</NavLink>
      <NavLink href="#contact">Kontak</NavLink>
    </>
  );
};
