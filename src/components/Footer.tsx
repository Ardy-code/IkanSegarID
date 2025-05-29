
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Fish, Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Footer = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <footer className="bg-gray-900 text-white pt-16" id="footer">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <Fish className="h-8 w-8 text-ocean-light" />
              <span className="font-bold text-2xl ml-2">
                Ikan<span className="text-ocean-light">SegarID</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Menghubungkan konsumen dengan peternak ikan air tawar yang berkelanjutan 
              untuk pengalaman makanan laut yang paling segar dan transparan.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                aria-label="Facebook"
                className="bg-gray-800 hover:bg-ocean p-2 rounded-full transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
              <a 
                href="#" 
                aria-label="Twitter"
                className="bg-gray-800 hover:bg-ocean p-2 rounded-full transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a 
                href="#" 
                aria-label="Instagram"
                className="bg-gray-800 hover:bg-ocean p-2 rounded-full transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Tautan Cepat</h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">Beranda</a>
              </li>
              <li>
                <a href="/products" className="text-gray-400 hover:text-white transition-colors">Produk</a>
              </li>
              <li>
                <a href="/fish-traceability" className="text-gray-400 hover:text-white transition-colors">Lacak Ikan Anda</a>
              </li>
              <li>
                <a href="/#recipes" className="text-gray-400 hover:text-white transition-colors">Resep</a>
              </li>
              <li>
                <button 
                  onClick={() => setShowContact(true)}
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  id="contact"
                >
                  <Phone className="w-4 h-4" /> Kontak
                </button>
              </li>
            </ul>
          </div>
          
          {/* About Us */}
          <div id="about">
            <h3 className="font-bold text-lg mb-4">Tentang Kami</h3>
            <p className="text-gray-400 mb-4">
              IkanSegarID didirikan pada tahun 2018 dengan misi untuk menghubungkan konsumen langsung dengan peternak ikan air tawar yang berkualitas.
            </p>
            <p className="text-gray-400">
              Kami berkomitmen untuk mendorong praktik perikanan berkelanjutan dan menyediakan makanan laut berkualitas tertinggi dengan transparansi penuh.
            </p>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Tetap Terupdate</h3>
            <p className="text-gray-400 mb-4">
              Berlangganan buletin kami untuk resep, tips keberlanjutan, dan penawaran eksklusif.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Alamat email Anda" 
                className="bg-gray-800 border-gray-700"
              />
              <Button className="bg-ocean hover:bg-ocean-dark whitespace-nowrap">
                Berlangganan
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} IkanSegarID. Hak cipta dilindungi.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Ketentuan Layanan</a>
            <a href="#" className="hover:text-white transition-colors">Janji Keberlanjutan</a>
          </div>
        </div>
      </div>

      {/* Contact Dialog */}
      <Dialog open={showContact} onOpenChange={setShowContact}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Hubungi Kami</DialogTitle>
            <DialogDescription>
              Silakan hubungi kami melalui salah satu saluran di bawah ini.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-ocean" />
              <div>
                <p className="font-medium">WhatsApp</p>
                <a href="https://wa.me/6281234567890" className="text-ocean hover:underline">
                  +62 812-3456-7890
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg className="h-5 w-5 text-ocean" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"></path>
              </svg>
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:info@ikansegarid.id" className="text-ocean hover:underline">
                  info@ikansegarid.id
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg className="h-5 w-5 text-ocean" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path>
              </svg>
              <div>
                <p className="font-medium">Alamat</p>
                <p className="text-sm text-gray-500">
                  Jl. Ikan Bawal No. 123<br />
                  Jakarta Selatan, 12345<br />
                  Indonesia
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg className="h-5 w-5 text-ocean" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.5 6h3v8h-3v-8zm0-3.5h3v2.5h-3v-2.5z"></path>
              </svg>
              <div>
                <p className="font-medium">Jam Operasional</p>
                <p className="text-sm text-gray-500">
                  Senin - Jumat: 08:00 - 17:00<br />
                  Sabtu: 09:00 - 15:00<br />
                  Minggu: Tutup
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
