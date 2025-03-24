import { motion } from "framer-motion";

const services = [
  "Registro de canciones y acuerdos de splits",
  "Administración global de regalías (royalties)",
  "Distribución digital y sincronización",
  "Negociación de publishing deals personalizados",
  "Representación legal y consultoría editorial"
];

const catalogo = [
  { titulo: "Éxito 1", cover: "🎵" },
  { titulo: "Éxito 2", cover: "🔥" },
  { titulo: "Éxito 3", cover: "💽" }
];

const artistas = [
  { nombre: "Lírico en la Casa", foto: "🧢" },
  { nombre: "Flow Mafia", foto: "🎤" }
];

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 space-y-16 text-center">
      <header>
        <h1 className="text-5xl font-bold text-yellow-400">Syrion Publishing</h1>
        <p className="mt-4 max-w-xl mx-auto text-gray-300">
          Editorial musical independiente fundada por Gaston Producer.
          Representamos, registramos y distribuimos música con transparencia y visión global.
        </p>
      </header>

      <section>
        <h2 className="text-3xl font-bold text-white mb-6">Servicios</h2>
        <div className="grid gap-4 max-w-md mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="bg-neutral-800 p-4 rounded-xl"
              whileHover={{ scale: 1.05 }}
            >
              {s}
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-white mb-6">Catálogo Musical</h2>
        <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
          {catalogo.map((track, i) => (
            <div key={i} className="bg-neutral-900 p-4 rounded-xl text-white">
              <div className="text-4xl mb-2">{track.cover}</div>
              <p className="font-semibold">{track.titulo}</p>
              <button className="mt-2 px-4 py-1 bg-yellow-500 text-black rounded">Escuchar</button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-white mb-6">Artistas Representados</h2>
        <div className="flex justify-center gap-10 flex-wrap">
          {artistas.map((a, i) => (
            <div key={i} className="text-white text-center">
              <div className="text-5xl mb-2">{a.foto}</div>
              <p>{a.nombre}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-lg mx-auto text-left space-y-4">
        <h2 className="text-3xl font-bold text-white text-center">Contáctanos</h2>
        <input className="w-full p-2 rounded bg-neutral-800 text-white" placeholder="Tu nombre" />
        <input className="w-full p-2 rounded bg-neutral-800 text-white" placeholder="Correo electrónico" />
        <textarea className="w-full p-2 rounded bg-neutral-800 text-white" rows="4" placeholder="Mensaje" />
        <button className="px-6 py-2 bg-yellow-500 text-black rounded w-full">Enviar</button>
      </section>
    </div>
  );
}
