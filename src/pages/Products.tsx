
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FeaturedProducts } from "@/components/FeaturedProducts";

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-center mb-12">Katalog Produk</h1>
          <FeaturedProducts fullCatalog={true} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
