// server.ts
//----------------------------------------------------------Imports
import express from 'express'
import rutasProductos from './rutas/productosRutas'

//Instanciamos el server dde express 
const app = express()


//middlewears
app.use(express.json());


//----------------------------------------------------------Rutas

//----------rutas
app.use('/productos', rutasProductos)

//----------Ruta raiz
app.get('/', (req, res) => {
    res.send('Hola sera que anda?!')
})


//----------------------------------------------------------Levanto el Server

const port = 3000
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`)
})