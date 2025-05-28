
import React from "react";
import { useUserContent } from "@/contexts/UserContentContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ChefHat } from "lucide-react";

const UserRecipeGrid = () => {
  const { userRecipes } = useUserContent();

  if (userRecipes.length === 0) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Resep dari Komunitas</h2>
        <p className="text-gray-600">Resep-resep kreatif yang dibuat oleh anggota komunitas IkanSegarID</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {userRecipes.map((recipe) => (
          <Card key={recipe.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video relative overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{recipe.title}</CardTitle>
              <p className="text-gray-600 text-sm line-clamp-2">{recipe.description}</p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {recipe.prepTime + recipe.cookTime} menit
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  {recipe.servings} porsi
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <ChefHat className="h-3 w-3" />
                  {recipe.difficulty}
                </Badge>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Bahan-bahan:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
                    <li key={index}>• {ingredient}</li>
                  ))}
                  {recipe.ingredients.length > 3 && (
                    <li className="text-gray-400">dan {recipe.ingredients.length - 3} bahan lainnya...</li>
                  )}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserRecipeGrid;
