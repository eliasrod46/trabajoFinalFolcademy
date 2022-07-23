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
import apiHowToUse from "./helpers/welcome";
app.get("/", (req, res) => {
  res.send(apiHowToUse);
});

//---------------------------------use rutas
import userRoutesV2 from "./rutas/userRoutesV2.0";
app.use("/api/v2.0/usuarios", userRoutesV2);

//-----------------------------------------------------------Levanto el Server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
