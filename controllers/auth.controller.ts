import { Request, Response, NextFunction } from "express";
import User from "../models/User";
import UserInterface from "../models/user.interface";
import jwt from "jsonwebtoken";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userFound = await User.findOne({ email: req.body.email }).select('+password');
    if (!userFound) return res.status(400).json({ message: "User Not found" });

    const machPassword = await User.validatePassword(
      req.body.password,
      userFound.password
    );

    if (!machPassword)
      return res.status(403).json({ token: null, message: "Invalid password" });

    const expira = Number(process.env.JWT_EXPIRATION);
    const token: string = jwt.sign(
      { sub: userFound.id },
      process.env.JWT_SECRET || "",
      {
        expiresIn: expira,
      }
    );

    res.header("auth-token", token).json({
      message: "User Logged Successful",
      user: userFound.username,
      token,
    });
  } catch (error) {
    res.status(404).send(`${error}`);
  }
};

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      username,
      nombre,
      apellido,
      email,
      telefono,
      edad,
      direccion,
      password,
    } = req.body;

    let user: UserInterface = new User({
      username,
      nombre,
      apellido,
      email,
      telefono,
      edad,
      password: await User.encryptPassword(password),
      direccion,
    });


    await user.save();
    const savedUser = await User.findById(user._id)
    
    res.json({ savedUser });
  } catch (error) {
    return next(error);
  }
};
