
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
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";

interface UserMenuProps {
  isMobile?: boolean;
}

const UserMenu = ({ isMobile = false }: UserMenuProps) => {
  const { user, logout } = useUser();
  const [showProfileModal, setShowProfileModal] = useState(false);

  if (!user) {
    return <AuthButtons isMobile={isMobile} />;
  }

  const userInitials = `${user.firstName?.charAt(0) || ''}${user.lastName?.charAt(0) || ''}`;

  return (
    <>
      {isMobile ? (
        <div className="space-y-2">
          <div className="flex items-center space-x-2 mb-2">
            <Avatar className="h-8 w-8">
              <AvatarImage 
                src={user.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`} 
                alt="Avatar"
              />
              <AvatarFallback>{userInitials || <User size={16} />}</AvatarFallback>
            </Avatar>
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
              <Avatar className="h-8 w-8">
                <AvatarImage 
                  src={user.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`} 
                  alt="Avatar" 
                />
                <AvatarFallback>{userInitials || <User size={16} />}</AvatarFallback>
              </Avatar>
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
