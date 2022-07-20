// userRoutesV2.0.ts

//---------------------------------/---------------------------------Imports
import { Router } from "express";
import * as Usuario from "../controllers/userControllerV2.0";
import { body, param, query, validationResult } from "express-validator";
import { validateFields } from "../helpers/validateFields";
import {
  ValidationID,
  ValidationEmail,
  ValidationUsername,
  postValidation,
  putValidationID,
  putValidationEmail,
  putValidationUsername,
  patchValidationID,
  patchValidationEmail,
  patchValidationUsername,
} from "../helpers/helpersValidators";
//---------------------------------/---------------------------------instancio router
const router = Router();

//---------------------------------/---------------------------------Rutas

//--------------------------------- Rutas Get

router.get("/", Usuario.getAllUsers); //Todos los usuarios
router.get("/id/:dato", ValidationID, Usuario.getUserById); //Usuario por id
router.get("/username/:dato", ValidationUsername, Usuario.getUserByUsername); //Usuario por username
router.get("/email/:dato", ValidationEmail, Usuario.getUserByEmail); //Usuario por email

//--------------------------------- Rutas Post

router.post("/", postValidation, Usuario.addUser); //Agregar usuario

//--------------------------------- Rutas Delete

router.delete("/id/:dato", ValidationID, Usuario.delUserById); //Eliminar usuario por id
router.delete("/username/:dato", ValidationUsername, Usuario.delUserByUsername); //Eliminar usuario por username
router.delete("/email/:dato", ValidationEmail, Usuario.delUserByEmail); //Eliminar usuario por email

//--------------------------------- Rutas patch(modificar)

router.patch("/id/:dato", patchValidationID, Usuario.editUserById); //Editar usuario por id
router.patch(
  "/username/:dato",
  patchValidationUsername,
  Usuario.editUserByUsername
); //Editar usuario por username
router.patch("/email/:dato", patchValidationEmail, Usuario.editUserByEmail); //Editar usuario por email

//--------------------------------- Rutas put(reemplazar)

router.put("/id/:dato", putValidationID, Usuario.replaceUserById); //Reemplazar usuario por id
router.put(
  "/username/:dato",
  putValidationEmail,
  Usuario.replaceUserByUsername
); //Reemplazar usuario por username
router.put("/email/:dato", putValidationUsername, Usuario.replaceUserByEmail); //Reemplazar usuario por email

export default router;
