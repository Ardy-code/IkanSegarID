
import React from "react";
import { useUserContent } from "@/contexts/UserContentContext";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Verified, ShoppingCart, MapPin } from "lucide-react";
import { toast } from "sonner";
import { formatPrice } from "@/lib/utils";
import { useUser } from "@/contexts/UserContext";

const UserProductGrid = () => {
  const { userProducts } = useUserContent();
  const { addToCart } = useCart();
  const { user } = useUser();

  const handleAddToCart = (product: any) => {
    if (!user) {
      toast.error("Silakan masuk untuk menambahkan produk ke keranjang");
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      farmer: product.farmer
    });
    toast.success(`${product.name} telah ditambahkan ke keranjang!`);
  };

  const getFallbackImage = () => {
    return "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=500&auto=format&fit=crop&q=80";
  };

  if (userProducts.length === 0) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Produk dari Penjual Komunitas</h2>
        <p className="text-gray-600">Produk segar yang dijual langsung oleh anggota komunitas IkanSegarID</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {userProducts.map((product, index) => (
          <div
            key={product.id}
            className="card opacity-0 animate-fade-in rounded-lg shadow-sm overflow-hidden bg-white hover:shadow-md transition-all"
            style={{ animationDelay: `${(index + 1) * 100}ms` }}
          >
            <div
              className="h-48 bg-gray-200 relative pointer-events-none"
              style={{
                backgroundImage: `url('${product.image || getFallbackImage()}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute top-3 right-3">
                <div className="bg-white/90 text-green-600 rounded-full px-2 py-1 text-xs font-medium flex items-center space-x-1">
                  <Verified className="h-3 w-3" />
                  <span>Komunitas</span>
                </div>
              </div>
              {product.trackingCode && (
                <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {product.trackingCode}
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{product.name}</h3>
              <p className="text-gray-500 text-sm mb-3">
                Oleh {product.farmer} • {product.location}
              </p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">
                  {formatPrice(product.price)}
                </span>
                <Button
                  variant="outline"
                  className="hover:bg-ocean hover:text-white"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart className="h-4 w-4 mr-1" />
                  Tambah
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProductGrid;
