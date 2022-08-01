// validateFields.ts
import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

//Verifica si hay errores capturados
export const validateFields = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  next();
};
