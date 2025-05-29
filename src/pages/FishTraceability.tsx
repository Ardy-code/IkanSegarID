
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import TracingTutorial from "@/components/TracingTutorial";
import { useUserContent } from "@/contexts/UserContentContext";
import { toast } from "sonner";

interface TrackingResult {
  fishType: string;
  harvestDate: string;
  processingDate: string;
  batchCode: string;
  farm: string;
  location: string;
  farmingMethod: string;
  certification: string;
  journey: {
    step: string;
    title: string;
    description: string;
  }[];
}

const validTrackingCodes = ["FISH123", "NL20230515", "KP20230612", "TN20230730"];

const getTrackingData = (code: string): TrackingResult | null => {
  // Mock API response based on tracking code
  switch (code) {
    case "FISH123":
      return {
        fishType: "Ikan Nila",
        harvestDate: "15 Mei 2023",
        processingDate: "16 Mei 2023",
        batchCode: "#NL-2023-05-15-A",
        farm: "Kolam Sejahtera",
        location: "Sungai Cisadane, Bogor, Jawa Barat",
        farmingMethod: "Kolam Air Tawar Berkelanjutan",
        certification: "Aquaculture Stewardship Council (ASC)",
        journey: [
          {
            step: "1",
            title: "Pembudidayaan",
            description: "Ikan dibudidayakan dalam kolam dengan standar keberlanjutan tinggi."
          },
          {
            step: "2",
            title: "Pemanenan",
            description: "Panen dilakukan dengan teknik yang meminimalkan stres pada ikan."
          },
          {
            step: "3",
            title: "Pengolahan",
            description: "Pengolahan dilakukan dengan standar keamanan pangan tertinggi."
          },
          {
            step: "4",
            title: "Distribusi",
            description: "Produk didistribusikan dengan rantai dingin untuk memastikan kesegaran."
          },
          {
            step: "5",
            title: "Toko/Pengiriman",
            description: "Sampai ke tangan Anda dengan kualitas premium."
          }
        ]
      };
    case "NL20230515":
      return {
        fishType: "Ikan Nila Merah",
        harvestDate: "15 Mei 2023",
        processingDate: "16 Mei 2023",
        batchCode: "#NL-2023-05-15-B",
        farm: "Peternakan Nila Jaya",
        location: "Waduk Cirata, Purwakarta, Jawa Barat",
        farmingMethod: "KJA (Keramba Jaring Apung)",
        certification: "Global G.A.P.",
        journey: [
          {
            step: "1",
            title: "Pembudidayaan",
            description: "Ikan dibudidayakan dalam keramba jaring apung dengan standar keberlanjutan."
          },
          {
            step: "2",
            title: "Pemanenan",
            description: "Panen dilakukan dengan teknik yang meminimalkan stres pada ikan."
          },
          {
            step: "3",
            title: "Pengolahan",
            description: "Pengolahan dilakukan dengan standar HACCP."
          },
          {
            step: "4",
            title: "Distribusi",
            description: "Produk didistribusikan dengan rantai dingin untuk memastikan kesegaran."
          },
          {
            step: "5",
            title: "Toko/Pengiriman",
            description: "Sampai ke tangan Anda dengan kualitas premium."
          }
        ]
      };
    default:
      return null;
  }
};

