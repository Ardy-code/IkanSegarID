
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import FeaturedProducts from "@/components/FeaturedProducts";
import TrackOrigin from "@/components/TrackOrigin";
import HealthyRecipes from "@/components/HealthyRecipes";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Benefits />
      <FeaturedProducts />
      <TrackOrigin />
      <HealthyRecipes />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
