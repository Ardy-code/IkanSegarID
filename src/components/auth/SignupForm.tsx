
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useUser } from "@/contexts/UserContext";

interface SignupFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

const SignupForm = ({ isOpen, onClose, onSwitchToLogin }: SignupFormProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const { signup, isLoading } = useUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signup({
      firstName,
      lastName,
      email,
      password
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Buat Akun Baru</DialogTitle>
          <DialogDescription>
            Daftar untuk menikmati semua fitur Aquaharvest
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Nama Depan</Label>
              <Input 
                id="firstName" 
                placeholder="Nama depan" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Nama Belakang</Label>
              <Input 
                id="lastName" 
                placeholder="Nama belakang" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
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
            <Label htmlFor="password">Kata Sandi</Label>
            <Input
              id="password"
              type="password"
              placeholder="Minimal 8 karakter"
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="terms" 
              checked={termsAccepted}
              onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
              required 
            />
            <label
              htmlFor="terms"
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Saya setuju dengan{" "}
              <a href="#" className="font-medium text-ocean hover:text-ocean-dark">
                Syarat dan Ketentuan
              </a>{" "}
              dan{" "}
              <a href="#" className="font-medium text-ocean hover:text-ocean-dark">
                Kebijakan Privasi
              </a>
            </label>
          </div>
          <Button 
            type="submit" 
            className="w-full bg-ocean hover:bg-ocean-dark"
            disabled={isLoading || !termsAccepted}
          >
            {isLoading ? "Memproses..." : "Daftar"}
          </Button>
          <div className="text-center text-sm">
            Sudah memiliki akun?{" "}
            <a
              href="#"
              className="font-medium text-ocean hover:text-ocean-dark"
              onClick={(e) => {
                e.preventDefault();
                onClose();
                onSwitchToLogin();
              }}
            >
              Masuk sekarang
            </a>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SignupForm;
