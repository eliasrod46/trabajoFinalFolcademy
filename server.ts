// server.ts
//---------------------------------/---------------------------------Imports
import express from "express";
require("./mongoConn");

//---------------------------------Instanciamos el server de express
const app = express();

//---------------------------------/---------------------------------middlewears
app.use(express.json());

//---------------------------------/---------------------------------Rutas
//---------------------------------use rutas
import userRoutes from "./rutas/userRoutes";
app.use("/api/usuarios", userRoutes);

import userRoutesV2 from "./rutas/userRoutesV2.0";
app.use("/api/v2.0/usuarios", userRoutesV2);

//---------------------------------Ruta raiz
import apiHowToUse from "./welcome";
app.get("/", (req, res) => {
  res.send(apiHowToUse);
});

//-----------------------------------------------------------Levanto el Server
const port = 3001;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
