
import React from "react";
import { Fish, Verified, MapPinCheck, BookOpen } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Fish className="h-8 w-8 text-ocean" />,
      title: "Baru Ditangkap",
      description: "Ikan kami dari kolam ke piring dalam waktu singkat, memastikan kesegaran dan rasa terbaik."
    },
    {
      icon: <Verified className="h-8 w-8 text-ocean" />,
      title: "Sumber Terverifikasi",
      description: "Lacak perjalanan ikan Anda dengan sistem verifikasi blockchain transparan kami."
    },
    {
      icon: <MapPinCheck className="h-8 w-8 text-ocean" />,
      title: "Langsung dari Peternak",
      description: "Beli langsung dari peternak lokal, mendukung praktik berkelanjutan dan komunitas."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-ocean" />,
      title: "Panduan Memasak Sehat",
      description: "Akses resep lezat yang disetujui ahli gizi dan disesuaikan untuk setiap jenis ikan."
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="section-title">Mengapa Memilih Aquaharvest?</h2>
          <p className="section-subtitle">
            Kami telah merancang ulang pengalaman dari-peternakan-ke-meja untuk ikan air tawar, 
            menghubungkan Anda langsung ke sumber berkelanjutan.
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
