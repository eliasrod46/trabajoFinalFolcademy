// helpersValidation.ts
import { check } from "express-validator";
import { validateFields } from "./validateFields";

export const postPutValidation = [
  //nombre
  check("nombre")
    .trim()
    .isLength({ min: 1 })
    .withMessage("El nombre del producto debe contener al menos 1 caracteres"),

  //description
  check("description", "EL nombre debe contener algun valor y ser  un texto")
    .trim()
    .isLength({ min: 1 })
    .isString(),

  //precio
  check("precio", "EL precio debe ser numerico").isNumeric(),

  //stock
  check("stock", "EL precio debe ser numerico").isNumeric(),

  validateFields,
];

export const mongoIdValidation = [
  //id
  check("id").isMongoId().withMessage("El id tiene que ser un id de mongoDB"),

  validateFields,
];
