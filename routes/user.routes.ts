// userRoutesV2.0.ts
//---------------------------------/---------------------------------Imports
import { Router } from "express";
import * as userCnlr from "../controllers/user.controller";
import * as validateReq from "../helpers/helpersValidators";
import * as authValidator from "../auth/auth.middleware";

//---------------------------------/---------------------------------instancio router
const router = Router();

//--------------------------------- Rutas Get

router.get("/", authValidator.verifyToken, userCnlr.getAll); //Todos los usuarios
router.get("/:id", userCnlr.getById); //Usuario por id
router.post("/", userCnlr.add); //Eliminar usuario por id
router.delete("/:id", userCnlr.delById); //Eliminar usuario por id
router.put("/:id", userCnlr.editById); //Editar usuario por id

export default router;
