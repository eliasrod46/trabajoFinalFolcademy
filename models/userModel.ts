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
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

//---------------------------------/---------------------------------Creamos y exportamos el Model

export default model(process.env.COLECCION, UserSchema);
