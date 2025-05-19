
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

  const handleOpenLogin = () => {
    setShowLoginModal(true);
    setShowSignupModal(false);
  };

  const handleOpenSignup = () => {
    setShowSignupModal(true);
    setShowLoginModal(false);
  };

  return (
    <>
      <Button 
        variant="outline" 
        className={`hover:bg-ocean hover:text-white ${isMobile ? "w-full mb-2" : ""}`}
        onClick={handleOpenLogin}
      >
        Masuk
      </Button>
      <Button 
        variant="default" 
        className={`bg-ocean hover:bg-ocean-dark ${isMobile ? "w-full" : ""}`}
        onClick={handleOpenSignup}
      >
        Daftar
      </Button>

      <LoginForm 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)}
        onSwitchToSignup={handleOpenSignup}
      />
      
      <SignupForm 
        isOpen={showSignupModal} 
        onClose={() => setShowSignupModal(false)}
        onSwitchToLogin={handleOpenLogin}
      />
    </>
  );
};

export default AuthButtons;
