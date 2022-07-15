// mongoConn.ts
//---------------------------------/---------------------------------Imports
const mongoose = require('mongoose');


//---------------------------------/---------------------------------Creamos conexion con la BBDD "testFolcademy"
mongoose.connect('mongodb://localhost:27017/testFolcademy', { useNewUrlParser: true }, (err: any) => {

    if (err) {
        console.log(err)
    } else {
        console.log('Conectado a la base de datos')
    }
});

//---------------------------------/---------------------------------Exportamos la conexion 
export default mongoose.connection