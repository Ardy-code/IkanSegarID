
import React from "react";
import { Fish, Verified, MapPinCheck, BookOpen } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Fish className="h-8 w-8 text-ocean" />,
      title: "Freshly Caught",
      description: "Our fish goes from pond to plate in record time, ensuring peak freshness and taste."
    },
    {
      icon: <Verified className="h-8 w-8 text-ocean" />,
      title: "Source Verified",
      description: "Track your fish's journey with our transparent, blockchain-based verification system."
    },
    {
      icon: <MapPinCheck className="h-8 w-8 text-ocean" />,
      title: "Farmer Direct",
      description: "Buy directly from local farmers, supporting sustainable practices and communities."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-ocean" />,
      title: "Healthy Cooking Guides",
      description: "Access delicious, nutritionist-approved recipes tailored to each fish variety."
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="section-title">Why Choose Aquaharvest?</h2>
          <p className="section-subtitle">
            We've reimagined the farm-to-table experience for freshwater fish, 
            connecting you directly to sustainable sources.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="flex flex-col items-center text-center p-6 rounded-xl transition-all
              opacity-0 animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="bg-nature-light p-4 rounded-full mb-5">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
