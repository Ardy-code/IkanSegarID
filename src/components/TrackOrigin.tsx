
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Calendar, Verified, ChefHat } from "lucide-react";

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
      setError("Silakan masukkan ID pelacakan");
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
          farm: "Peternakan Aqua Jernih",
          farmer: "John Miller",
          location: "Springfield, Oregon",
          harvestDate: "10 Mei 2025",
          species: "Ikan Trout Pelangi",
          feedType: "Pakan berbasis tanaman organik",
          certifications: ["Panen Berkelanjutan Tersertifikasi", "Mitra Air Bersih"],
          image: "https://images.unsplash.com/photo-1518890569493-668df9a00266?w=500&auto=format&fit=crop&q=80"
        });
      } else {
        setError("Tidak ditemukan informasi pelacakan untuk ID ini. Coba FISH123 untuk demo.");
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
              Lacak Perjalanan Ikan Anda
            </h2>
            <p className="text-gray-600 mb-6">
              Setiap produk Aquaharvest dilengkapi dengan ID pelacakan unik yang 
              memungkinkan Anda melacak ikan Anda dari peternakan ke meja Anda, 
              memastikan transparansi dan keberlanjutan dalam setiap pembelian.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
              <div>
                <label htmlFor="tracking-id" className="block text-sm font-medium text-gray-700 mb-1">
                  Masukkan ID Pelacakan Produk
                </label>
                <div className="flex gap-2">
                  <Input
                    id="tracking-id"
                    placeholder="mis. FISH123"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    className="flex-1"
                  />
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="bg-ocean hover:bg-ocean-dark"
                  >
                    {isLoading ? "Melacak..." : "Lacak Sekarang"}
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
                      <p className="font-medium">Lokasi Peternakan</p>
                      <p className="text-gray-600">{result.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-ocean mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium">Tanggal Panen</p>
                      <p className="text-gray-600">{result.harvestDate}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <ChefHat className="h-5 w-5 text-ocean mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium">Peternak</p>
                      <p className="text-gray-600">{result.farmer}, {result.farm}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <ChefHat className="h-5 w-5 text-ocean mr-2 mt-0.5" />
                    <div>
                      <p className="font-medium">Jenis Pakan</p>
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
              alt="Peternak ikan memeriksa kualitas air" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Temui Peternak Kami</h3>
                <p className="mb-4">
                  Jaringan peternak lokal kami yang berdedikasi memprioritaskan keberlanjutan dan kualitas dalam setiap panen.
                </p>
                <Button variant="outline" className="bg-white/20 hover:bg-white/30 text-white border-white/40">
                  Pelajari Lebih Lanjut
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
