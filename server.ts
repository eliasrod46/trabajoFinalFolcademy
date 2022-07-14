// server.ts
//---------------------------------/---------------------------------Imports
import express from 'express'
import userRoutes from './rutas/userRoutes'
require ('./mongoConn')

//---------------------------------Instanciamos el server de express 
const app = express()

//---------------------------------/---------------------------------middlewears
app.use(express.json());


//---------------------------------/---------------------------------Rutas
//---------------------------------use rutas
app.use('/api/usuarios', userRoutes)

//---------------------------------Ruta raiz
app.get('/', (req, res) => {
    res.send('Hola Mundo!')
})


//-----------------------------------------------------------Levanto el Server
const port = 3001
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`)
})