// userModel.ts
//---------------------------------/---------------------------------Imports
const { Schema, model } = require("mongoose");

//---------------------------------/---------------------------------Creamos el Schema
const UserSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  nombre: {
    type: String,
    require: true,
  },
  apellido: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  telefono: {
    type: String,
  },
  edad: {
    type: Number,
  },
  direccion: {
    type: String,
  },
  password: {
    type: String,
    require: true,
  },
});

//---------------------------------/---------------------------------Creamos y exportamos el Model

export default model(process.env.COLECCION, UserSchema);
