
import React from "react";
import { Button } from "@/components/ui/button";

const AuthButtons = () => {
  return (
    <>
      <Button variant="outline" className="hover:bg-ocean hover:text-white">
        Masuk
      </Button>
      <Button variant="default" className="bg-ocean hover:bg-ocean-dark">
        Daftar
      </Button>
    </>
  );
};

export default AuthButtons;
