
import React from "react";
import { motion } from "framer-motion";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{ fontSize: "3rem", fontWeight: "bold", color: "#ffeb3b" }}
      >
        Syrion Publishing
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        style={{ fontSize: "1.2rem", marginTop: "1rem", color: "#ccc" }}
      >
        <>
          Editorial musical independiente fundada por Gaston Producer.<br />
          Representamos, registramos y distribuimos música con transparencia y visión global.
        </>
      </motion.p>
    </div>
  );
}

export default App;
