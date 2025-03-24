import React from 'react'
import { motion } from 'framer-motion'

export default function App() {
  const services = [
    "Registro de canciones y acuerdos de splits",
    "Administración global de regalías (royalties)",
    "Distribución digital y sincronización",
    "Negociación de publishing deals personalizados",
    "Representación legal y consultoría editorial"
  ]

  return (
    <main style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "3rem", color: "#facc15" }}>Syrion Publishing</h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "auto", color: "#ccc" }}>
        Editorial musical independiente fundada por Gaston Producer. Representamos, registramos y distribuimos música con transparencia y visión global.
      </p>

      <h2 style={{ marginTop: "3rem", fontSize: "2rem" }}>Servicios</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem", marginTop: "1rem" }}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            style={{
              background: "#1f1f1f",
              padding: "20px",
              borderRadius: "12px",
              color: "white",
              maxWidth: "600px",
              margin: "auto"
            }}
          >
            {service}
          </motion.div>
        ))}
      </div>
    </main>
  )
}
