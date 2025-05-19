
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/lib/utils";
import { toast } from "sonner";
import { useForm } from "react-hook-form";

interface CheckoutFormValues {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  paymentMethod: "bank_transfer" | "credit_card" | "cod";
}

const Checkout = () => {
  const { items, total, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const form = useForm<CheckoutFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      zipCode: "",
      paymentMethod: "bank_transfer",
    },
  });

  const onSubmit = async (data: CheckoutFormValues) => {
    if (items.length === 0) {
      toast.error("Keranjang Anda kosong");
      return;
    }

    setIsProcessing(true);

    // Simulate API call to process order
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock success
    toast.success("Pesanan berhasil dibuat!");
    clearCart();
    setIsProcessing(false);
    navigate("/order-success");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-12">
              <h1 className="text-3xl font-bold mb-4">Keranjang Kosong</h1>
              <p className="text-gray-600 mb-8">
                Anda belum memiliki item di keranjang belanja Anda.
              </p>
              <Button 
                className="bg-ocean hover:bg-ocean-dark"
                onClick={() => navigate("/products")}
              >
                Mulai Belanja
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-24 pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Summary Column */}
            <div className="lg:col-span-1 order-2 lg:order-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Ringkasan Pesanan</h2>
                
                <div className="divide-y">
                  {items.map(item => (
                    <div key={item.id} className="py-3 flex gap-3">
                      <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium text-sm">{item.name}</h3>
                        <p className="text-gray-500 text-sm">{formatPrice(item.price)} x {item.quantity}</p>
                      </div>
                      <div className="font-semibold">
                        {formatPrice(item.price * item.quantity)}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t mt-4 pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Pengiriman</span>
                    <span>{formatPrice(15000)}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg mt-4 pt-4 border-t">
                    <span>Total</span>
                    <span>{formatPrice(total + 15000)}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Checkout Form Column */}
            <div className="lg:col-span-2 order-1 lg:order-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6">Informasi Pengiriman</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nama Lengkap</FormLabel>
                            <FormControl>
                              <Input placeholder="Nama lengkap" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nomor Telepon</FormLabel>
                          <FormControl>
                            <Input placeholder="0812XXXXXXXX" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Alamat</FormLabel>
                          <FormControl>
                            <Input placeholder="Alamat lengkap" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Kota</FormLabel>
                            <FormControl>
                              <Input placeholder="Nama kota" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="zipCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Kode Pos</FormLabel>
                            <FormControl>
                              <Input placeholder="12345" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="pt-6 border-t">
                      <h2 className="text-xl font-semibold mb-4">Metode Pembayaran</h2>
                      <FormField
                        control={form.control}
                        name="paymentMethod"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <RadioGroup
                                value={field.value}
                                onValueChange={field.onChange}
                                className="flex flex-col space-y-3"
                              >
                                <div className="flex items-center space-x-2 border p-3 rounded-lg">
                                  <RadioGroupItem value="bank_transfer" id="bank_transfer" />
                                  <FormLabel htmlFor="bank_transfer" className="cursor-pointer">
                                    Transfer Bank
                                  </FormLabel>
                                </div>
                                <div className="flex items-center space-x-2 border p-3 rounded-lg">
                                  <RadioGroupItem value="credit_card" id="credit_card" />
                                  <FormLabel htmlFor="credit_card" className="cursor-pointer">
                                    Kartu Kredit / Debit
                                  </FormLabel>
                                </div>
                                <div className="flex items-center space-x-2 border p-3 rounded-lg">
                                  <RadioGroupItem value="cod" id="cod" />
                                  <FormLabel htmlFor="cod" className="cursor-pointer">
                                    Bayar di Tempat (COD)
                                  </FormLabel>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full mt-8 bg-ocean hover:bg-ocean-dark"
                      disabled={isProcessing}
                    >
                      {isProcessing ? "Memproses..." : "Selesaikan Pesanan"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
