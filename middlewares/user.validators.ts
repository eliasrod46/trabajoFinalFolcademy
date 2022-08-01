// helpersValidation.ts
import { check } from "express-validator";
import { validateFields } from "./validateFields";

export const postPutValidation = [
  //username
  check("username")
    .trim()
    .toLowerCase()
    .matches(/\w/)
    .withMessage("El nombre de usuario debe contener a-z, 0-9 o _")
    .isLength({ min: 5 })
    .withMessage("El nombre de usuario debe contener al menos 5 caracteres"),

  //nombre
  check("nombre", "EL nombre debe contener algun valor y ser  un texto")
    .trim()
    .toUpperCase()
    .isLength({ min: 1 })
    .isString(),

  //apellido
  check("apellido", "EL apellido debe contener algun valor y ser  un texto")
    .trim()
    .toUpperCase()
    .isLength({ min: 1 })
    .isString(),

  //email
  check("email", "EL email debe tener un formato valido")
    .trim()
    .toLowerCase()
    .isEmail()
    .normalizeEmail(),

  //password
  check("password")
    .isLength({ min: 8 })
    .withMessage("El password debe tener al menos 8 caracteres"),

  validateFields,
];

export const mongoIdValidation = [
  //id
  check("id").isMongoId().withMessage("El id tiene que ser un id de mongoDB"),

  validateFields,
];

export const logginValidation = [
  //email
  check("email", "EL email debe tener un formato valido")
    .trim()
    .toLowerCase()
    .isEmail()
    .normalizeEmail(),

  //password
  check("password")
    .isLength({ min: 8 })
    .withMessage("El password debe tener al menos 8 caracteres"),

  validateFields,
];

//-------------------------------------------------------------------------------------------------------------------------------------------------------------
