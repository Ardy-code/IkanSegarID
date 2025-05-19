
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, Info, AlertCircle, Check } from "lucide-react";

const TracingTutorial = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Cara Menggunakan Sistem Pelacakan Ikan
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            Panduan langkah demi langkah untuk melacak asal usul produk ikan Anda menggunakan sistem pelacakan kami.
          </p>

          <Tabs defaultValue="code" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="code">Menggunakan Kode</TabsTrigger>
              <TabsTrigger value="tips">Tips & Informasi</TabsTrigger>
            </TabsList>
            
            <TabsContent value="code" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Pelacakan Menggunakan Kode Produk</CardTitle>
                  <CardDescription>
                    Temukan kode pelacakan di kemasan produk dan masukkan ke dalam sistem.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-ocean text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
                    <div>
                      <h3 className="font-medium mb-1">Temukan Kode Pelacakan</h3>
                      <p className="text-gray-600 text-sm">
                        Lihat pada kemasan produk Anda. Kode pelacakan biasanya tercetak di bagian belakang atau samping kemasan, diawali dengan "FISH" diikuti angka (misalnya: FISH123).
                      </p>
                      <div className="mt-2 bg-gray-100 p-3 rounded-md">
                        <div className="flex items-center">
                          <AlertCircle className="h-5 w-5 text-orange-500 mr-2" />
                          <p className="text-sm">Contoh kode: FISH123, FISH456, FISH789</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-ocean text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
                    <div>
                      <h3 className="font-medium mb-1">Kunjungi Halaman Pelacakan</h3>
                      <p className="text-gray-600 text-sm">
                        Klik menu "Lacak Ikan" di navigasi atas atau kunjungi halaman pelacakan langsung.
                      </p>
                      <div className="mt-3 bg-gray-50 rounded-lg border p-3">
                        <div className="flex justify-center">
                          <Button className="bg-ocean hover:bg-ocean-dark">
                            Buka Halaman Pelacakan
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-ocean text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
                    <div>
                      <h3 className="font-medium mb-1">Masukkan Kode Pelacakan</h3>
                      <p className="text-gray-600 text-sm">
                        Ketik kode pelacakan pada kotak input yang tersedia dan klik tombol "Lacak Sekarang".
                      </p>
                      <div className="mt-3">
                        <div className="flex gap-2">
                          <Input placeholder="cth. FISH123" className="max-w-xs" />
                          <Button className="bg-ocean hover:bg-ocean-dark">
                            Lacak Sekarang
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-ocean text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
                    <div>
                      <h3 className="font-medium mb-1">Lihat Hasil Pelacakan</h3>
                      <p className="text-gray-600 text-sm">
                        Sistem akan menampilkan informasi lengkap tentang produk Anda, termasuk lokasi budidaya, tanggal panen, dan sertifikasi.
                      </p>
                      <div className="mt-3 bg-green-50 p-3 rounded-md">
                        <div className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          <p className="text-sm text-green-800">Informasi lengkap tentang asal-usul ikan akan ditampilkan!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-500">
                    Jika Anda mengalami kesulitan, silakan hubungi layanan pelanggan kami di menu Kontak.
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="tips" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tips & Informasi Tambahan</CardTitle>
                  <CardDescription>
                    Informasi berguna untuk memaksimalkan penggunaan sistem pelacakan ikan.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Info className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Mengapa Melacak Asal Ikan?</h3>
                      <p className="text-gray-600 text-sm">
                        Pelacakan membantu Anda memastikan produk yang Anda beli berasal dari praktik budidaya yang berkelanjutan dan memenuhi standar keamanan pangan.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Pemecahan Masalah Umum:</h3>
                    <ul className="space-y-2 text-sm text-gray-600 list-disc pl-6">
                      <li>Pastikan Anda mengetik kode pelacakan dengan benar, termasuk huruf besar dan kecil.</li>
                      <li>Periksa koneksi internet Anda jika halaman hasil tidak muncul.</li>
                      <li>Jika produk tidak memiliki kode pelacakan, hubungi layanan pelanggan kami dengan menyebutkan nomor batch dan tanggal produksi.</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2 flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      Bagikan Pengalaman Anda
                    </h3>
                    <p className="text-sm text-gray-600">
                      Kami terus berusaha meningkatkan sistem pelacakan kami. Bagikan pengalaman dan masukan Anda kepada kami melalui halaman kontak.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Hubungi Kami
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TracingTutorial;
