import User from "../models/User";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let token: string = String(req.headers["x-access-token"]);
    if (!token) return res.status(403).json({ message: "No token provided" });

    const decoded = jwt.verify(token, String(process.env.JWT_SECRET));
    req.userId = String(decoded.sub);

    const user = await User.findById(req.userId, "username");
    if (!user) return res.status(404).json({ message: "no userfound" });
    next();
  } catch (error) {
    res.status(403).json({ message: error });
  }
};
