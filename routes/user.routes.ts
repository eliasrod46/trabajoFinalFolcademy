// user.routes.ts
//---------------------------------/---------------------------------Imports
import { Router } from "express";
import * as userCnlr from "../controllers/user.controller";
//middlewares
import * as userInputValidator from "../middlewares/user.validators";
import * as authValidator from "../middlewares/auth.middleware";

//---------------------------------/---------------------------------instancio router
const router = Router();

//--------------------------------- Rutas

router.get("/", userCnlr.getAll); //Todos los usuarios

router.post(
  "/",
  [authValidator.verifyToken, ...userInputValidator.postPutValidation],
  userCnlr.add
); //Agregar Usuario

router.get("/:id", userInputValidator.mongoIdValidation, userCnlr.getById); //Usuario por id

router.put(
  "/:id",
  [
    authValidator.verifyToken,
    ...userInputValidator.postPutValidation,
    ...userInputValidator.mongoIdValidation,
  ],
  userCnlr.editById
); //Editar usuario por id

router.delete(
  "/:id",
  [authValidator.verifyToken, ...userInputValidator.mongoIdValidation],
  userCnlr.delById
); //Eliminar usuario por id

export default router;
