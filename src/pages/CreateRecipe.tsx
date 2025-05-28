
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useUser } from "@/contexts/UserContext";
import { toast } from "sonner";
import { ChefHat, Plus, Minus } from "lucide-react";

const CreateRecipe = () => {
  const { user } = useUser();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    prepTime: "",
    cookTime: "",
    servings: "",
    difficulty: "",
    image: ""
  });

  const [ingredients, setIngredients] = useState([""]);
  const [instructions, setInstructions] = useState([""]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const removeIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const updateIngredient = (index: number, value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const addInstruction = () => {
    setInstructions([...instructions, ""]);
  };

  const removeInstruction = (index: number) => {
    setInstructions(instructions.filter((_, i) => i !== index));
  };

  const updateInstruction = (index: number, value: string) => {
    const newInstructions = [...instructions];
    newInstructions[index] = value;
    setInstructions(newInstructions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast.error("Silakan masuk untuk membuat resep");
      return;
    }
    
    // Here you would typically send the data to your backend
    toast.success("Resep berhasil dibuat!");
    
    // Reset form
    setFormData({
      title: "",
      description: "",
      prepTime: "",
      cookTime: "",
      servings: "",
      difficulty: "",
      image: ""
    });
    setIngredients([""]);
    setInstructions([""]);
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
                Silakan masuk ke akun Anda untuk membuat resep.
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
              Buat Resep Ikan Favorit Anda
            </h1>
            <p className="text-xl text-gray-600">
              Bagikan kreasi kuliner ikan Anda dengan komunitas FishFreshID
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center">
                <ChefHat className="h-5 w-5 mr-2" />
                Resep Baru
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="title">Judul Resep</Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Contoh: Salmon Panggang dengan Bumbu Rempah"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="description">Deskripsi</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Ceritakan tentang resep ini..."
                    rows={3}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="prepTime">Waktu Persiapan (menit)</Label>
                    <Input
                      id="prepTime"
                      name="prepTime"
                      type="number"
                      value={formData.prepTime}
                      onChange={handleInputChange}
                      placeholder="15"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="cookTime">Waktu Memasak (menit)</Label>
                    <Input
                      id="cookTime"
                      name="cookTime"
                      type="number"
                      value={formData.cookTime}
                      onChange={handleInputChange}
                      placeholder="30"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="servings">Porsi</Label>
                    <Input
                      id="servings"
                      name="servings"
                      type="number"
                      value={formData.servings}
                      onChange={handleInputChange}
                      placeholder="4"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="difficulty">Tingkat Kesulitan</Label>
                  <Input
                    id="difficulty"
                    name="difficulty"
                    value={formData.difficulty}
                    onChange={handleInputChange}
                    placeholder="Mudah/Sedang/Sulit"
                    required
                  />
                </div>

                <div>
                  <Label>Bahan-bahan</Label>
                  {ingredients.map((ingredient, index) => (
                    <div key={index} className="flex gap-2 mt-2">
                      <Input
                        value={ingredient}
                        onChange={(e) => updateIngredient(index, e.target.value)}
                        placeholder="Contoh: 500g ikan salmon fillet"
                        required
                      />
                      {ingredients.length > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() => removeIngredient(index)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={addIngredient}
                    className="mt-2"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Tambah Bahan
                  </Button>
                </div>

                <div>
                  <Label>Langkah-langkah</Label>
                  {instructions.map((instruction, index) => (
                    <div key={index} className="flex gap-2 mt-2">
                      <Textarea
                        value={instruction}
                        onChange={(e) => updateInstruction(index, e.target.value)}
                        placeholder={`Langkah ${index + 1}: Jelaskan cara melakukan...`}
                        rows={2}
                        required
                      />
                      {instructions.length > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          onClick={() => removeInstruction(index)}
                          className="mt-2"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    onClick={addInstruction}
                    className="mt-2"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Tambah Langkah
                  </Button>
                </div>

                <div>
                  <Label htmlFor="image">URL Gambar</Label>
                  <Input
                    id="image"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    placeholder="https://example.com/gambar-resep.jpg"
                  />
                </div>

                <Button type="submit" className="w-full bg-ocean hover:bg-ocean-dark">
                  <ChefHat className="h-4 w-4 mr-2" />
                  Buat Resep
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

export default CreateRecipe;
