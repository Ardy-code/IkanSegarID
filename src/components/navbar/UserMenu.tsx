
import React, { useState } from "react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useUser } from "@/contexts/UserContext";
import UserProfile from "@/components/auth/UserProfile";
import AuthButtons from "@/components/navbar/AuthButtons";

interface UserMenuProps {
  isMobile?: boolean;
}

const UserMenu = ({ isMobile = false }: UserMenuProps) => {
  const { user, logout } = useUser();
  const [showProfileModal, setShowProfileModal] = useState(false);

  if (!user) {
    return <AuthButtons isMobile={isMobile} />;
  }

  return (
    <>
      {isMobile ? (
        <div className="space-y-2">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img 
                src={user.avatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=default"} 
                alt="Avatar" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-medium">{user.firstName} {user.lastName}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>
          <Button 
            variant="outline" 
            className="w-full mb-2"
            onClick={() => setShowProfileModal(true)}
          >
            Profil Saya
          </Button>
          <Button 
            variant="destructive" 
            className="w-full"
            onClick={logout}
          >
            Keluar
          </Button>
        </div>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <div className="h-8 w-8 rounded-full overflow-hidden border border-gray-200">
                <img 
                  src={user.avatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=default"} 
                  alt="Avatar" 
                  className="h-full w-full object-cover"
                />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              className="cursor-pointer"
              onClick={() => setShowProfileModal(true)}
            >
              Profil
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Pesanan Saya
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Wishlist
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              className="text-red-600 cursor-pointer"
              onClick={logout}
            >
              Keluar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}

      <UserProfile 
        isOpen={showProfileModal} 
        onClose={() => setShowProfileModal(false)} 
      />
    </>
  );
};

export default UserMenu;
