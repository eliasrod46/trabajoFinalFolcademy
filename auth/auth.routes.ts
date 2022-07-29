// userRoutesV2.0.ts
//---------------------------------/---------------------------------Imports
import { Router } from "express";
import * as authCnlr from "./auth.controller";
import * as validateReq from "../helpers/helpersValidators";

//---------------------------------/---------------------------------instancio router
const router = Router();

//--------------------------------- Rutas Get

router.post("/signup", authCnlr.signup); //Eliminar usuario por id
router.post("/login", authCnlr.login); //Eliminar usuario por id

export default router;
