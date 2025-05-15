
import React from "react";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, Verified } from "lucide-react";

interface Recipe {
  id: string;
  title: string;
  prepTime: string;
  ingredients: number;
  calories: string;
  protein: string;
  image: string;
  chef: string;
}

const HealthyRecipes = () => {
  const recipes: Recipe[] = [
    {
      id: "recipe-1",
      title: "Lemon Herb Baked Trout",
      prepTime: "25 mins",
      ingredients: 7,
      calories: "310",
      protein: "28g",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
      chef: "Emma Wilson"
    },
    {
      id: "recipe-2",
      title: "Tilapia Tacos with Avocado Salsa",
      prepTime: "20 mins",
      ingredients: 9,
      calories: "350",
      protein: "24g",
      image: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?w=500&auto=format&fit=crop&q=80",
      chef: "Michael Chen"
    },
    {
      id: "recipe-3",
      title: "Herb Crusted Catfish Filets",
      prepTime: "30 mins",
      ingredients: 8,
      calories: "290",
      protein: "26g",
      image: "https://images.unsplash.com/photo-1611599539392-0198d33c4c1e?w=500&auto=format&fit=crop&q=80",
      chef: "Sophia Rodriguez"
    }
  ];

  return (
    <div id="recipes" className="bg-gray-50 py-16">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="section-title">Healthy Cooking Guides</h2>
          <p className="section-subtitle">
            Delicious and nutritious ways to prepare your Aquaharvest fish,
            created by professional chefs and nutritionists.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recipes.map((recipe, index) => (
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
                    {recipe.prepTime}
                  </div>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <BookOpen className="h-4 w-4 text-ocean mr-1" />
                  <span className="text-sm text-gray-500">Recipe by {recipe.chef}</span>
                </div>
                
                <h3 className="font-bold text-xl mb-3">{recipe.title}</h3>
                
                <div className="flex space-x-4 mb-4">
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Calories</p>
                    <p className="font-bold">{recipe.calories}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Protein</p>
                    <p className="font-bold">{recipe.protein}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Ingredients</p>
                    <p className="font-bold">{recipe.ingredients}</p>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full hover:bg-ocean hover:text-white"
                >
                  View Recipe
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="btn-primary">
            Browse All Recipes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HealthyRecipes;
