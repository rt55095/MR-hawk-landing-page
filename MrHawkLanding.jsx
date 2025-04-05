import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function MrHawkLanding() {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-6 md:px-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold mb-4 text-center"
      >
        Domina los Prop Firms con Mr. Hawk
      </motion.h1>

      <p className="text-center text-lg md:text-xl mb-10">
        El bot que ha pasado múltiples fases y ahora puede trabajar para ti.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="bg-zinc-900">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-2">Comunidad Base</h3>
            <ul className="space-y-2 text-sm">
              <li><CheckCircle className="inline w-4 mr-1" /> Canal de señales</li>
              <li><CheckCircle className="inline w-4 mr-1" /> Análisis semanales</li>
              <li><CheckCircle className="inline w-4 mr-1" /> Educación y soporte</li>
            </ul>
            <p className="mt-4 font-bold text-lg">$49/mes</p>
            <Button className="mt-2 w-full">Unirme</Button>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-2">Club Élite</h3>
            <ul className="space-y-2 text-sm">
              <li><CheckCircle className="inline w-4 mr-1" /> Acceso a Mr. Hawk</li>
              <li><CheckCircle className="inline w-4 mr-1" /> Sesiones privadas</li>
              <li><CheckCircle className="inline w-4 mr-1" /> Soporte para prop firms</li>
              <li><CheckCircle className="inline w-4 mr-1" /> Comunidad VIP</li>
            </ul>
            <p className="mt-4 font-bold text-lg">$199/mes o $997 lifetime</p>
            <Button className="mt-2 w-full">Acceder</Button>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-2">Licencia del Bot</h3>
            <ul className="space-y-2 text-sm">
              <li><CheckCircle className="inline w-4 mr-1" /> Uso en 1 cuenta</li>
              <li><CheckCircle className="inline w-4 mr-1" /> Resultados comprobados</li>
              <li><CheckCircle className="inline w-4 mr-1" /> Sin mensualidades ocultas</li>
            </ul>
            <p className="mt-4 font-bold text-lg">$149/mes</p>
            <Button className="mt-2 w-full">Quiero el Bot</Button>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-10">
        <p className="text-sm text-zinc-400">Mr. Hawk es un bot privado con plazas limitadas. Solo los primeros 20 tendrán acceso prioritario.</p>
      </div>
    </div>
  );
}
