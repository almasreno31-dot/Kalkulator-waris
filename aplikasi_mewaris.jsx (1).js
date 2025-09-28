import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";

export default function App() {
  const [tab, setTab] = useState("konsep");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <motion.h1
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Edukasi Mewaris dalam Perspektif Islam
      </motion.h1>

      <Tabs value={tab} onValueChange={setTab} className="w-full max-w-2xl">
        <TabsList className="grid grid-cols-4 gap-2 mb-4">
          <TabsTrigger value="konsep">Konsep Dasar</TabsTrigger>
          <TabsTrigger value="ahli">Ahli Waris</TabsTrigger>
          <TabsTrigger value="pembagian">Pembagian</TabsTrigger>
          <TabsTrigger value="contoh">Contoh Kasus</TabsTrigger>
        </TabsList>

        <TabsContent value="konsep">
          <Card className="shadow-md">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">Konsep Dasar Warisan</h2>
              <p>
                Dalam Islam, warisan atau faraid adalah hukum yang mengatur
                pembagian harta peninggalan seseorang yang telah meninggal
                kepada ahli warisnya. Hukum ini bersumber dari Al-Qur'an,
                Hadis, dan ijma' ulama. Prinsip utamanya adalah keadilan dan
                keseimbangan hak antara ahli waris.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ahli">
          <Card className="shadow-md">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">Jenis-jenis Ahli Waris</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Ahli waris dari garis keturunan laki-laki (ayah, anak laki-laki).</li>
                <li>Ahli waris dari garis keturunan perempuan (ibu, anak perempuan).</li>
                <li>Ahli waris pasangan (suami atau istri).</li>
                <li>Kerabat lainnya sesuai ketentuan syariat.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pembagian">
          <Card className="shadow-md">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">Cara Pembagian Warisan</h2>
              <p>
                Pembagian warisan dilakukan dengan menghitung bagian masing-masing
                ahli waris sesuai ketentuan Al-Qur'an. Misalnya, anak laki-laki
                mendapat bagian dua kali lipat dibanding anak perempuan, setelah
                seluruh kewajiban seperti utang dan wasiat diselesaikan.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contoh">
          <Card className="shadow-md">
            <CardContent className="p-4 space-y-2">
              <h2 className="text-xl font-semibold">Contoh Kasus</h2>
              <p>
                Seorang ayah meninggal meninggalkan harta Rp120.000.000,
                dengan ahli waris seorang istri, satu anak laki-laki, dan
                satu anak perempuan.
              </p>
              <p>
                - Istri mendapat 1/8 → Rp15.000.000 <br />
                - Sisa Rp105.000.000 dibagi 2:1 untuk anak laki-laki dan
                perempuan →
                <br />
                Anak laki-laki: Rp70.000.000, Anak perempuan: Rp35.000.000.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
