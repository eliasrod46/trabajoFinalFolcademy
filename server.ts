// server.ts
//---------------------------------/---------------------------------Imports
import express from "express";
require("dotenv").config();
require("./mongoConn");

//---------------------------------Instanciamos el server de express
const app = express();

//---------------------------------/---------------------------------middlewears
app.use(express.json());

//---------------------------------/---------------------------------Rutas

//---------------------------------Ruta raiz

app.get("/", (req, res) => {
  res.json({
    name: "practica Backend ApiREST",
    author: "Elias Rodriguez",
    description: "BackPracticaFolcademy",
    version: "1.0.0",
  });
});

//---------------------------------user
import userRoutes from "./routes/user.routes";
app.use("/api/usuarios", userRoutes);

//---------------------------------products
import productRoutes from "./routes/product.routes";
app.use("/api/productos", productRoutes);

//---------------------------------auth
import authRoutes from "./auth/auth.routes";
app.use("/api/auth", authRoutes);

//-----------------------------------------------------------Levanto el Server
const port = process.env.PORT_SERVER;
app.listen(port, () => {
  console.log(`Servidor escuchando en puerto: ${port}`);
});
