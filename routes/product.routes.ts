// product.routes.ts
//---------------------------------/---------------------------------Imports
import { Router } from "express";
import * as productCnlr from "../controllers/product.controller";
import * as validateReq from "../middlewares/product.validators";
import * as authValidator from "../middlewares/auth.middleware";

//---------------------------------/---------------------------------instancio router
const router = Router();

//--------------------------------- Rutas

router.get("/", productCnlr.getAll); //Todos los productos
router.get("/:id", validateReq.mongoIdValidation, productCnlr.getById); //producto por id
router.post(
  "/",
  [authValidator.verifyToken, ...validateReq.postPutValidation],
  productCnlr.add
); //Agregar producto
router.put(
  "/:id",
  [
    authValidator.verifyToken,
    ...validateReq.mongoIdValidation,
    ...validateReq.postPutValidation,
  ],
  productCnlr.editById
); //Editar producto por id
router.delete("/:id", [authValidator.verifyToken], productCnlr.delById); //Eliminar producto por id

export default router;
