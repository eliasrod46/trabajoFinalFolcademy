// welcome.ts

export default `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        background-color: grey;
        margin: 0;
        padding: 0;
      }
      h1 {
        text-align: center;
        color: aqua;
        font-family: "Courier New", Courier, monospace;
      }
      h2 {
        text-align: center;
        margin-top: 25px;
        color: aqua;
        font-family: "Courier New", Courier, monospace;
      }
      h3 {
        text-align: center;

        margin-top: 25px;
        color: rgb(54, 7, 185);
        font-family: "Courier New", Courier, monospace;
      }
      h4 p {
        text-align: center;
      }
    </style>
  </head>
  <body>
    <h1>Desafio 4 - crud-productos - conectado a mongoDb con Mongoose</h1>
    <h2>Info API</h2>
    <h3>Iniciar el servidor</h3>
    Para iniciar el server y probar la api seguimos los siguientes pasos en la
    terminal
    <ul>
      <li>npm i</li>
      <li>npm run dev-server</li>
    </ul>

    El puerto por defecto es 3000
    <h3>Descripcion de la api</h3>
    <h4>La api cuenta con con 5 endpints, get, post, put, patch y detele</h4>
    <ul>
      <li>
        get -> obtener todos los usuarios, o traer un usuario por id, username o
        email
      </li>
      <li>post -> agregar un usuario(datos por body)</li>
      <li>put -> editar un usuario(indicando id por URL)(datos por body)</li>
      <li>
        patch -> reemplazar un usuario(indicando id por URL)(datos por body)
      </li>
      <li>delete -> eliminar un usuario(indicando id por URL)</li>
    </ul>

    <h3>direcciones URL</h3>
    <ul>
      <li>Get:</li>
      <li>get -> url:port/api/V2.0/usuarios -> ej. localhost:3000/usuarios</li>
      <li>
        get -> url:port/api/V2.0/usuarios/id/:dato -> ej.
        localhost:3000/usuarios/id/k546kjjk4563j4kh5jk34
      </li>
      <li>
        get -> url:port/api/V2.0/usuarios/username/:dato -> ej.
        localhost:3000/usuarios/username/usuario1
      </li>
      <li>
        get -> url:port/api/V2.0/usuarios/email/:dato -> ej.
        localhost:3000/usuarios/email/usuario1@usuario1.com
      </li>
    </ul>
    <br />
    <ul>
      <li>Post:</li>
      <li>
        post -> url:port/api/V2.0/usuarios -> ej.
        localhost:3000/api/V2.0/usuarios (formato del body acontinuacion)
      </li>
    </ul>
    <br />
    <ul>
      <li>Put:</li>
      <li>
        put -> url:port/api/V2.0/usuarios/id/:dato -> ej.
        localhost:3000/api/V2.0/usuarios/:k546kjjk4563j4kh5jk34(ponemos el id
        del usuario a reemplazar)(formato del body acontinuacion)
      </li>
      <li>
        put -> url:port/api/V2.0/usuarios/username/:dato -> ej.
        localhost:3000/api/V2.0/usuarios/username/usuario1(ponemos el username
        del usuario a reemplazar)(formato del body acontinuacion)
      </li>
      <li>
        put -> url:port/api/V2.0/usuarios/email/:dato -> ej.
        localhost:3000/api/V2.0/usuarios/email/usuario1@usuario1.com(ponemos el
        email del usuario a reemplazar)(formato del body acontinuacion)
      </li>
    </ul>
    <br />
    <ul>
      <li>Patch:</li>
      <li>
        Patch -> url:port/api/V2.0/usuarios/id/:dato -> ej.
        localhost:3000/api/V2.0/usuarios/:k546kjjk4563j4kh5jk34(ponemos el id
        del usuario a editar)(formato del body acontinuacion)
      </li>
      <li>
        Patch -> url:port/api/V2.0/usuarios/username/:dato -> ej.
        localhost:3000/api/V2.0/usuarios/username/usuario1(ponemos el username
        del usuario a editar)(formato del body acontinuacion)
      </li>
      <li>
        Patch -> url:port/api/V2.0/usuarios/email/:dato -> ej.
        localhost:3000/api/V2.0/usuarios/email/usuario1@usuario1.com(ponemos el
        email del usuario a editar)(formato del body acontinuacion)
      </li>
    </ul>
    <br />
    <br />
    <ul>
      <li>Delete:</li>
      <li>
        Delete -> url:port/api/V2.0/usuarios/id/:dato -> ej.
        localhost:3000/api/V2.0/usuarios/:k546kjjk4563j4kh5jk34(ponemos el id
        del usuario a eliminar)
      </li>
      <li>
        Delete -> url:port/api/V2.0/usuarios/username/:dato -> ej.
        localhost:3000/api/V2.0/usuarios/username/usuario1(ponemos el username
        del usuario a eliminar)
      </li>
      <li>
        Delete -> url:port/api/V2.0/usuarios/email/:dato -> ej.
        localhost:3000/api/V2.0/usuarios/email/usuario1@usuario1.com(ponemos el
        email del usuario a eliminar)
      </li>
    </ul>

    <h3>Formato body</h3>
    <p>El body tiene 8 atributos, de los cuales 5(username,nombre,apellido,email y password) son obligatorios y 2 son unicos(username y email)por que que no puede existir dos iguales en la bbdd</p>
    <br />
    {
      "username": "",
      "nombre": "",
      "apellido": "",
      "email": "",
      "telefono": "",
      "edad": ,
      "direccion": "",
      "password": ""
    }
    <h3>Aclaraciones</h3>
    <h4>
      Para agregar(post), reemplazar(put) editar(patch) se deben enviar los 5 atributos obligatorios (username,nombre,apellido,email y password) los otros pueden no enviarse
    </h4>
    <h4>
      Al editar modificamos un usuario y si no encontramos el usuario a modificar el sistema no hace anda nada y reemplazar zambia todo el bloque y si no encuentra al usaurio a reemplazar lo agrega
    </h4>
    
    <h4>
      Para get all(todos los archivos) se puede recibir un querry "orden" para
      definir si queremos que los elementos se meustren en forma ascendente
      ("ASC") o descendiente("DESC")
    </h4>
  </body>
</html>
`;
