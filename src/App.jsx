import React from "react";
import { motion } from "framer-motion";

export default function App() {
  const services = [
    "Registro de canciones y acuerdos de splits",
    "Administración global de regalías (royalties)",
    "Distribución digital y sincronización",
    "Negociación de publishing deals personalizados",
    "Representación legal y consultoría editorial"
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 font-sans">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400">
          Syrion Publishing
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
          Editorial musical independiente fundada por Gaston Producer.
          Representamos, registramos y distribuimos música con transparencia
          y visión global.
        </p>
        <button className="bg-yellow-400 text-black hover:bg-yellow-300 px-6 py-2 rounded-lg font-bold transition">
          Contáctanos
        </button>
      </section>

      {/* Services Section */}
      <section className="mt-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
          Servicios
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-900 rounded-xl p-6 shadow-md border border-zinc-700"
            >
              <p className="text-yellow-300 font-medium">{service}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
