# Desafio 3 - api-productos(get - post - delete) - conectado a mongoDb con Mongoose

## Elias Rodriguez

#### En este desafio implementamos una conexion a mongoDB con mongoose y establecimos tres endpoints get(trate todos los usuarios), post(agrega un usaurio) y delete(elimina un usuario indicando su username)

### Iniciar el servidor

Para iniciar el server y probar la api seguimos los siguientes pasos en la terminal

- npm i
- npm run dev-server

El puerto por defecto es 3000

### Descripcion de la api

###### La api cuenta con con 3 endpoints, get, post y delete

- get -> obtener todos los usuarios
- post -> agregar un usuario(datos por body)
- delete -> eliminar usuario por username(datos por params)

### URL

- get -> url:port/usuarios -> ej. localhost:3000/usuarios
- post -> url:port/usuarios -> ej. localhost:3000/usuarios (formato del body acontinuacion)
- delete -> url:port/usuarios -> ej. localhost:3000/usuarios/:username (username va en la url como parametro)

### Formato body

###### El body tiene 3 atributos(nombre, precio, stock)

###### Para agregar un producto(post) todos los parametros son oblicatorios

```
{
 username: "",
 email: "",
 password: ""
}
```
