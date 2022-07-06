//-----------------------------------------------Imports
import {Router} from 'express'
import * as productos from '../bbdd/productos'

//isntancio router
var router = Router();


//-----------------------------------------------Rutas
//----------Ruta get
router.get('/', (req, res)=> {
  //Lista todos los productos

  //llamo a la funcion getProduct
  res.json({"respuesta" : productos.getStock()}) 
})

//----------Ruta post
router.post('/', (req, res)=> {
  //Agrega un producto
  //guardo la info recibida por body
  const {nombre, precio, stock} = req.body

  //llamo a la funcion addProduct
  let respuesta = productos.addProduct(nombre, precio, stock)
  res.json({"respuesta" : respuesta}) 
   
})

//----------Ruta put
router.put('/:id',(req, res)=> {
  //Actualiza un producto
  
  //guardo el id recibido por params y la info recibida por body
  const {nombre, precio, stock} = req.body
  const {id} = req.params

  //llamo a la funcion editProduct
  let respuesta = productos.editProduct(Number(id), nombre, precio, stock)
  res.json({"respuesta" : respuesta})  
})

//----------Ruta delete
router.delete('/:id',(req, res)=> {
  //Elimina un producto

  //guardo el id recibido por params
  const {id} = req.params

  //llamo a la funcion delProduct
  let respuesta = productos.delProduct(Number(id))
  res.json({"respuesta" : respuesta}) 
})

export default router;