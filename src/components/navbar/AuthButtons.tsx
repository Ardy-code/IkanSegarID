
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import LoginForm from "@/components/auth/LoginForm";
import SignupForm from "@/components/auth/SignupForm";

interface AuthButtonsProps {
  isMobile?: boolean;
}

const AuthButtons = ({ isMobile = false }: AuthButtonsProps) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <>
      <Button 
        variant="outline" 
        className={`hover:bg-ocean hover:text-white ${isMobile ? "w-full mb-2" : ""}`}
        onClick={() => setShowLoginModal(true)}
      >
        Masuk
      </Button>
      <Button 
        variant="default" 
        className={`bg-ocean hover:bg-ocean-dark ${isMobile ? "w-full" : ""}`}
        onClick={() => setShowSignupModal(true)}
      >
        Daftar
      </Button>

      <LoginForm 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
      
      <SignupForm 
        isOpen={showSignupModal} 
        onClose={() => setShowSignupModal(false)} 
      />
    </>
  );
};

export default AuthButtons;
