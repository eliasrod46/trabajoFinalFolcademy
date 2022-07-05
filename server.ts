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

app.post('/productos', (req, res)=> {
  //Agrega un producto
  //guardo lo recibido por body
  const newProd = req.body
  let respuesta = productos.addProduct(newProd)
  res.json({"respuesta" : respuesta}) 
   
})

app.put('/productos',(req, res)=> {
  //Actualiza un producto
  //edito el producto recibido
  const newProd = req.body
  let respuesta = productos.editProduct(newProd)
  res.json({"respuesta" : respuesta})  
})

app.delete('/productos/:name',(req, res)=> {
  //Elimina un producto
  //guardo lo recibido por params
  const {name} = req.params
  let respuesta = productos.delProduct(name)
  res.json({"respuesta" : respuesta}) 
})


//--------------------------------Levanto el Server

const port = 3000
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`)
})