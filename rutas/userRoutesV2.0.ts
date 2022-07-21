// userRoutesV2.0.ts
//---------------------------------/---------------------------------Imports
import { Router } from "express";
import * as Usuario from "../controllers/userControllerV2.0";
import * as validationHelpers from "../helpers/helpersValidators";

//---------------------------------/---------------------------------instancio router
const router = Router();

//--------------------------------- Rutas Get

router.get("/", validationHelpers.ValidationQuery, Usuario.getAllUsers); //Todos los usuarios
router.get("/id/:dato", validationHelpers.ValidationID, Usuario.getUserById); //Usuario por id
router.get(
  "/username/:dato",
  validationHelpers.ValidationUsername,
  Usuario.getUserByUsername
); //Usuario por username
router.get(
  "/email/:dato",
  validationHelpers.ValidationEmail,
  Usuario.getUserByEmail
); //Usuario por email

//--------------------------------- Rutas Post

router.post("/", validationHelpers.postValidation, Usuario.addUser); //Agregar usuario

//--------------------------------- Rutas Delete

router.delete("/id/:dato", validationHelpers.ValidationID, Usuario.delUserById); //Eliminar usuario por id
router.delete(
  "/username/:dato",
  validationHelpers.ValidationUsername,
  Usuario.delUserByUsername
); //Eliminar usuario por username
router.delete(
  "/email/:dato",
  validationHelpers.ValidationEmail,
  Usuario.delUserByEmail
); //Eliminar usuario por email

//--------------------------------- Rutas patch(modificar)

router.patch(
  "/id/:dato",
  validationHelpers.patchValidationID,
  Usuario.editUserById
); //Editar usuario por id
router.patch(
  "/username/:dato",
  validationHelpers.patchValidationUsername,
  Usuario.editUserByUsername
); //Editar usuario por username
router.patch(
  "/email/:dato",
  validationHelpers.patchValidationEmail,
  Usuario.editUserByEmail
); //Editar usuario por email

//--------------------------------- Rutas put(reemplazar)

router.put(
  "/id/:dato",
  validationHelpers.putValidationID,
  Usuario.replaceUserById
); //Reemplazar usuario por id
router.put(
  "/username/:dato",
  validationHelpers.putValidationUsername,
  Usuario.replaceUserByUsername
); //Reemplazar usuario por username
router.put(
  "/email/:dato",
  validationHelpers.putValidationEmail,
  Usuario.replaceUserByEmail
); //Reemplazar usuario por email

export default router;
