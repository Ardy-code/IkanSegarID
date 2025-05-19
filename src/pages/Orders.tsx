
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useUser } from "@/contexts/UserContext";
import { 
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell
} from "@/components/ui/table";
import { formatDistanceToNow } from "date-fns";
import { id } from 'date-fns/locale';

// Mock order data for demonstration (in a real app, this would come from an API)
const mockOrders = [
  {
    id: "ORD-1001",
    date: new Date(2025, 4, 15),
    total: 450000,
    status: "Dikirim",
    items: ["Ikan Tuna Segar 500g", "Salmon Fillet 300g"]
  },
  {
    id: "ORD-1002",
    date: new Date(2025, 4, 12),
    total: 275000,
    status: "Selesai",
    items: ["Udang Vannamei 1kg", "Cumi-cumi Segar 500g"]
  },
  {
    id: "ORD-1003",
    date: new Date(2025, 4, 8),
    total: 320000,
    status: "Selesai",
    items: ["Kakap Merah 700g", "Kerapu Bakar 1 Porsi"]
  }
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', { 
    style: 'currency', 
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};

const Orders = () => {
  const { user } = useUser();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-6">Pesanan Saya</h1>
          
          {!user ? (
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <p className="text-lg mb-4">Silakan login untuk melihat riwayat pesanan Anda.</p>
            </div>
          ) : mockOrders.length === 0 ? (
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <p className="text-lg mb-4">Anda belum memiliki pesanan.</p>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>No. Pesanan</TableHead>
                      <TableHead>Tanggal</TableHead>
                      <TableHead>Produk</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>
                          {order.date.toLocaleDateString('id-ID', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                          <div className="text-xs text-gray-500">
                            {formatDistanceToNow(order.date, { 
                              addSuffix: true,
                              locale: id 
                            })}
                          </div>
                        </TableCell>
                        <TableCell>
                          <ul className="list-disc list-inside">
                            {order.items.map((item, idx) => (
                              <li key={idx} className="text-sm">{item}</li>
                            ))}
                          </ul>
                        </TableCell>
                        <TableCell>{formatPrice(order.total)}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            order.status === 'Selesai' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {order.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Orders;
