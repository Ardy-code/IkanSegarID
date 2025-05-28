
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HealthyRecipes from "@/components/HealthyRecipes";
import UserRecipeGrid from "@/components/UserRecipeGrid";

const Recipes = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Resep Sehat IkanSegarID</h1>
            <p className="text-xl text-gray-600 mb-8">
              Temukan berbagai resep lezat dan bergizi untuk menyiapkan hidangan dari produk ikan IkanSegarID
            </p>
          </div>
        </div>
      </div>
      <UserRecipeGrid />
      <HealthyRecipes />
      <Footer />
    </div>
  );
};

export default Recipes;
