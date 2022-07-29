// userModel.ts
//---------------------------------/---------------------------------Imports
const { Schema, model } = require("mongoose");
import UserInterface from "./user.interface";

const bcrypt = require("bcrypt");
//---------------------------------/---------------------------------Creamos el Schema
const UserSchema = new Schema(
  {
    username: {
      type: String,
      require: [true, "El username es obligatorio"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    nombre: {
      type: String,
      require: [true, "El nombre es obligatorio"],
      trim: true,
    },
    apellido: {
      type: String,
      require: [true, "El apellido es obligatorio"],
      trim: true,
    },
    email: {
      type: String,
      require: [true, "El email es obligatorio"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    telefono: {
      type: String,
      trim: true,
    },
    edad: {
      type: Number,
      trim: true,
    },
    direccion: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      require: [true, "El password es obligatorio"],
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

//Metodos del Schemaa

UserSchema.statics.encryptPassword = async (password: string): Promise<any> => {
  try {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  } catch (error) {
    console.log(`Algo salio mal al cifrar la contraseña ${error}`);
  }
};

UserSchema.statics.validatePassword = async (
  recivedPassword: string,
  userPassword: string
) => {
  return await bcrypt.compare(recivedPassword, userPassword);
};

//---------------------------------/---------------------------------Creamos y exportamos el Model

export default model(process.env.COLECCION, UserSchema);
