// userRoutes.ts
//---------------------------------/---------------------------------Imports
import {Router} from 'express'
import UserModel from '../models/userModel'

//---------------------------------/---------------------------------instancio router
const router = Router();


//---------------------------------/---------------------------------Rutas

//---------------------------------Ruta get
router.get('/', async(req, res)=> {
  //Lista todos los usuarios
  const respuesta = await UserModel.find();
  res.json({respuesta})

})

//---------------------------------Ruta post
router.post('/', async(req, res)=> {
  //Agrega un usuario
  //guardo la info recibida por body
  const {username, email, password} = req.body

  //instancio un modelo UserModel con los datos recibidos
  const newUser = new UserModel({
    username: username,
    email: email,
    password: password
  })

  //guardo en BBDD
  const userSaved = await newUser.save()
  res.json({"mensaje":`Producto Agregado con exito con id: ${userSaved._id}`})
})

//---------------------------------Ruta put
router.put('/:id',async(req, res)=> {
  //Actualiza un usuario
  //guardo el id recibido por params y la info recibida por body
  const {nombre, precio, descripcion} = req.body
  const {id} = req.params

  //Actualizo el usuario con el id recibido
  await UserModel.update({_id:id},{
    name: nombre,
    price: precio,
    description: descripcion

  });
  res.json({"mensaje":`Producto con id: ${id} Modificado con exito `})
})

//---------------------------------Ruta delete
router.delete('/:id',async(req, res)=> {
  //Elimina un usuario

  //guardo el id recibido por params
  const {id} = req.params

  //Elimino el usuario con el id recibido
  await UserModel.deleteOne({_id:id})
  res.json({"mensaje":`Producto con id: ${id} Eliminado con exito `})
})

export default router;