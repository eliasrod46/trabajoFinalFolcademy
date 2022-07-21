// userController.ts
//---------------------------------/---------------------------------Imports
import UserModel from "../models/userModel";

//---------------------------------/--------------------------------- Funciones GET

//Obtener Todos Los usuarios
export const getAllUsers = async (req: any, res: any) => {
  //metodo find() sin filtro trae todos los doc de la coleccion
  try {
    const order: string = req.query.order;
    const atributo: string = req.query.atributo;

    let sort: any = {};
    sort[atributo] = order;

    res.json({
      Respuesta: await UserModel.find({}, "username email id").sort(sort),
    });
  } catch (error) {
    res.status(404).send(`Error al traer todos los usuarios: ${error}`);
  }
};

//Obtener usuario por id
export const getUserById = async (req: any, res: any) => {
  //metodo find() con filtro trae el us con el id indicado de la coleccion
  try {
    const { dato } = req.params;
    res.json({
      Respuesta: await UserModel.find({ _id: dato }, "username email"),
    });
  } catch (error) {
    res.status(404).send(`Error al traer el usuario por id : ${error}`);
  }
};

//Obtener usuario por username
export const getUserByUsername = async (req: any, res: any) => {
  //metodo find() con filtro trae el us con el username indicado de la coleccion
  try {
    const { dato } = req.params;
    res.json({
      Respuesta: await UserModel.find({ username: dato }, "username email"),
    });
  } catch (error) {
    res.status(404).send(`Error al traer el usuario por username : ${error}`);
  }
};

//Obtener usuario por mail
export const getUserByEmail = async (req: any, res: any) => {
  //metodo find() con filtro trae el us con el email indicado de la coleccion
  try {
    const { dato } = req.params;
    res.json({
      Respuesta: await UserModel.find({ email: dato }, "username email"),
    });
  } catch (error) {
    res.status(404).send(`Error al traer el usuario por email : ${error}`);
  }
};

//---------------------------------/--------------------------------- Funciones POST
//Aregar usuario
export const addUser = async (req: any, res: any) => {
  //instancio un modelo UserModel con los datos recibidos y lo guardo
  try {
    const newUser = new UserModel(req.body);
    await newUser.save();
    res.json({ mensaje: `Usuario Agregado con exito con id: ${newUser._id}` });
  } catch (error) {
    res.status(404).send(`Error al cargar nuevo usuario: ${error}`);
  }
};

//---------------------------------/--------------------------------- Funciones DELETE

//Eliminar usuario por id
export const delUserById = async (req: any, res: any) => {
  try {
    const { dato } = req.params;
    const respuesta = await UserModel.deleteOne({ _id: dato });
    //consulto el contador de elementos eliminados que devuelve la funcion deleteOne
    const resp =
      respuesta.deletedCount == 1
        ? "Se elimino el usuario con exito"
        : "No se encontro el usuario con el id ingresado";
    res.json({ respuesta: resp });
  } catch (error) {
    res.status(404).send(`Error al eliminar usuario por id: ${error}`);
  }
};

//Eliminar usuario por username
export const delUserByUsername = async (req: any, res: any) => {
  try {
    const { dato } = req.params;
    const respuesta = await UserModel.deleteOne({ username: dato });
    //consulto el contador de elementos eliminados que devuelve la funcion deleteOne
    const resp =
      respuesta.deletedCount == 1
        ? "Se elimino el usuario con exito"
        : "No se encontro el usuario con el username ingresado";
    res.json({ respuesta: resp });
  } catch (error) {
    res.status(404).send(`Error al eliminar usuario por username: ${error}`);
  }
};

//Eliminar usuario por email
export const delUserByEmail = async (req: any, res: any) => {
  try {
    const { dato } = req.params;
    const respuesta = await UserModel.deleteOne({ email: dato });
    //consulto el contador de elementos eliminados que devuelve la funcion deleteOne
    const resp =
      respuesta.deletedCount == 1
        ? "Se elimino el usuario con exito"
        : "No se encontro el usuario con el email ingresado";
    res.json({ respuesta: resp });
  } catch (error) {
    res.status(404).send(`Error al eliminar usuario por email: ${error}`);
  }
};

//---------------------------------/--------------------------------- Funciones PATCH(Actualizar/Modifica recurso)

//Editar usuario por id
export const editUserById = async (req: any, res: any) => {
  try {
    //Actualizo el usuario con el id recibido
    const { dato } = req.params;
    const respuesta = await UserModel.updateOne({ _id: dato }, req.body);
    //Respuesta
    const resp = `Se encontraron ${respuesta.matchedCount} usuarios y se modificaron ${respuesta.modifiedCount}`;
    res.json({ respuesta: resp });
  } catch (error) {
    res.status(404).send(`Error al editar el usuario por id: ${error}`);
  }
};

