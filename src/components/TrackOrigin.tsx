
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Calendar, Verified, Chef, ChefHat } from "lucide-react";

interface TrackingResult {
  id: string;
  farm: string;
  farmer: string;
  location: string;
  harvestDate: string;
  species: string;
  feedType: string;
  certifications: string[];
  image: string;
}

const TrackOrigin = () => {
  const [trackingId, setTrackingId] = useState("");
  const [result, setResult] = useState<TrackingResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!trackingId) {
      setError("Please enter a tracking ID");
      return;
    }
    
    setIsLoading(true);
    setError("");
    
    // Simulate API call
    setTimeout(() => {
      // Demo data - in a real app, this would come from an API
      if (trackingId === "FISH123") {
        setResult({
          id: "FISH123",
          farm: "Clear Water Aquafarm",
          farmer: "John Miller",
          location: "Springfield, Oregon",
          harvestDate: "May 10, 2025",
          species: "Rainbow Trout",
          feedType: "Organic plant-based feed",
          certifications: ["Sustainable Harvest Certified", "Clean Water Partner"],
          image: "https://images.unsplash.com/photo-1518890569493-668df9a00266?w=500&auto=format&fit=crop&q=80"
        });
      } else {
        setError("No tracking information found for this ID. Try FISH123 for a demo.");
        setResult(null);
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div id="track" className="bg-white py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Track Your Fish's Journey
            </h2>
            <p className="text-gray-600 mb-6">
              Every Aquaharvest product comes with a unique tracking ID that allows
              you to trace your fish from the farm to your table, ensuring 
              transparency and sustainability in every purchase.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
              <div>
                <label htmlFor="tracking-id" className="block text-sm font-medium text-gray-700 mb-1">
                  Enter Product Tracking ID
                </label>
                <div className="flex gap-2">
                  <Input
                    id="tracking-id"
                    placeholder="e.g. FISH123"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    className="flex-1"
                  />
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="bg-ocean hover:bg-ocean-dark"
                  >
                    {isLoading ? "Tracking..." : "Track Now"}
                  </Button>
                </div>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>
            </form>
            
            {result && (
              <div className="bg-ocean/5 rounded-lg p-6 border border-ocean/20 animate-fade-in">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-ocean/20 flex items-center justify-center mr-4">
                    <Verified className="h-6 w-6 text-ocean" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{result.species}</h3>
                    <p className="text-gray-600">ID: {result.id}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-ocean mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium">Farm Location</p>
                      <p className="text-gray-600">{result.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-ocean mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium">Harvest Date</p>
                      <p className="text-gray-600">{result.harvestDate}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <ChefHat className="h-5 w-5 text-ocean mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium">Farmer</p>
                      <p className="text-gray-600">{result.farmer}, {result.farm}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Chef className="h-5 w-5 text-ocean mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium">Feed Type</p>
                      <p className="text-gray-600">{result.feedType}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {result.certifications.map((cert) => (
                    <span 
                      key={cert} 
                      className="bg-nature-green text-sm px-3 py-1 rounded-full text-gray-700"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&auto=format&fit=crop&q=80" 
              alt="Fish farmer checking water quality" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Meet Our Farmers</h3>
                <p className="mb-4">
                  Our network of dedicated local farmers prioritize sustainability and quality in every harvest.
                </p>
                <Button variant="outline" className="bg-white/20 hover:bg-white/30 text-white border-white/40">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrigin;
