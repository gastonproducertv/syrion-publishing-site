import { motion } from "framer-motion";

const services = [
  "Registro de canciones y acuerdos de split",
  "Administración global de regalías (royalties)",
  "Distribución digital y sincronización",
  "Negociación de publishing deals personalizados",
  "Representación legal y consultoría musical"
];

export default function App() {
  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: "3rem", color: "#facc15" }}
      >
        Syrion Publishing
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        style={{ fontSize: "1.2rem", marginTop: "1rem", color: "#ccc" }}
      >
        Editorial musical independiente fundada por Gaston Producer.<br />
        Representamos, registramos y distribuimos música con transparencia y visión global.
      </motion.p>

      <section style={{ marginTop: "3rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>¿Qué ofrecemos?</h2>
        <ul style={{ textAlign: "left", lineHeight: "2" }}>
          {services.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.2 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </section>

      <motion.a
        href="#"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          display: "inline-block",
          marginTop: "2rem",
          padding: "1rem 2rem",
          backgroundColor: "#facc15",
          color: "#000",
          borderRadius: "8px",
          fontWeight: "bold",
          textDecoration: "none"
        }}
      >
        Contáctanos
      </motion.a>
    </main>
  );
}