const FishTraceability = () => {
  const [trackingCode, setTrackingCode] = useState("");
  const [result, setResult] = useState<TrackingResult | null>(null);
  const [userProduct, setUserProduct] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const { getProductByTrackingCode } = useUserContent();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!trackingCode.trim()) {
      setIsValid(false);
      return;
    }

    setIsLoading(true);
    setIsValid(true);

    // Simulate API call
    setTimeout(() => {
      // First check user products
      const userProd = getProductByTrackingCode(trackingCode);
      
      if (userProd) {
        setUserProduct(userProd);
        setResult(null);
        toast.success("Produk komunitas ditemukan!");
      } else {
        // Check predefined tracking codes
        const data = getTrackingData(trackingCode);
        
        if (data) {
          setResult(data);
          setUserProduct(null);
          toast.success("Data pelacakan berhasil ditemukan!");
        } else {
          setResult(null);
          setUserProduct(null);
          toast.error("Kode pelacakan tidak ditemukan. Coba gunakan FISH123 untuk contoh.");
        }
      }
      
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Lacak Asal Ikan Anda</h1>
            <p className="text-lg text-gray-600">
              Masukkan kode pelacakan yang terdapat pada kemasan produk Anda untuk 
              melihat informasi lengkap tentang asal usul ikan Anda.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Sistem Pelacakan Asal Ikan</CardTitle>
              <CardDescription>
                Transparansi dan keberlanjutan adalah prioritas kami
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-4 flex-col sm:flex-row">
                  <Input
                    placeholder="Masukkan kode pelacakan (coba: FISH123)"
                    value={trackingCode}
                    onChange={(e) => setTrackingCode(e.target.value)}
                    className={`flex-grow ${!isValid ? 'border-red-500' : ''}`}
                    required
                  />
                  <Button 
                    type="submit"
                    className="bg-ocean hover:bg-ocean-dark"
                    disabled={isLoading}
                  >
                    {isLoading ? "Mencari..." : "Lacak Sekarang"}
                  </Button>
                </div>
                {!isValid && (
                  <p className="text-red-500 text-sm">Silakan masukkan kode pelacakan</p>
                )}
                <div className="text-sm text-gray-500 mt-2">
                  <p>Kode contoh: FISH123, NL20230515</p>
                </div>
              </form>
            </CardContent>
          </Card>

          {userProduct && (
            <Card className="animate-fade-in mb-8">
              <CardHeader>
                <CardTitle>Produk Komunitas Ditemukan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <img 
                      src={userProduct.image} 
                      alt={userProduct.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{userProduct.name}</h3>
                    <p className="text-gray-600 mb-4">{userProduct.description}</p>
                    <div className="space-y-2">
                      <p><span className="font-medium">Kategori:</span> {userProduct.category}</p>
                      <p><span className="font-medium">Lokasi:</span> {userProduct.location}</p>
                      <p><span className="font-medium">Harga:</span> Rp {userProduct.price.toLocaleString('id-ID')}</p>
                      <p><span className="font-medium">Tanggal Upload:</span> {new Date(userProduct.createdAt).toLocaleDateString('id-ID')}</p>
                      <p><span className="font-medium">Kode Pelacakan:</span> {userProduct.trackingCode}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                  <p className="text-green-800 text-sm">
                    Ini adalah produk yang dijual oleh anggota komunitas IkanSegarID. Produk ini telah melalui verifikasi dasar platform kami.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {result && (
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Hasil Pelacakan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Informasi Produk</h3>
                      <p><span className="font-medium">Jenis Ikan:</span> {result.fishType}</p>
                      <p><span className="font-medium">Tanggal Panen:</span> {result.harvestDate}</p>
                      <p><span className="font-medium">Tanggal Pengolahan:</span> {result.processingDate}</p>
                      <p><span className="font-medium">Kode Batch:</span> {result.batchCode}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Asal Usul</h3>
                      <p><span className="font-medium">Peternakan:</span> {result.farm}</p>
                      <p><span className="font-medium">Lokasi:</span> {result.location}</p>
                      <p><span className="font-medium">Metode Budidaya:</span> {result.farmingMethod}</p>
                      <p><span className="font-medium">Sertifikasi:</span> {result.certification}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Perjalanan Produk</h3>
                    <div className="relative">
                      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                      <div className="space-y-6 relative">
                        {result.journey.map((stage, index) => (
                          <div className="flex gap-4" key={index}>
                            <div className="w-8 h-8 rounded-full bg-ocean flex items-center justify-center text-white relative z-10">
                              {stage.step}
                            </div>
                            <div>
                              <p className="font-medium">{stage.title}</p>
                              <p className="text-sm text-gray-600">{stage.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          {/* Tutorial section */}
          <div className="mt-16">
            <TracingTutorial />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FishTraceability;
