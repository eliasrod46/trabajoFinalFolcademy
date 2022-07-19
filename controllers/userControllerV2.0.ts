// userController.ts
//---------------------------------/---------------------------------Imports
import UserModel from "../models/userModel";

//---------------------------------Funciones GET

//Obtener Todos Los usuarios
export const getAllUsers = async (req: any, res: any) => {
  //metodo find() sin filtro trae todos los doc de la coleccion
  res.json({ Respuesta: await UserModel.find() });
};

// //Obtener usuario por id
export const getUserById = async (req: any, res: any) => {
  //metodo find() con filtro trae el us con el id indicado de la coleccion
  const { dato } = req.params;
  res.json({ Respuesta: await UserModel.find({ _id: dato }) });
};

// //Obtener usuario por username
export const getUserByUsername = async (req: any, res: any) => {
  //metodo find() con filtro trae el us con el username indicado de la coleccion
  const { dato } = req.params;
  res.json({ Respuesta: await UserModel.find({ username: dato }) });
};

// //Obtener usuario por mail
export const getUserByEmail = async (req: any, res: any) => {
  //metodo find() con filtro trae el us con el email indicado de la coleccion
  const { dato } = req.params;
  res.json({ Respuesta: await UserModel.find({ email: dato }) });
};

//---------------------------------/--------------------------------- Funciones POST

//Aregar usuario
export const addUser = async (req: any, res: any) => {
  //instancio un modelo UserModel con los datos recibidos y lo guardo
  const newUser = new UserModel(req.body);
  await newUser.save();
  res.json({ mensaje: `Usuario Agregado con exito con id: ${newUser._id}` });
};

//---------------------------------/--------------------------------- Funciones DELETE

//Eliminar usuario por id
export const delUserById = async (req: any, res: any) => {
  const { dato } = req.params;
  const respuesta = await UserModel.deleteOne({ _id: dato });
  //consulto el contador de elementos eliminados que devuelve la funcion deleteOne
  const resp =
    respuesta.deletedCount == 1
      ? "Se elimino el usuario con exito"
      : "No se encontro el usuario con el id ingresado";
  res.json({ respuesta: resp });
};

//Eliminar usuario por username
export const delUserByUsername = async (req: any, res: any) => {
  const { dato } = req.params;
  const respuesta = await UserModel.deleteOne({ username: dato });
  //consulto el contador de elementos eliminados que devuelve la funcion deleteOne
  const resp =
    respuesta.deletedCount == 1
      ? "Se elimino el usuario con exito"
      : "No se encontro el usuario con el username ingresado";
  res.json({ respuesta: resp });
};

//Eliminar usuario por email
export const delUserByEmail = async (req: any, res: any) => {
  const { dato } = req.params;
  const respuesta = await UserModel.deleteOne({ email: dato });
  //consulto el contador de elementos eliminados que devuelve la funcion deleteOne
  const resp =
    respuesta.deletedCount == 1
      ? "Se elimino el usuario con exito"
      : "No se encontro el usuario con el email ingresado";
  res.json({ respuesta: resp });
};

//---------------------------------/--------------------------------- Funciones PATCH(Actualizar/Reemplazar recurso)

//Editar usuario por id
export const editUserById = async (req: any, res: any) => {
  //Actualizo el usuario con el id recibido
  const { dato } = req.params;
  const respuesta = await UserModel.updateOne({ _id: dato }, req.body);
  const resp = `Se encontraron ${respuesta.matchedCount} usuarios y se modificaron ${respuesta.modifiedCount}`;
  res.json({ respuesta: resp });
};

//Editar usuario por username
export const editUserByUsername = async (req: any, res: any) => {
  //Actualizo el usuario con el username recibido
  const { dato } = req.params;
  const respuesta = await UserModel.updateOne({ username: dato }, req.body);
  const resp = `Se encontraron ${respuesta.matchedCount} usuarios y se modificaron ${respuesta.modifiedCount}`;
  res.json({ respuesta: resp });
};

//Editar usuario por email
export const editUserByEmail = async (req: any, res: any) => {
  //Actualizo el usuario con el email recibido
  const { dato } = req.params;
  const respuesta = await UserModel.updateOne({ email: dato }, req.body);
  const resp = `Se encontraron ${respuesta.matchedCount} usuarios y se modificaron ${respuesta.modifiedCount}`;
  res.json({ respuesta: resp });
};

//---------------------------------/--------------------------------- Funciones PUT(Actualizar/Reemplazar recurso)
