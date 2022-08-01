// user.controller.ts
//---------------------------------/---------------------------------Imports
import User from "../models/User";
import UserInterface from "../models/user.interface";

//---------------------------------/--------------------------------- Funciones

//Obtener Todos Los usuarios
export const getAll = async (req: any, res: any) => {
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

//Agregar un usuario
export const add = async (req: any, res: any) => {
  //metodo find() sin filtro trae todos los doc de la coleccion
  try {
    const {
      username,
      nombre,
      apellido,
      email,
      telefono,
      edad,
      direccion,
      password,
    } = req.body;

    let user: UserInterface = new User({
      username,
      nombre,
      apellido,
      email,
      telefono,
      edad,
      direccion,
      password: await User.encryptPassword(password),
    });
    await user.save();
    res.json({ message: "User Created Successful" });
  } catch (error) {
    res.status(400).json({ message: `Fail to create user: ${error}` });
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
    res.status(404).send(`Fail to get user: ${error}`);
  }
};

//Editar usuario por id
export const editById = async (req: any, res: any) => {
  try {
    //Actualizo el usuario con el id recibido
    const { id } = req.params;
    let {
      username,
      nombre,
      apellido,
      email,
      telefono,
      edad,
      direccion,
      password,
    } = req.body;
    password = await User.encryptPassword(password);

    await User.findByIdAndUpdate(id, {
      username,
      nombre,
      apellido,
      email,
      telefono,
      edad,
      direccion,
      password,
    });

    res.json({ respuesta: "User Updated Successful" });
  } catch (error) {
    res.status(404).json({ message: `Fail to update user: ${error}` });
  }
};

//Eliminar usuario por id
export const delById = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const respuesta = await User.findByIdAndDelete(id);
    if (!respuesta) return res.status(403).json({ message: "User not found" });
    res.json({ message: "User Deleted Successful" });
  } catch (error) {
    res.status(404).json({ message: "Fail to delete user" });
  }
};
