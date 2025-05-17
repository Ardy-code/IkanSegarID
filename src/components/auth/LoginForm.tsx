
import React from "react";
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

interface LoginFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginForm = ({ isOpen, onClose }: LoginFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle authentication
    console.log("Login form submitted");
    // For demo purposes, close the dialog
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
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full bg-ocean hover:bg-ocean-dark">
            Masuk
          </Button>
          <div className="text-center text-sm">
            Belum memiliki akun?{" "}
            <a
              href="#"
              className="font-medium text-ocean hover:text-ocean-dark"
              onClick={(e) => {
                e.preventDefault();
                // Handle the switch to registration form
                // For now we just close
                onClose();
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
