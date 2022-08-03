// userRoutesV2.0.ts
//---------------------------------/---------------------------------Imports
import { Router } from "express";
import * as authCnlr from "../controllers/auth.controller";
import * as userInputValidator from "../middlewares/user.validators";

//---------------------------------/---------------------------------instancio router
const router = Router();

//--------------------------------- Rutas Get

router.post(
  "/signup",
  [...userInputValidator.postPutValidation],
  authCnlr.signup
); //registro

router.post("/login",  [...userInputValidator.logginValidation],authCnlr.login); //Logeo

export default router;
