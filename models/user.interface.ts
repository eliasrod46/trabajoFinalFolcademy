// user.interface.ts
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
}

export default UserInterface;
