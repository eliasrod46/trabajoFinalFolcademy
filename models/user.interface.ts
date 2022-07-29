// userModel.ts
//---------------------------------/---------------------------------Imports
import { Document } from "mongoose";

//---------------------------------/---------------------------------Creamos el Schema
interface UserInterface extends Document {
  nombre: string;
  email: string;
  password: string;
  edad: number;
  direccion: String;
  telefono: String;
  apellido: String;
  username: String;
  encryptPassword(contraseña: string): Promise<boolean>;
}

export default UserInterface;
