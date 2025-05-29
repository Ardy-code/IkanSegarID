
import React from "react";
import { useUserContent } from "@/contexts/UserContentContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { MapPin, Plus } from "lucide-react";
import { toast } from "sonner";

const UserProductGrid = () => {
  const { userProducts } = useUserContent();
  const { addToCart } = useCart();

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      farmer: product.farmer
    });
    toast.success(`${product.name} telah ditambahkan ke keranjang!`);
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {userProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-square relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-2 right-2 bg-green-500">
                Komunitas
              </Badge>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{product.name}</CardTitle>
              <Badge variant="outline" className="w-fit">{product.category}</Badge>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
              
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <MapPin className="h-4 w-4 mr-1" />
                {product.location}
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-bold text-ocean">
                  Rp {product.price.toLocaleString('id-ID')}
                </span>
                <Button
                  size="sm"
                  onClick={() => handleAddToCart(product)}
                  className="bg-ocean hover:bg-ocean-dark"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Beli
                </Button>
              </div>
              
              {product.trackingCode && (
                <div className="text-xs text-gray-500 bg-gray-100 p-2 rounded">
                  <span className="font-medium">Kode Lacak:</span> {product.trackingCode}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserProductGrid;
