
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import TracingTutorial from "@/components/TracingTutorial";

const FishTraceability = () => {
  const [trackingCode, setTrackingCode] = React.useState("");
  const [searchPerformed, setSearchPerformed] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchPerformed(true);
    // Here you would typically fetch tracking data based on the code
    console.log("Tracking fish with code:", trackingCode);
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
                    placeholder="Masukkan kode pelacakan"
                    value={trackingCode}
                    onChange={(e) => setTrackingCode(e.target.value)}
                    className="flex-grow"
                    required
                  />
                  <Button 
                    type="submit"
                    className="bg-ocean hover:bg-ocean-dark"
                  >
                    Lacak Sekarang
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {searchPerformed && (
            <Card>
              <CardHeader>
                <CardTitle>Hasil Pelacakan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {trackingCode ? (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Informasi Produk</h3>
                          <p><span className="font-medium">Jenis Ikan:</span> Ikan Nila</p>
                          <p><span className="font-medium">Tanggal Panen:</span> 15 Mei 2023</p>
                          <p><span className="font-medium">Tanggal Pengolahan:</span> 16 Mei 2023</p>
                          <p><span className="font-medium">Kode Batch:</span> #NL-2023-05-15-A</p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Asal Usul</h3>
                          <p><span className="font-medium">Peternakan:</span> Kolam Sejahtera</p>
                          <p><span className="font-medium">Lokasi:</span> Sungai Cisadane, Bogor, Jawa Barat</p>
                          <p><span className="font-medium">Metode Budidaya:</span> Kolam Air Tawar Berkelanjutan</p>
                          <p><span className="font-medium">Sertifikasi:</span> Aquaculture Stewardship Council (ASC)</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Perjalanan Produk</h3>
                        <div className="relative">
                          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                          <div className="space-y-6 relative">
                            <div className="flex gap-4">
                              <div className="w-8 h-8 rounded-full bg-ocean flex items-center justify-center text-white relative z-10">1</div>
                              <div>
                                <p className="font-medium">Pembudidayaan</p>
                                <p className="text-sm text-gray-600">Ikan dibudidayakan dalam kolam dengan standar keberlanjutan tinggi.</p>
                              </div>
                            </div>
                            <div className="flex gap-4">
                              <div className="w-8 h-8 rounded-full bg-ocean flex items-center justify-center text-white relative z-10">2</div>
                              <div>
                                <p className="font-medium">Pemanenan</p>
                                <p className="text-sm text-gray-600">Panen dilakukan dengan teknik yang meminimalkan stres pada ikan.</p>
                              </div>
                            </div>
                            <div className="flex gap-4">
                              <div className="w-8 h-8 rounded-full bg-ocean flex items-center justify-center text-white relative z-10">3</div>
                              <div>
                                <p className="font-medium">Pengolahan</p>
                                <p className="text-sm text-gray-600">Pengolahan dilakukan dengan standar keamanan pangan tertinggi.</p>
                              </div>
                            </div>
                            <div className="flex gap-4">
                              <div className="w-8 h-8 rounded-full bg-ocean flex items-center justify-center text-white relative z-10">4</div>
                              <div>
                                <p className="font-medium">Distribusi</p>
                                <p className="text-sm text-gray-600">Produk didistribusikan dengan rantai dingin untuk memastikan kesegaran.</p>
                              </div>
                            </div>
                            <div className="flex gap-4">
                              <div className="w-8 h-8 rounded-full bg-ocean flex items-center justify-center text-white relative z-10">5</div>
                              <div>
                                <p className="font-medium">Toko/Pengiriman</p>
                                <p className="text-sm text-gray-600">Sampai ke tangan Anda dengan kualitas premium.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <p className="text-center text-gray-500">
                      Kode pelacakan tidak valid. Silakan periksa kembali kode yang Anda masukkan.
                    </p>
                  )}
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
