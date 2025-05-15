
import React from "react";
import { Button } from "@/components/ui/button";
import { Verified } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  farmer: string;
  location: string;
}

const FeaturedProducts = () => {
  const products: Product[] = [
    {
      id: "trout-001",
      name: "Fillet Ikan Trout Pelangi",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1498654200943-1088dd4438ae?w=500&auto=format&fit=crop&q=80",
      farmer: "Peternakan Lembah Hijau",
      location: "Springfield, OR"
    },
    {
      id: "tilapia-002",
      name: "Ikan Tilapia Segar",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1594044534949-28737ddc9e94?w=500&auto=format&fit=crop&q=80",
      farmer: "Budidaya Sungai Biru",
      location: "Portland, OR"
    },
    {
      id: "catfish-003",
      name: "Fillet Ikan Lele",
      price: 10.99,
      image: "https://images.unsplash.com/photo-1565529197662-af732fb4a1ff?w=500&auto=format&fit=crop&q=80",
      farmer: "Peternakan Riverside",
      location: "Eugene, OR"
    },
    {
      id: "salmon-004",
      name: "Ikan Salmon Steelhead",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format&fit=crop&q=80",
      farmer: "Perikanan Arus Gunung",
      location: "Bend, OR"
    }
  ];

  return (
    <div id="products" className="bg-gray-50 py-16">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="section-title">Produk Unggulan</h2>
          <p className="section-subtitle">
            Jelajahi pilihan ikan yang baru dipanen dari peternakan lokal,
            semuanya bersumber secara berkelanjutan dan dikirim dengan kesegaran terbaik.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="card opacity-0 animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div 
                className="h-48 bg-gray-200 relative"
                style={{
                  backgroundImage: `url('${product.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <div className="absolute top-3 right-3">
                  <div className="verified-badge">
                    <Verified className="h-4 w-4" />
                    <span>Sumber Terverifikasi</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-3">
                  Oleh {product.farmer} • {product.location}
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">Rp{Math.round(product.price * 15000)}</span>
                  <Button variant="outline" className="hover:bg-ocean hover:text-white">
                    Tambah ke Keranjang
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="btn-primary">
            Lihat Semua Produk
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
