// Product.ts
//---------------------------------/---------------------------------Imports
const { Schema, model } = require("mongoose");

//---------------------------------/---------------------------------Creamos el Schema
const UserSchema = new Schema(
  {
    nombre: {
      type: String,
      require: [true, "El nombre del produtco es obligatorio"],
      trim: true,
    },
    description: {
      type: String,
      require: [true, "La descripcion del produtco es obligatoria"],
      trim: true,
    },
    precio: {
      type: Number,
      require: [true, "El precio del produtco es obligatorio"],
    },
    stock: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

//---------------------------------/---------------------------------Creamos y exportamos el Model

export default model(process.env.COLECCION, UserSchema);
