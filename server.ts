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
    version: "1.5.0",
  });
});

//---------------------------------rutas imports
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import productRoutes from "./routes/product.routes";

//---------------------------------rutas
app.use("/api/usuarios", userRoutes);
app.use("/api/productos", productRoutes);
app.use("/api/auth", authRoutes);

//-----------------------------------------------------------Levanto el Server

const port = (process.env.PORT_SERVER as unknown as number) || 5000;
const host = process.env.HOST || '0.0.0.0';

app.listen(port, host, () => {
  console.info('Servidor escuchando' + port);
});
