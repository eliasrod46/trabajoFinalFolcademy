// userController.ts
//---------------------------------/---------------------------------Imports
import userModel from "../models/userModel";
import UserModel from "../models/userModel";

//--------------------------------- Funciones GET

//Obtener Todos Los usuarios
export const getAllUsers = async () => {
  //metodo find() sin filtro trae todos los doc de la coleccion
  return await UserModel.find();
};

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

//---------------------------------/--------------------------------- Funciones POST

//Aregar usuario
export const addUser = async (datos: object) => {
  //instancio un modelo UserModel con los datos recibidos y lo guardo
  const newUser = new UserModel(datos);
  return await newUser.save();
};

//---------------------------------/--------------------------------- Funciones DELETE

//Eliminar usuario por id
export const delUserById = async (id: string) => {
  //Elimino el usuario con el id recibido
  const respuesta = await UserModel.deleteOne({ _id: id });
  //consulto el contador de elementos eliminados que devuelve la funcion deleteOne
  return respuesta.deletedCount == 1
    ? "Se elimino el usuario con exito"
    : "No se encontro el usuario con el id ingresado";
};

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

//---------------------------------/--------------------------------- Funciones PATCH(Actualizar/Modifica recurso)

//Editar usuario por id
export const editUserById = async (id: string, datos: object) => {
  //Actualizo el usuario con el id recibido
  const respuesta = await UserModel.updateOne({ _id: id }, datos);
  return `Se encontraron ${respuesta.matchedCount} usuarios y se modificaron ${respuesta.modifiedCount}`;
};

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

//---------------------------------/--------------------------------- Funciones PUT(Actualizar/Reemplazar recurso)

//Editar usuario por id
export const replaceUserById = async (id: string, datos: object) => {
  //Reemplazo o agrego el usuario con el id recibido
  //Busco el producto con el id indicado
  const producto = await userModel.find({ _id: id });

  //verifico si el array contiene info(todos lo campos son unique siempre va a trer 1 o 0)
  //si tiene, Reemplazo la info con la recibida por body
  //si no tiene, agrego la info con la recibida por body
  if (producto.length > 0) {
    const respuesta = await UserModel.findOneAndReplace({ _id: id }, datos);
    return `El producto con id: ${respuesta._id} ha sido reemplazado`;
  } else {
    //instancio un modelo UserModel con los datos recibidos y lo guardo
    const newUser = new UserModel(datos);
    await newUser.save();
    return `No se contro el producto con id: ${id}, se ha agregado a la lista con id: ${newUser._id}`;
  }
};

//Editar usuario por username
export const replaceUserByUsername = async (
  usNameToEdit: string,
  datos: object
) => {
  //Reemplazo o agrego el usuario con el username recibido
  //Busco el producto con el username indicado
  const producto = await userModel.find({ username: usNameToEdit });

  //verifico si el array contiene info(todos lo campos son unique siempre va a trer 1 o 0)
  //si tiene, Reemplazo la info con la recibida por body
  //si no tiene, agrego la info con la recibida por body
  if (producto.length > 0) {
    const respuesta = await UserModel.findOneAndReplace(
      { username: usNameToEdit },
      datos
    );
    return `El producto con username: ${respuesta.username} ha sido reemplazado`;
  } else {
    //instancio un modelo UserModel con los datos recibidos y lo guardo
    const newUser = new UserModel(datos);
    await newUser.save();
    return `No se encontro el producto con username: ${usNameToEdit}, se ha agregado a la lista el producto: ${newUser.username}`;
  }
};

//Editar usuario por email
export const replaceUserByEmail = async (
  emailToEdit: string,
  datos: object
) => {
  //Reemplazo o agrego el usuario con el email recibido
  //Busco el producto con el email indicado
  const producto = await userModel.find({ email: emailToEdit });

  //verifico si el array contiene info(todos lo campos son unique siempre va a trer 1 o 0)
  //si tiene, Reemplazo la info con la recibida por body
  //si no tiene, agrego la info con la recibida por body
  if (producto.length > 0) {
    const respuesta = await UserModel.findOneAndReplace(
      { email: emailToEdit },
      datos
    );
    return `El producto con email: ${respuesta.email} ha sido reemplazado`;
  } else {
    //instancio un modelo UserModel con los datos recibidos y lo guardo
    const newUser = new UserModel(datos);
    await newUser.save();
    return `No se encontro el producto con email: ${emailToEdit}, se ha agregado a la lista el producto: ${newUser.email}`;
  }
};
