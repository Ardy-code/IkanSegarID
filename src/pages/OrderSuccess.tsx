
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const OrderSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-24 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
            <h1 className="text-3xl font-bold mb-4">Pesanan Berhasil!</h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Terima kasih telah berbelanja di IkanSegarID. Pesanan Anda telah kami terima dan sedang kami proses.
            </p>
            <div className="mb-8 p-4 border border-gray-200 rounded-lg max-w-sm mx-auto">
              <p className="font-medium mb-1">Nomor Pesanan</p>
              <p className="text-lg font-bold mb-2">IS-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</p>
              <p className="text-sm text-gray-500">
                Mohon simpan nomor pesanan ini untuk referensi di masa mendatang
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button variant="outline">
                  Kembali ke Beranda
                </Button>
              </Link>
              <Link to="/products">
                <Button className="bg-ocean hover:bg-ocean-dark">
                  Belanja Lagi
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderSuccess;
