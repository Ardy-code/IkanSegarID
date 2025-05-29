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
  trackingCode: string;
  farmer: string;
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
  addProduct: (product: Omit<UserProduct, 'id' | 'createdAt' | 'trackingCode'>) => void;
  addRecipe: (recipe: Omit<UserRecipe, 'id' | 'createdAt'>) => void;
  getProductByTrackingCode: (trackingCode: string) => UserProduct | null;
}

const UserContentContext = createContext<UserContentContextType | undefined>(undefined);

const generateTrackingCode = () => {
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.random().toString(36).substring(2, 5).toUpperCase();
  return `FISH${timestamp}${random}`;
};

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

  const addProduct = (productData: Omit<UserProduct, 'id' | 'createdAt' | 'trackingCode'>) => {
    const newProduct: UserProduct = {
      ...productData,
      id: `product-${Date.now()}`,
      createdAt: new Date().toISOString(),
      trackingCode: generateTrackingCode()
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

  const getProductByTrackingCode = (trackingCode: string): UserProduct | null => {
    return userProducts.find(product => product.trackingCode === trackingCode) || null;
  };

  return (
    <UserContentContext.Provider value={{ userProducts, userRecipes, addProduct, addRecipe, getProductByTrackingCode }}>
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
