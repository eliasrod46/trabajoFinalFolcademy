// userRoutes.ts
/*
Las rutas get, put y delete tienen un switch que decide que hacer si vienen datos por params:
*en el caso de rutas get defino: si viene por params vacio, "id", "username", "email" para mostrar todo o mostrar uno por el criterio recibido
*en el caso de rutas put y delete defino: si viene por params "id", "username", "email" para editar/eliminar uno por el criterio recibido
*/

//---------------------------------/---------------------------------Imports
import { Router } from "express";
import * as Usuario from "../controllers/userController";
//---------------------------------/---------------------------------instancio router
const router = Router();

//---------------------------------/---------------------------------Rutas Principales
// Mostrar usuario/s
router.get("/:buscaPor?/:dato?", async (req, res) => {
  //Lista todos los usuarios

  //Recibo valores de params, son dos y son opcionales: buscaPor(id, username, email) y dato(informacion)
  const { buscaPor, dato } = req.params;

  //declaro y defino variable respuesta
  let respuesta = "Parametro no valido";

  //switch que determina si devuelve todos los usuaurio o alguno determiando por id, username o email
  switch (buscaPor) {
    case undefined:
      //undefined -> traigo todos los usuarios
      respuesta = await Usuario.getAllUsers();
      break;

    case "id":
      //id -> traigo el usuario con el id recibido - verifico si recibi algo en dato
      dato
        ? (respuesta = await Usuario.getUserById(dato))
        : (respuesta = "No ingreso ningun id");
      break;

    case "username":
      //username -> traigo el usuario con el username recibido - verifico si recibi algo en dato
      dato
        ? (respuesta = await Usuario.getUserByUsername(dato))
        : (respuesta = "No ingreso ningun nombre de usuario");
      break;

    case "email":
      //email -> traigo el usuario con el email recibido - verifico si recibi algo en dato
      dato
        ? (respuesta = await Usuario.getUserByEmail(dato))
        : (respuesta = "No ingreso ninguna direccion de email");
      break;

    default:
      "";
      break;
  }
  res.json({ respuesta });
});

// Agregar usuario
router.post("/", async (req, res) => {
  //Agrega un usuario

  //Guardo al usuario en la BBDD  llamando a la funcion addUser() enviandole el body
  const userSaved = await Usuario.addUser(req.body);
  res.json({ mensaje: `Usuario Agregado con exito con id: ${userSaved._id}` });
});

// Editar Usuario por id
router.put("/:buscaPor?/:dato?", async (req, res) => {
  //Actualiza un usuario por id

  //Recibo valores de params, son dos y son opcionales: buscaPor(id, username, email) y dato(informacion)
  const { buscaPor, dato } = req.params;

  //declaro variable respuesta
  let respuesta;

  //switch que determina si se va a seleccionar el usuario a editar por: id, username o email
  switch (buscaPor) {
    case "id":
      //id -> traigo el usuario con el id recibido - verifico si recibi algo en dato
      dato
        ? (respuesta = await Usuario.editUserById(dato, req.body))
        : (respuesta = "No ingreso ningun id");
      break;

    case "username":
      //username -> traigo el usuario con el username recibido - verifico si recibi algo en dato
      dato
        ? (respuesta = await Usuario.editUserByUsername(dato, req.body))
        : (respuesta = "No ingreso ningun nombre de usuario");
      break;

    case "email":
      //email -> traigo el usuario con el email recibido - verifico si recibi algo en dato
      dato
        ? (respuesta = await Usuario.editUserByEmail(dato, req.body))
        : (respuesta = "No ingreso ninguna direccion de email");
      break;

    default:
      respuesta = "Parametro no valido";
      break;
  }

  res.json({ mensaje: `${respuesta}` });
});

// delete Usuario por id
router.delete("/:buscaPor?/:dato?", async (req, res) => {
  //Elimina un usuario
  //Recibo valores de params, son dos y son opcionales: buscaPor(id, username, email) y dato(informacion)
  const { buscaPor, dato } = req.params;

  //declaro variable respuesta
  let respuesta;

  //switch que determina si se va a seleccionar el usuario a eliminar por: id, username o email
  switch (buscaPor) {
    case "id":
      //id -> traigo el usuario con el id recibido - verifico si recibi algo en dato
      dato
        ? (respuesta = await Usuario.delUserById(dato))
        : (respuesta = "No ingreso ningun id");
      break;

    case "username":
      //username -> traigo el usuario con el username recibido - verifico si recibi algo en dato
      dato
        ? (respuesta = await Usuario.delUserByUsername(dato))
        : (respuesta = "No ingreso ningun nombre de usuario");
      break;

    case "email":
      //email -> traigo el usuario con el email recibido - verifico si recibi algo en dato
      dato
        ? (respuesta = await Usuario.delUserByEmail(dato))
        : (respuesta = "No ingreso ninguna direccion de email");
      break;

    default:
      respuesta = "Parametro no valido";
      break;
  }
  res.json({ mensaje: `${respuesta}` });
});

export default router;
