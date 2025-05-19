
import React from "react";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import CartItem from "./CartItem";
import { ShoppingCart } from "lucide-react";
import { formatPrice } from "@/lib/utils";

interface CartDropdownProps {
  side?: "left" | "right" | "top" | "bottom";
}

const CartDropdown = ({ side = "right" }: CartDropdownProps) => {
  const { items, itemCount, total } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-ocean text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side={side} className="w-full sm:max-w-md">
        <SheetHeader className="mb-5">
          <SheetTitle>Keranjang Belanja</SheetTitle>
          <SheetDescription>
            {itemCount === 0
              ? "Keranjang Anda kosong"
              : `${itemCount} item dalam keranjang Anda`}
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-96">
            <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
            <p className="text-gray-500 mb-6">Keranjang Anda kosong</p>
            <SheetClose asChild>
              <Link to="/products">
                <Button className="bg-ocean hover:bg-ocean-dark">
                  Belanja Sekarang
                </Button>
              </Link>
            </SheetClose>
          </div>
        ) : (
          <>
            <div className="space-y-4 overflow-y-auto max-h-[calc(100vh-250px)]">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <SheetFooter className="mt-8 flex-col gap-2 sm:flex-col">
              <div className="flex justify-between items-center w-full text-lg font-semibold mb-4">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
              <SheetClose asChild>
                <Link to="/checkout" className="w-full">
                  <Button className="w-full bg-ocean hover:bg-ocean-dark">
                    Checkout
                  </Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link to="/products" className="w-full">
                  <Button variant="outline" className="w-full">
                    Lanjutkan Belanja
                  </Button>
                </Link>
              </SheetClose>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDropdown;
