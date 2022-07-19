// userRoutes.ts
/*
Las rutas get, put y delete tienen un switch que decide que hacer si vienen datos por params:
*en el caso de rutas get defino: si viene por params vacio, "id", "username", "email" para mostrar todo o mostrar uno por el criterio recibido
*en el caso de rutas put y delete defino: si viene por params "id", "username", "email" para editar/eliminar uno por el criterio recibido
*/

//---------------------------------/---------------------------------Imports
import { Router } from "express";
import * as Usuario from "../controllers/userControllerV2.0";

//---------------------------------/---------------------------------instancio router
const router = Router();

//---------------------------------/---------------------------------Rutas

//--------------------------------- Rutas Get

router.get("/", Usuario.getAllUsers); //Todos los usuarios
router.get("/id/:dato", Usuario.getUserById); //Usuario por id
router.get("/username/:dato", Usuario.getUserByUsername); //Usuario por username
router.get("/email/:dato", Usuario.getUserByEmail); //Usuario por email

//--------------------------------- Rutas Post

router.post("/", Usuario.addUser); //Agregar usuario

//--------------------------------- Rutas Delete

router.delete("/id/:dato", Usuario.delUserById); //Eliminar usuario por id
router.delete("/username/:dato", Usuario.delUserByUsername); //Eliminar usuario por username
router.delete("/email/:dato", Usuario.delUserByEmail); //Eliminar usuario por email

//--------------------------------- Rutas Put

router.patch("/id/:dato", Usuario.editUserById); //Editar usuario por id
router.patch("/username/:dato", Usuario.editUserByUsername); //Editar usuario por username
router.patch("/email/:dato", Usuario.editUserByEmail); //Editar usuario por email

export default router;
