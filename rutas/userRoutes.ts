// userRoutes.ts
//---------------------------------/---------------------------------Imports
import {Router} from 'express'
import * as Usuario from '../controllers/userController'
//---------------------------------/---------------------------------instancio router
const router = Router();


//---------------------------------/---------------------------------Rutas

//---------------------------------/---------------------------------Rutas get
// Todos los usuarios
router.get('/', async(req, res)=> {
  //Lista todos los usuarios
  const respuesta = await Usuario.getAllUsers();
  res.json({respuesta})

})
// get Usuario por id
router.get('/id/:id', async(req, res)=> {
  //Trae el us con id indicado en params
  
  //guardo el id recibido por params
  const {id} = req.params
  const respuesta = await Usuario.getUserById(id);
  res.json({respuesta})
})
// get Usuario por username
router.get('/username/:username', async(req, res)=> {
  //Trae el us con id indicado en params
  
  //guardo el username recibido por params
  const {username} = req.params
  const respuesta = await Usuario.getUserByUsername(username);
  res.json({respuesta})
})
// get Usuario por mail
router.get('/email/:email', async(req, res)=> {
  //Trae el us con id indicado en params
  
  //guardo el email recibido por params
  const {email} = req.params
  const respuesta = await Usuario.getUserByEmail(email);
  res.json({respuesta})
})

//---------------------------------/---------------------------------Ruta post
router.post('/', async(req, res)=> {
  //Agrega un usuario
  //guardo la info recibida por body
  const {username, email, password} = req.body

  //guardo en BBDD()
  const userSaved = await Usuario.addUser(username, email, password)
  res.json({"mensaje":`Producto Agregado con exito con id: ${userSaved._id}`})
})

//---------------------------------/---------------------------------Rutas put
// edit Usuario por id
router.put('/id/:id',async(req, res)=> {
  //Actualiza un usuario por id
  //guardo el id recibido por params y la info recibida por body
  const {username, email, password} = req.body
  const {id} = req.params

  const respuesta = await Usuario.editUserById(id, username, email, password)


  res.json({"mensaje":`${respuesta}`})
})
// edit Usuario por username
router.put('/username/:usNameToEdit',async(req, res)=> {
  //Actualiza un usuario por username
  //guardo el usname recibido por params y la info recibida por body
  const {username, email, password} = req.body
  const {usNameToEdit} = req.params

  const respuesta = await Usuario.editUserByUsername(usNameToEdit, username, email, password)
  res.json({"mensaje":`${respuesta}`})

})
// edit Usuario por email
router.put('/email/:emailToEdit',async(req, res)=> {
  //Actualiza un usuario por username
  //guardo el usname recibido por params y la info recibida por body
  const {username, email, password} = req.body
  const {emailToEdit} = req.params

  const respuesta = await Usuario.editUserByEmail(emailToEdit, username, email, password)
  res.json({"mensaje":`${respuesta}`})
})

//---------------------------------/---------------------------------Rutas delete
// delete Usuario por id
router.delete('/id/:id',async(req, res)=> {
  //Elimina un usuario
  //guardo el id recibido por params
  const {id} = req.params

  //Elimino el usuario con el id recibido
  const respuesta = await Usuario.delUserById(id)
  res.json({"mensaje":`${respuesta}`})
})
// delete Usuario por username
router.delete('/username/:usernameToDel',async(req, res)=> {
  //Elimina un usuario
  //guardo el id recibido por params
  const usernameToDel:string = req.params.usernameToDel

  //Elimino el usuario con el id recibido
  const respuesta:string = await Usuario.delUserByUsername(usernameToDel)
  res.json({"mensaje":`${respuesta}`})
})
// delete Usuario por email
router.delete('/email/:emailToDel',async(req, res)=> {
  //Elimina un usuario
  //guardo el id recibido por params
  const emailToDel:string = req.params.emailToDel

  //Elimino el usuario con el id recibido
  const respuesta:string = await Usuario.delUserByEmail(emailToDel)
  res.json({"mensaje":`${respuesta}`})
})

export default router;