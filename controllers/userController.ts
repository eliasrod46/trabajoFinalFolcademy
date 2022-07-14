// userController.ts
//---------------------------------/---------------------------------Imports
import UserModel from '../models/userModel'


//---------------------------------Obtener usuarios
//Obtener Todos Los usuarios
export const getAllUsers = async() => {
  return await UserModel.find();
}
//Obtener usuario por id
export const getUserById = async(id:string) => {
  return await UserModel.find({_id:id});
}
//Obtener usuario por mail
export const getUserByEmail = async(email:string) => {
  return await UserModel.find({email:email});
}
//Obtener usuario por username
export const getUserByUsername = async(username:string) => {
  return await UserModel.find({username:username});
}

//---------------------------------Agregar usuarios
//Obtener Todos Los usuarios
export const addUser = async(username:string, email:string, password:string) => {

    //instancio un modelo UserModel con los datos recibidos
    const newUser = new UserModel({
      username: username,
      email: email,
      password: password
    })
  return await newUser.save();
}

//---------------------------------Edicion de usuarios
//Editar usuario por id
export const editUserById = async(id:string, username:string, email:string, password:string) => {
  //Actualizo el usuario con el id recibido
  const respuesta = await UserModel.updateOne({_id:id},{
    username: username,
    email: email,
    password: password
  });
  return `Se encontraron ${respuesta.matchedCount} usuarios y se modificaron ${respuesta.modifiedCount}`

}
//Editar usuario por username
export const editUserByUsername = async(usNameToEdit:string, username:string, email:string, password:string) => {
    //Actualizo el usuario con el username recibido
    const respuesta = await UserModel.updateOne({username:usNameToEdit},{
      username: username,
      email: email,
      password: password
    });
    return `Se encontraron ${respuesta.matchedCount} usuarios y se modificaron ${respuesta.modifiedCount}`
}
//Editar usuario por email
export const editUserByEmail = async(emailToEdit:string, username:string, email:string, password:string) => {
  //Actualizo el usuario con el username recibido
  const respuesta = await UserModel.updateOne({email:emailToEdit},{
    username: username,
    email: email,
    password: password
  });
  return `Se encontraron ${respuesta.matchedCount} usuarios y se modificaron ${respuesta.modifiedCount}`
}

//---------------------------------Eliminar usuarios
//Eliminar usuario por id
export const delUserById = async(id:string) => {
  const respuesta = await UserModel.deleteOne({ _id: id });
  return respuesta.deletedCount == 1 ? "Se elimino el usuario con exito" : "No se encontro el usuario con el id ingresado"
}
//Eliminar usuario por username
export const delUserByUsername = async(usernameToDel:string) => {
  const respuesta = await UserModel.deleteOne({ username: usernameToDel });
  return respuesta.deletedCount == 1 ? "Se elimino el usuario con exito" : "No se encontro el usuario con el username ingresado"
}

//Eliminar usuario por email
export const delUserByEmail = async(emailToDel:string) => {
  const respuesta = await UserModel.deleteOne({ email: emailToDel });
  return respuesta.deletedCount == 1 ? "Se elimino el usuario con exito" : "No se encontro el usuario con el email ingresado"
}


