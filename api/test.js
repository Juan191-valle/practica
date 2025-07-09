export default function handler(req, res) {
  console.log("🚀 Se activó la función FaaS desde Vercel");

  const hora = new Date().toLocaleTimeString();

  res.status(200).json({
    mensaje: "Función ejecutada correctamente desde Vercel",
    hora: hora
  });

  console.log("✅ La función terminó. Se apaga el entorno.");
}
