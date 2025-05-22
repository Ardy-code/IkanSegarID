
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { useCart, CartItem as CartItemType } from "@/contexts/CartContext";
import { formatPrice } from "@/lib/utils";

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      updateQuantity(item.id, value);
    }
  };

  const increaseQuantity = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const getFallbackImage = () => {
    return "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=500&auto=format&fit=crop&q=80";
  };

  return (
    <div className="flex gap-4 py-4 border-b">
      <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden pointer-events-none">
        <img
          src={item.image || getFallbackImage()}
          alt={item.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = getFallbackImage();
          }}
        />
      </div>
      
      <div className="flex-grow flex flex-col">
        <div className="flex justify-between">
          <h3 className="font-medium">{item.name}</h3>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 rounded-full p-0 text-gray-400 hover:text-red-500"
            onClick={() => removeFromCart(item.id)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Remove</span>
          </Button>
        </div>
        
        <p className="text-sm text-gray-500">{item.farmer}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center">
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7 rounded-md p-0"
              onClick={decreaseQuantity}
            >
              <span className="sr-only">Decrease</span>
              <span className="text-sm">-</span>
            </Button>
            
            <Input
              type="number"
              min="1"
              value={item.quantity}
              onChange={handleQuantityChange}
              className="h-7 w-12 px-2 mx-1 text-center text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7 rounded-md p-0"
              onClick={increaseQuantity}
            >
              <span className="sr-only">Increase</span>
              <span className="text-sm">+</span>
            </Button>
          </div>
          
          <div className="font-semibold">
            {formatPrice(item.price * item.quantity)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
