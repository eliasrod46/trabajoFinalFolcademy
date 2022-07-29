// userController.ts
//---------------------------------/---------------------------------Imports
import User from "../models/User";
import UserInterfase from "../models/user.interface";

//---------------------------------/--------------------------------- Funciones

//Obtener Todos Los usuarios
export const getAll = async (req: any, res: any) => {
  //metodo find() sin filtro trae todos los doc de la coleccion
  try {
    const order: string = req.query.order;
    const atributo: string = req.query.atributo;

    let sort: any = {};
    sort[atributo] = order;

    res.json({
      Respuesta: await User.find().sort(sort),
    });
  } catch (error) {
    res.status(404).send(`Error al traer todos los usuarios: ${error}`);
  }
};

//Obtener usuario por id
export const getById = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    res.json({
      Respuesta: await User.findById(id, "username email"),
    });
  } catch (error) {
    res.status(404).send(`Error al traer el usuario por id : ${error}`);
  }
};

//Obtener Todos Los usuarios
export const add = async (req: any, res: any) => {
  //metodo find() sin filtro trae todos los doc de la coleccion
  try {
    const newUser = new User(req.body);
    newUser.save();
    res.send("ando");
  } catch (error) {
    res.status(404).send(`Error al traer todos los usuarios: ${error}`);
  }
};

//Editar usuario por id
export const editById = async (req: any, res: any) => {
  try {
    //Actualizo el usuario con el id recibido
    const { id } = req.params;
    await User.findByIdAndUpdate(id, req.body);

    res.json({ respuesta: "Se Modifico el usuario indicado" });
  } catch (error) {
    res.status(404).send(`Error al editar el usuario por id: ${error}`);
  }
};

//Eliminar usuario por id
export const delById = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const respuesta = await User.findByIdAndDelete(id);
    if (!respuesta) return res.json({ message: "Fail to delete user" });
    res.json({ message: "User deleted successfull" });
  } catch (error) {
    res.status(404).send(`Error al eliminar usuario por id: ${error}`);
  }
};
