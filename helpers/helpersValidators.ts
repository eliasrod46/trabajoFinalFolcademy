// helpersValidation.ts
import { NextFunction } from "express";
import { check, oneOf } from "express-validator";
import { validateFields } from "./validateFields";

//**Arreglos que contienen las diferentes validaciones que van a tener que pasar los diferentes endpoints**

//validation params (Se usan para los metodos get y delete que reciben params pero no body)
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

//validation queries (la uso para el getAll que es el unico que recibe queryparams)
export const ValidationQuery = [
  //delete username
  check("order")
    .toUpperCase()
    .isString()
    .withMessage("El query order debe ser tipo string")
    .isIn(["ASC", "DESC"])
    .withMessage("El query order debe ser 'ASC' o 'DESC'"),

  check("atributo")
    .toLowerCase()
    .isString()
    .withMessage("El query atributo debe ser tipo string")
    .isIn(["username", "email", "id"])
    .withMessage("El  query atributo debe ser 'username', 'email', 'id'"),
  validateFields,
];

//Post (Valida el body de las peticiones post)
export const postValidation = [
  //username
  check("username")
    .toLowerCase()
    .matches(/\w/)
    .withMessage("El nombre de usuario debe contener a-z, 0-9 o _")
    .isLength({ min: 5 })
    .withMessage("El nombre de usuario debe contener al menos 5 caracteres"),

  //email
  check("email", "EL email debe tener un formato valido")
    .toLowerCase()
    .isEmail()
    .normalizeEmail(),

  //password
  check("password")
    .isLength({ min: 8 })
    .withMessage("El password debe tener al menos 8 caracteres"),

  validateFields,
];

//Put
//(Valida el body de las peticiones put)
export const putValidation = [
  //username
  check("username")
    .toLowerCase()
    .matches(/\w/)
    .withMessage("El nombre de usuario debe contener a-z, 0-9 o _")
    .isLength({ min: 5 })
    .withMessage("El nombre de usuario debe contener al menos 5 caracteres"),

  //email
  check("email", "EL email debe tener un formato valido")
    .toLowerCase()
    .isEmail()
    .normalizeEmail(),

  //password
  check("password")
    .isLength({ min: 8 })
    .withMessage("El password debe tener al menos 8 caracteres"),
];

//(Valida el param (id) y agrega putValidation)
export const putValidationID = [
  //put id
  ...putValidation,
  check("dato")
    .isMongoId()
    .withMessage("El id debe tener el formato de id de mongoDB"),
  validateFields,
];

//(Valida el param (email) y agrega putValidation)
export const putValidationEmail = [
  //put email
  ...putValidation,
  check("dato")
    .isEmail()
    .withMessage("El email debe tener el formato de email"),
  validateFields,
];

//(Valida el param (username) y agrega putValidation)
export const putValidationUsername = [
  //put username

  ...putValidation,
  check("dato").isString().withMessage("El username debe ser tipo string"),
  validateFields,
];

//patch
//(Valida el body de las peticiones patch)
export const patchValidation = [
  //username
  oneOf([
    check("username")
      .toLowerCase()
      .matches(/\w/)
      .withMessage("El nombre de usuario debe contener a-z, 0-9 o _")
      .isLength({ min: 5 })
      .withMessage("El nombre de usuario debe contener al menos 5 caracteres"),

    //email
    check("email", "EL email debe tener un formato valido")
      .toLowerCase()
      .isEmail()
      .normalizeEmail(),

    //password
    check("password")
      .isLength({ min: 8 })
      .withMessage("El password debe tener al menos 8 caracteres"),
  ]),
];

//(Valida el param (id) y agrega patchValidation)
export const patchValidationID = [
  //patch id
  ...patchValidation,
  check("dato")
    .isMongoId()
    .withMessage("El id debe tener el formato de id de mongoDB"),
  validateFields,
];

//(Valida el param (email) y agrega patchValidation)
export const patchValidationEmail = [
  //patch email
  ...patchValidation,
  check("dato")
    .isEmail()
    .withMessage("El email debe tener el formato de email"),
  validateFields,
];

//(Valida el param (username) y agrega patchValidation)
export const patchValidationUsername = [
  //patch username
  ...patchValidation,
  check("dato").isString().withMessage("El username debe ser tipo string"),
  validateFields,
];
