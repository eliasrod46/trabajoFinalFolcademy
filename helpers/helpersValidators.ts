import { NextFunction } from "express";
import { check, oneOf } from "express-validator";
import { validateFields } from "./validateFields";

//Post
export const postValidation = [
  //username
  check("username")
    //.toLowerCase()
    .matches(/\w/)
    .withMessage("El nombre de usuario debe contener a-z, 0-9 o _")
    .isLength({ min: 5 })
    .withMessage("El nombre de usuario debe contener al menos 5 caracteres"),

  //email
  check("email", "EL email debe tener un formato valido")
    .isEmail()
    .normalizeEmail(),

  //password
  check("password")
    .isLength({ min: 8 })
    .withMessage("El password debe tener al menos 8 caracteres"),

  validateFields,
];

//Put
export const putValidation = [
  //username
  check("username")
    //.toLowerCase()
    .matches(/\w/)
    .withMessage("El nombre de usuario debe contener a-z, 0-9 o _")
    .isLength({ min: 5 })
    .withMessage("El nombre de usuario debe contener al menos 5 caracteres"),

  //email
  check("email", "EL email debe tener un formato valido")
    .isEmail()
    .normalizeEmail(),

  //password
  check("password")
    .isLength({ min: 8 })
    .withMessage("El password debe tener al menos 8 caracteres"),
];

export const putValidationID = [
  //put id
  ...putValidation,
  check("dato")
    .isMongoId()
    .withMessage("El id debe tener el formato de id de mongoDB"),
  validateFields,
];

export const putValidationEmail = [
  //put email
  ...putValidation,
  check("dato")
    .isEmail()
    .withMessage("El email debe tener el formato de email"),
  validateFields,
];

export const putValidationUsername = [
  //put username

  ...putValidation,
  check("dato").isString().withMessage("El username debe ser tipo string"),
  validateFields,
];

//patch
export const patchValidation = [
  //username
  oneOf([
    check("username")
      //.toLowerCase()
      .matches(/\w/)
      .withMessage("El nombre de usuario debe contener a-z, 0-9 o _")
      .isLength({ min: 5 })
      .withMessage("El nombre de usuario debe contener al menos 5 caracteres"),

    //email
    check("email", "EL email debe tener un formato valido")
      .isEmail()
      .normalizeEmail(),

    //password
    check("password")
      .isLength({ min: 8 })
      .withMessage("El password debe tener al menos 8 caracteres"),
  ]),
];

export const patchValidationID = [
  //patch id
  ...patchValidation,
  check("dato")
    .isMongoId()
    .withMessage("El id debe tener el formato de id de mongoDB"),
  validateFields,
];

export const patchValidationEmail = [
  //patch email
  ...patchValidation,
  check("dato")
    .isEmail()
    .withMessage("El email debe tener el formato de email"),
  validateFields,
];

export const patchValidationUsername = [
  //patch username
  ...patchValidation,
  check("dato").isString().withMessage("El username debe ser tipo string"),
  validateFields,
];

//validation params
export const ValidationID = [
  //delete id
  check("dato")
    .isMongoId()
    .withMessage("El id debe tener el formato de id de mongoDB"),
  validateFields,
];

export const ValidationEmail = [
  //delete email
  check("dato").isEmail().withMessage("El email debe tener el formato valido"),
  validateFields,
];

export const ValidationUsername = [
  //delete username
  check("dato").isString().withMessage("El username debe ser tipo string"),
  validateFields,
];
