
import React, { createContext, useState, useContext, useEffect } from "react";

export interface UserProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  location: string;
  category: string;
  image: string;
  userId: string;
  createdAt: string;
}

export interface UserRecipe {
  id: string;
  title: string;
  description: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  userId: string;
  createdAt: string;
}

interface UserContentContextType {
  userProducts: UserProduct[];
  userRecipes: UserRecipe[];
  addProduct: (product: Omit<UserProduct, 'id' | 'createdAt'>) => void;
  addRecipe: (recipe: Omit<UserRecipe, 'id' | 'createdAt'>) => void;
}

const UserContentContext = createContext<UserContentContextType | undefined>(undefined);

export const UserContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userProducts, setUserProducts] = useState<UserProduct[]>([]);
  const [userRecipes, setUserRecipes] = useState<UserRecipe[]>([]);

  useEffect(() => {
    // Load from localStorage on mount
    const savedProducts = localStorage.getItem("userProducts");
    const savedRecipes = localStorage.getItem("userRecipes");
    
    if (savedProducts) {
      setUserProducts(JSON.parse(savedProducts));
    }
    
    if (savedRecipes) {
      setUserRecipes(JSON.parse(savedRecipes));
    }
  }, []);

  const addProduct = (productData: Omit<UserProduct, 'id' | 'createdAt'>) => {
    const newProduct: UserProduct = {
      ...productData,
      id: `product-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    
    const updatedProducts = [...userProducts, newProduct];
    setUserProducts(updatedProducts);
    localStorage.setItem("userProducts", JSON.stringify(updatedProducts));
  };

  const addRecipe = (recipeData: Omit<UserRecipe, 'id' | 'createdAt'>) => {
    const newRecipe: UserRecipe = {
      ...recipeData,
      id: `recipe-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    
    const updatedRecipes = [...userRecipes, newRecipe];
    setUserRecipes(updatedRecipes);
    localStorage.setItem("userRecipes", JSON.stringify(updatedRecipes));
  };

  return (
    <UserContentContext.Provider value={{ userProducts, userRecipes, addProduct, addRecipe }}>
      {children}
    </UserContentContext.Provider>
  );
};

export const useUserContent = () => {
  const context = useContext(UserContentContext);
  if (context === undefined) {
    throw new Error("useUserContent must be used within a UserContentProvider");
  }
  return context;
};
