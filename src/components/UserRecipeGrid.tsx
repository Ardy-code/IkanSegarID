
import React, { useState } from "react";
import { useUserContent } from "@/contexts/UserContentContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, ChefHat, BookOpen, X, Fish, EggFried } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

const UserRecipeGrid = () => {
  const { userRecipes } = useUserContent();
  const [openRecipe, setOpenRecipe] = useState<string | null>(null);

  const handleOpenRecipe = (id: string) => {
    setOpenRecipe(id);
  };

  if (userRecipes.length === 0) {
    return null;
  }

  return (
    <div className="bg-gray-50 py-16">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="section-title">Resep dari Komunitas</h2>
          <p className="section-subtitle">
            Resep-resep kreatif yang dibuat oleh anggota komunitas IkanSegarID
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {userRecipes.map((recipe, index) => (
            <div 
              key={recipe.id}
              className="card overflow-hidden opacity-0 animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative">
                <img 
                  src={recipe.image} 
                  alt={recipe.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3">
                  <div className="bg-white/80 backdrop-blur-sm text-sm rounded-full px-3 py-1 font-medium flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-ocean" />
                    {recipe.prepTime + recipe.cookTime} menit
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <BookOpen className="h-4 w-4 text-ocean mr-1" />
                  <span className="text-sm text-gray-500">Resep Komunitas</span>
                </div>
                
                <h3 className="font-bold text-xl mb-3">{recipe.title}</h3>
                
                <div className="flex space-x-4 mb-4">
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Waktu</p>
                    <p className="font-bold">{recipe.prepTime + recipe.cookTime} menit</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Porsi</p>
                    <p className="font-bold">{recipe.servings}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Bahan</p>
                    <p className="font-bold">{recipe.ingredients.length}</p>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full hover:bg-ocean hover:text-white"
                  onClick={() => handleOpenRecipe(recipe.id)}
                >
                  Lihat Resep
                </Button>
              </div>
            </div>
          ))}
        </div>

        {userRecipes.map((recipe) => (
          <Dialog key={recipe.id} open={openRecipe === recipe.id} onOpenChange={(open) => !open && setOpenRecipe(null)}>
            <DialogContent className="max-w-3xl h-[80vh] overflow-y-auto">
              <DialogHeader>
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-2xl">{recipe.title}</DialogTitle>
                  <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Tutup</span>
                  </DialogClose>
                </div>
                <DialogDescription className="flex items-center space-x-4 text-left">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-ocean" />
                    <span>Waktu: {recipe.prepTime + recipe.cookTime} menit</span>
                  </div>
                  <div className="flex items-center">
                    <Fish className="h-4 w-4 mr-1 text-ocean" />
                    <span>Oleh: Komunitas</span>
                  </div>
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4">
                <img 
                  src={recipe.image} 
                  alt={recipe.title} 
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2">Deskripsi</h3>
                  <p>{recipe.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="text-lg font-bold mb-2 flex items-center">
                      <EggFried className="h-5 w-5 mr-2 text-ocean" />
                      Bahan-bahan
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {recipe.ingredients.map((ingredient, idx) => (
                        <li key={idx}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Info Resep</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Persiapan</p>
                        <p className="font-bold">{recipe.prepTime} menit</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Memasak</p>
                        <p className="font-bold">{recipe.cookTime} menit</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Porsi</p>
                        <p className="font-bold">{recipe.servings}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Tingkat</p>
                        <p className="font-bold">{recipe.difficulty}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2">Cara Memasak</h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    {recipe.instructions.map((step, idx) => (
                      <li key={idx} className="pl-2">{step}</li>
                    ))}
                  </ol>
                </div>
              </div>

              <DialogFooter className="mt-6">
                <Button onClick={() => setOpenRecipe(null)}>Tutup</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default UserRecipeGrid;