//Editar usuario por username
export const editUserByUsername = async (req: any, res: any) => {
  try {
    //Actualizo el usuario con el username recibido
    const { dato } = req.params;
    const respuesta = await UserModel.updateOne({ username: dato }, req.body);
    //Respuesta
    const resp = `Se encontraron ${respuesta.matchedCount} usuarios y se modificaron ${respuesta.modifiedCount}`;
    res.json({ respuesta: resp });
  } catch (error) {
    res.status(404).send(`Error al editar el usuario por username: ${error}`);
  }
};

//Editar usuario por email
export const editUserByEmail = async (req: any, res: any) => {
  try {
    //Actualizo el usuario con el email recibido
    const { dato } = req.params;
    const respuesta = await UserModel.updateOne({ email: dato }, req.body);
    //Respuesta
    const resp = `Se encontraron ${respuesta.matchedCount} usuarios y se modificaron ${respuesta.modifiedCount}`;
    res.json({ respuesta: resp });
  } catch (error) {
    res.status(404).send(`Error al editar el usuario por email: ${error}`);
  }
};

//---------------------------------/--------------------------------- Funciones PUT(Actualizar/Reemplazar recurso)

//Reemplaar usuario por id
export const replaceUserById = async (req: any, res: any) => {
  try {
    //Reemplazo o agrego el usuario con el id recibido
    const { dato } = req.params;
    //Busco el producto con el id indicado
    const producto = await UserModel.find({ _id: dato });

    //verifico si el array contiene info(todos lo campos son unique siempre va a trer 1 o 0)
    //si tiene, Reemplazo la info con la recibida por body
    //si no tiene, agrego la info con la recibida por body
    if (producto.length > 0) {
      const respuesta = await UserModel.findOneAndReplace(
        { _id: dato },
        req.body
      );
      return `El producto con id: ${respuesta._id} ha sido reemplazado`;
    } else {
      //instancio un modelo UserModel con los datos recibidos y lo guardo
      const newUser = new UserModel(req.body);
      await newUser.save();
      return `No se contro el producto con id: ${dato}, se ha agregado a la lista con id: ${newUser._id}`;
    }
  } catch (error) {
    res.status(404).send(`Error al reemplazar el usuario por id: ${error}`);
  }
};

//Reemplaar usuario por username
export const replaceUserByUsername = async (req: any, res: any) => {
  try {
    //Reemplazo o agrego el usuario con el username recibido
    const { dato } = req.params;
    //Busco el producto con el username indicado
    const producto = await UserModel.find({ username: dato });

    //verifico si el array contiene info(todos lo campos son unique siempre va a trer 1 o 0)
    //si tiene, Reemplazo la info con la recibida por body
    //si no tiene, agrego la info con la recibida por body
    if (producto.length > 0) {
      const respuesta = await UserModel.findOneAndReplace(
        { username: dato },
        req.body
      );
      return `El producto con id: ${respuesta._id} ha sido reemplazado`;
    } else {
      //instancio un modelo UserModel con los datos recibidos y lo guardo
      const newUser = new UserModel(req.body);
      await newUser.save();
      return `No se contro el producto con username: ${dato}, se ha agregado a la lista con el username: ${newUser.username}`;
    }
  } catch (error) {
    res
      .status(404)
      .send(`Error al reemplazar el usuario por username: ${error}`);
  }
};

//Reemplaar usuario por email
export const replaceUserByEmail = async (req: any, res: any) => {
  try {
    //Reemplazo o agrego el usuario con el email recibido
    const { dato } = req.params;
    //Busco el producto con el email indicado
    const producto = await UserModel.find({ email: dato });

    //verifico si el array contiene info(todos lo campos son unique siempre va a trer 1 o 0)
    //si tiene, Reemplazo la info con la recibida por body
    //si no tiene, agrego la info con la recibida por body
    if (producto.length > 0) {
      const respuesta = await UserModel.findOneAndReplace(
        { email: dato },
        req.body
      );
      return `El producto con id: ${respuesta._id} ha sido reemplazado`;
    } else {
      //instancio un modelo UserModel con los datos recibidos y lo guardo
      const newUser = new UserModel(req.body);
      await newUser.save();
      return `No se contro el producto con email: ${dato}, se ha agregado a la lista con el email: ${newUser.email}`;
    }
  } catch (error) {
    res.status(404).send(`Error al reemplazar el usuario por email: ${error}`);
  }
};
