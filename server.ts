// server.ts
//---------------------------------/---------------------------------Imports
import express from "express";
require("./mongoConn");

//---------------------------------Instanciamos el server de express
const app = express();

//---------------------------------/---------------------------------middlewears
app.use(express.json());

//---------------------------------/---------------------------------Rutas

//---------------------------------Ruta raiz
import apiHowToUse from "./helpers/welcome";
app.get("/", (req, res) => {
  res.send(apiHowToUse);
});

//---------------------------------use rutas
// import userRoutes from "./rutas/userRoutes";
// app.use("/api/v1.0/usuarios", userRoutes);

import userRoutesV2 from "./rutas/userRoutesV2.0";
app.use("/api/v2.0/usuarios", userRoutesV2);

//-----------------------------------------------------------Levanto el Server
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
