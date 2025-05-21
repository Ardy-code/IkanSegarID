
import React, { useState, useRef } from "react";
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
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User, Upload, Camera } from "lucide-react";
import { toast } from "sonner";

interface UserProfileProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserProfile = ({ isOpen, onClose }: UserProfileProps) => {
  const { user, updateProfile } = useUser();
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [isUpdating, setIsUpdating] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const userInitials = `${firstName.charAt(0) || ''}${lastName.charAt(0) || ''}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    
    try {
      await updateProfile({
        firstName,
        lastName,
        avatar: avatarPreview || user?.avatar,
      });
      toast.success("Profil berhasil diperbarui");
      onClose();
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Gagal memperbarui profil");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    if (!file.type.startsWith('image/')) {
      toast.error("File harus berupa gambar");
      return;
    }
    
    const reader = new FileReader();
    reader.onload = () => {
      setAvatarPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Profil Anda</DialogTitle>
          <DialogDescription>
            Perbarui informasi profil Anda
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="flex flex-col items-center mb-4">
            <div className="relative">
              <Avatar className="w-24 h-24 border-2 border-gray-200">
                <AvatarImage 
                  src={avatarPreview || user?.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.email}`}
                  alt="Avatar"
                  className="w-full h-full object-cover" 
                />
                <AvatarFallback className="text-2xl">{userInitials || <User size={32} />}</AvatarFallback>
              </Avatar>
              <button
                type="button"
                className="absolute bottom-0 right-0 bg-ocean text-white p-2 rounded-full shadow-md hover:bg-ocean-dark transition-colors"
                onClick={triggerFileInput}
              >
                <Camera size={18} />
              </button>
            </div>
            <input 
              type="file" 
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden" 
            />
            <p className="text-sm text-gray-500 mt-2">
              Klik ikon kamera untuk mengubah foto profil
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Nama Depan</Label>
              <Input 
                id="firstName" 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Nama depan" 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Nama Belakang</Label>
              <Input 
                id="lastName" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Nama belakang" 
              />
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full"
            disabled={isUpdating}
          >
            {isUpdating ? "Menyimpan..." : "Simpan Perubahan"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UserProfile;
