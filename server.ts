// server.ts
//--------------------------------REQUIRES
import express from 'express'
import * as productos from './bbdd/productos'

//Instanciamos el server dde express 
const app = express()


//middlewears
app.use(express.json());


//--------------------------------Rutas

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/productos', (req, res)=> {
  //Lista todos los productos
  res.json({"respuesta" : productos.getStock()}) 
})

//
app.post('/productos', (req, res)=> {
  //Agrega un producto
  //guardo lo recibido por body
  const {nombre, precio, stock} = req.body
  let respuesta = productos.addProduct(nombre, precio, stock)
  res.json({"respuesta" : respuesta}) 
   
})

app.put('/productos/:id',(req, res)=> {
  //Actualiza un producto
  //edito el producto recibido
  
  const {nombre, precio, stock} = req.body
  const {id} = req.params
  let respuesta = productos.editProduct(Number(id), nombre, precio, stock)
  res.json({"respuesta" : respuesta})  
})

app.delete('/productos/:id',(req, res)=> {
  //Elimina un producto
  //guardo lo recibido por params
  const {id} = req.params
  let respuesta = productos.delProduct(Number(id))
  res.json({"respuesta" : respuesta}) 
})


//--------------------------------Levanto el Server

const port = 3000
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`)
})