
import React, { createContext, useState, useContext, useEffect } from "react";
import { toast } from "sonner";

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
}

interface UserContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (userData: SignupData) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => Promise<void>;
}

interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check local storage for existing user session
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      // In a real app, this would be an API call
      // For now, we'll simulate a successful login
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check for demo account (would be replaced with real auth)
      if (email === "demo@example.com" && password === "password") {
        const userData: User = {
          id: "user-1",
          email: email,
          firstName: "Demo",
          lastName: "User",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=demo"
        };
        
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        toast.success("Login berhasil!");
      } else {
        // Mock login for any credentials in demo
        const userData: User = {
          id: `user-${Date.now()}`,
          email: email,
          firstName: email.split('@')[0],
          lastName: "",
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
        };
        
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        toast.success("Login berhasil!");
      }
    } catch (error) {
      toast.error("Login gagal. Silakan coba lagi.");
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (userData: SignupData) => {
    try {
      setIsLoading(true);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser: User = {
        id: `user-${Date.now()}`,
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.email}`
      };
      
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      toast.success("Pendaftaran berhasil!");
    } catch (error) {
      toast.error("Pendaftaran gagal. Silakan coba lagi.");
      console.error("Signup error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast.info("Anda telah keluar dari akun");
  };

  const updateProfile = async (data: Partial<User>) => {
    try {
      setIsLoading(true);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (user) {
        const updatedUser = { ...user, ...data };
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        toast.success("Profil berhasil diperbarui");
      }
    } catch (error) {
      toast.error("Gagal memperbarui profil");
      console.error("Update profile error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ user, isLoading, login, signup, logout, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
