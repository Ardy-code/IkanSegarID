
import React from "react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image?: string;
  type: "customer" | "farmer";
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "As a restaurant owner, I've never found fish this fresh anywhere else. My customers can taste the difference, and I love supporting local farmers.",
      name: "Maria Johnson",
      role: "Restaurant Owner",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
      type: "customer"
    },
    {
      quote: "Partnering with Aquaharvest has transformed my small farm. Their platform connects me directly to people who value sustainability and quality.",
      name: "Robert Chen",
      role: "Fish Farmer, Blue Creek Aquaculture",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&auto=format&fit=crop&q=60",
      type: "farmer"
    },
    {
      quote: "I love knowing exactly where my food comes from. The tracking feature gives me peace of mind about the quality and ethics of what I'm feeding my family.",
      name: "Sarah Martinez",
      role: "Health-Conscious Parent",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
      type: "customer"
    }
  ];

  return (
    <div className="bg-ocean-dark py-16 text-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="section-title text-white">What Our Community Says</h2>
          <p className="section-subtitle text-white/80">
            We're proud to connect customers and farmers in a transparent ecosystem 
            that benefits everyone involved.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl opacity-0 animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="mb-4">
                <svg className="h-8 w-8 text-ocean-light opacity-80" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <p className="text-white/90 mb-6 italic">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                {testimonial.image && (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                )}
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-white/70 text-sm">{testimonial.role}</p>
                </div>
                {testimonial.type === "farmer" && (
                  <div className="ml-auto bg-nature-green rounded-full px-3 py-1 text-xs text-gray-800 font-medium">
                    Partner Farmer
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
