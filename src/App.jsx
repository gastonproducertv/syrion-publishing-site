import React from "react";

const services = [
  "Registro de canciones y acuerdos de splits",
  "Administración global de regalías (royalties)",
  "Distribución digital y sincronización",
  "Negociación de publishing deals personalizados",
  "Representación legal y consultoría editorial"
];

function App() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1 style={{ fontSize: "3rem", color: "#facc15" }}>Syrion Publishing</h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "20px auto", color: "#ccc" }}>
        Editorial musical independiente fundada por Gaston Producer. Representamos, registramos y distribuimos música con transparencia y visión global.
      </p>

      <button style={{ backgroundColor: "#facc15", padding: "10px 20px", border: "none", fontWeight: "bold", borderRadius: "5px", color: "#000" }}>
        Contáctanos
      </button>

      <div style={{ marginTop: "60px" }}>
        <h2 style={{ color: "#fff" }}>Servicios</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {services.map((item, i) => (
            <li key={i} style={{ padding: "8px 0", color: "#aaa" }}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
