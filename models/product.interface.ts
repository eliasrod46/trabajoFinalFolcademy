// product.interface.ts
//---------------------------------/---------------------------------Imports
import { Document } from "mongoose";

//---------------------------------/---------------------------------Creamos el Schema
interface UserInterface extends Document {
  nombre: string;
  description: string;
  precio: number;
  stock: number;
}

export default UserInterface;
