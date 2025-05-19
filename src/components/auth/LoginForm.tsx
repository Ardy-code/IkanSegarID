
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useUser } from "@/contexts/UserContext";

interface LoginFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignup: () => void;
}

const LoginForm = ({ isOpen, onClose, onSwitchToSignup }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Masuk ke Akun Anda</DialogTitle>
          <DialogDescription>
            Masukkan email dan kata sandi Anda untuk melanjutkan
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="nama@contoh.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label htmlFor="password">Kata Sandi</Label>
              <a
                href="#"
                className="text-sm font-medium text-ocean hover:text-ocean-dark"
              >
                Lupa kata sandi?
              </a>
            </div>
            <Input 
              id="password" 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-ocean hover:bg-ocean-dark"
            disabled={isLoading}
          >
            {isLoading ? "Memproses..." : "Masuk"}
          </Button>
          <div className="text-center text-sm">
            Belum memiliki akun?{" "}
            <a
              href="#"
              className="font-medium text-ocean hover:text-ocean-dark"
              onClick={(e) => {
                e.preventDefault();
                onClose();
                onSwitchToSignup();
              }}
            >
              Daftar sekarang
            </a>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginForm;
