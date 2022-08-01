// mongoConn.ts
//---------------------------------/---------------------------------Imports

const mongoose: any = require("mongoose");

//---------------------------------/---------------------------------Creamos conexion con la BBDD
mongoose.connect(process.env.URL_DB, { useNewUrlParser: true }, (err: any) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Conectado a la base de datos");
  }
});

//---------------------------------/---------------------------------Exportamos la conexion
export default mongoose.connection;
