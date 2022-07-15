// server.ts
//---------------------------------/---------------------------------Imports
import express from "express";
const { Schema, model } = require("mongoose");

//Importo conexion a BBDD con mongogose
require("./mongoConn");

//---------------------------------Instanciamos el server de express
const app = express();

//---------------------------------/---------------------------------middlewears
app.use(express.json());

//---------------------------------/---------------------------------Schema y Model mongoose

const UserSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

//---------------------------------/---------------------------------Creamos y exportamos el Model
const userModel = model("Users", UserSchema);

//---------------------------------/---------------------------------Rutas

//---------------------------------Ruta raiz
app.get("/", (req, res) => {
  res.send(`
                <h1>Desafio 3 - api-productos(get - post - delete) - conectado a mongoDb con Mongoose</h1>
                
                <h2>Elias Rodriguez</h2>

                <h4>En este desafio implementamos una conexion a mongoDB con mongoose y establecimos dos endpoints get(trate todos los usuarios), post(agrega un usaurio) y delete(elimina un usuario indicando su username)</h4>
                
                <h3>Iniciar el servidor</h3>

                Para iniciar el server y probar la api seguimos los siguientes pasos en la terminal
                
                <ul>
                  <li>npm i</li>
                  <li>npm run dev-server</li>
                </ul>

                El puerto por defecto es 3000

                <h3>Descripcion de la api</h3>
                <h4>La api cuenta con con 3 endpoints, get, post y delete</h4>
                <ul>
                  <li>get -> obtener todos los usuarios</li>
                  <li>post -> agregar un usuario(datos por body)</li>
                  <li>delete -> eliminar usuario por username(datos por params)</li>
                </ul>

                <h3>URL</h3>
                <ul>
                  <li>get -> url:port/usuarios -> ej. localhost:3000/usuarios</li>
                  <li>post -> url:port/usuarios  -> ej. localhost:3000/usuarios (formato del body acontinuacion)</li>
                  <li>delete -> url:port/usuarios -> ej. localhost:3000/usuarios/:username (username va en la url como parametro)</li>
                </ul>

                <h3>Formato body</h3>
                <h4>El body tiene 3 atributos(nombre, precio, stock)</h6>
                <h4>Para agregar un producto(post) todos los parametros son oblicatorios</h4>
                {
                  username: "",
                  email: "",
                  password: ""
                 }
`);
});

app.get("/usuarios", async (req, res) => {
  const respuesta = await userModel.find();
  res.json({ respuesta });
});

app.post("/usuarios", async (req, res) => {
  //instancio un modelo UserModel con los datos recibidos y lo guardo
  const newUser = new userModel(req.body);
  const respuesta = await newUser.save();
  res.json({
    Mensaje: `Usuario agregado con exito su id es: ${respuesta._id}`,
  });
});

app.delete("/usuarios/:username", async (req, res) => {
  //Rebido datos de params
  const { username } = req.params;
  //Ejecuto metodo deleteOne()
  const respuesta = await userModel.deleteOne({ username: username });
  //consulto el contador de elementos eliminados que devuelve la funcion deleteOne
  const mensaje =
    respuesta.deletedCount == 1
      ? "Se elimino el usuario con exito"
      : "No se encontro el usuario con el id ingresado";

  res.json({ mensaje });
});

//-----------------------------------------------------------Levanto el Server
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
