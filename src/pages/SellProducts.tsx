
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useUser } from "@/contexts/UserContext";
import { useUserContent } from "@/contexts/UserContentContext";
import { toast } from "sonner";
import { Upload, Plus } from "lucide-react";

const SellProducts = () => {
  const { user } = useUser();
  const { addProduct } = useUserContent();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    location: "",
    category: "",
    image: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast.error("Silakan masuk untuk menjual produk");
      return;
    }
    
    // Add product to user content
    addProduct({
      name: formData.name,
      price: Number(formData.price),
      description: formData.description,
      location: formData.location,
      category: formData.category,
      image: formData.image || "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=300&fit=crop",
      userId: user.id
    });
    
    toast.success("Produk berhasil ditambahkan dan akan muncul di halaman produk!");
    setFormData({
      name: "",
      price: "",
      description: "",
      location: "",
      category: "",
      image: ""
    });
  };

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow pt-24 flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-center">Akses Terbatas</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">
                Silakan masuk ke akun Anda untuk menjual produk.
              </p>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Jual Produk Ikan Anda
            </h1>
            <p className="text-xl text-gray-600">
              Bergabunglah dengan komunitas penjual ikan segar IkanSegarID
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Plus className="h-5 w-5 mr-2" />
                Tambah Produk Baru
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nama Produk</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Contoh: Ikan Salmon Segar"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="category">Kategori</Label>
                  <Input
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    placeholder="Contoh: Ikan Air Tawar"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="price">Harga (IDR)</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="150000"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="location">Lokasi</Label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Jakarta, ID"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="description">Deskripsi Produk</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Jelaskan kualitas, asal, dan keunikan produk Anda..."
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="image">URL Gambar</Label>
                  <Input
                    id="image"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    placeholder="https://example.com/gambar-produk.jpg"
                  />
                </div>

                <Button type="submit" className="w-full bg-ocean hover:bg-ocean-dark">
                  <Upload className="h-4 w-4 mr-2" />
                  Tambah Produk
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SellProducts;
