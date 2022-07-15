// userController.ts
//---------------------------------/---------------------------------Imports
import UserModel from "../models/userModel";

//---------------------------------/---------------------------------Funciones principales
//Obtener Todos Los usuarios
export const getAllUsers = async () => {
  //metodo find() sin filtro trae todos los doc de la coleccion
  return await UserModel.find();
};

//Aregar usuario
export const addUser = async (datos: object) => {
  //instancio un modelo UserModel con los datos recibidos y lo guardo
  const newUser = new UserModel(datos);
  return await newUser.save();
};

//Editar usuario por id
export const editUserById = async (id: string, datos: object) => {
  //Actualizo el usuario con el id recibido
  const respuesta = await UserModel.updateOne({ _id: id }, datos);
  return `Se encontraron ${respuesta.matchedCount} usuarios y se modificaron ${respuesta.modifiedCount}`;
};

//Eliminar usuario por id
export const delUserById = async (id: string) => {
  const respuesta = await UserModel.deleteOne({ _id: id });
  //consulto el contador de elementos eliminados que devuelve la funcion deleteOne
  return respuesta.deletedCount == 1
    ? "Se elimino el usuario con exito"
    : "No se encontro el usuario con el id ingresado";
};

//---------------------------------/---------------------------------Funciones extras

//---------------------------------Obtener usuarios
//Obtener usuario por id
export const getUserById = async (id: string) => {
  //metodo find() con filtro trae el us con el id indicado de la coleccion
  return await UserModel.find({ _id: id });
};
//Obtener usuario por mail
export const getUserByEmail = async (email: string) => {
  //metodo find() con filtro trae el us con el email indicado de la coleccion
  return await UserModel.find({ email: email });
};
//Obtener usuario por username
export const getUserByUsername = async (username: string) => {
  //metodo find() con filtro trae el us con el username indicado de la coleccion
  return await UserModel.find({ username: username });
};

//---------------------------------Edicion de usuarios
//Editar usuario por username
export const editUserByUsername = async (
  usNameToEdit: string,
  datos: object
) => {
  //Actualizo el usuario con el username recibido
  const respuesta = await UserModel.updateOne(
    { username: usNameToEdit },
    datos
  );
  return `Se encontraron ${respuesta.matchedCount} usuarios y se modificaron ${respuesta.modifiedCount}`;
};
//Editar usuario por email
export const editUserByEmail = async (emailToEdit: string, datos: object) => {
  //Actualizo el usuario con el email recibido
  const respuesta = await UserModel.updateOne({ email: emailToEdit }, datos);
  return `Se encontraron ${respuesta.matchedCount} usuarios y se modificaron ${respuesta.modifiedCount}`;
};

//---------------------------------Eliminar usuarios
//Eliminar usuario por username
export const delUserByUsername = async (usernameToDel: string) => {
  const respuesta = await UserModel.deleteOne({ username: usernameToDel });
  //consulto el contador de elementos eliminados que devuelve la funcion deleteOne
  return respuesta.deletedCount == 1
    ? "Se elimino el usuario con exito"
    : "No se encontro el usuario con el username ingresado";
};
//Eliminar usuario por email
export const delUserByEmail = async (emailToDel: string) => {
  const respuesta = await UserModel.deleteOne({ email: emailToDel });
  //consulto el contador de elementos eliminados que devuelve la funcion deleteOne
  return respuesta.deletedCount == 1
    ? "Se elimino el usuario con exito"
    : "No se encontro el usuario con el email ingresado";
};
