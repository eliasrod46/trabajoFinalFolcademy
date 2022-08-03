# Proyecto Final Folcademy - Backend con NodeJS, Express y mongoDB

## Info api

### Iniciar el servidor

Para iniciar el server y probar la api seguimos los siguientes pasos en la terminal

1. npm i
1. npm run dev-server

El puerto por defecto es 3000


### API repo y web

#### Repo de la api https://bitbucket.org/eliasrod46/eliasfolcademy/src/main/
#### Web de la api https://app-folcademy.herokuapp.com/


### Descripcion de la api

#### auth (registro y logeo de usuario con validaciones y token de autentificacion de usuario)

##### auth cuenta con con 2 endponts post

- post/login -> logueo de usuario(datos por body)
    retorna token en header con la clave auth-token
```
{
  "email": "",
  "password": ""
}
```

- post/signup -> Registro de usaurios(datos por body)
    retorna info del usuario creado
```
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
```

##### Auth URL
-> URL ej.: https://app-folcademy.herokuapp.com//api/auth

- login -> URL/api/auth/signup
- signup -> URL/api/auth/login 


#### Usuarios (Manejo de usuarios)

##### usuairos cuenta con con 5 endponts post

- get/get -> retorna todos lo usuarios de la bbdd
- get/:id -> retorna el usuario con la id indicada
- delete/:id -> elimina el usuario con la id indicada(requiere token de usaurio logeado)

- post/post -> agrega un usuario(requiere token de usaurio logeado)
```
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
```

- put/:id -> edita el usaurio con la id indicada(requiere token de usaurio logeado)
```
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
```




##### usuarios URL
-> URL ej.: https://app-folcademy.herokuapp.com/api/usuarios

- getAll    -> URL/api/usuarios/
- getById   -> URL/api/usuarios/:id
- post      -> URL/api/usuarios/
- put       -> URL/api/usuarios/:id
- delete    -> URL/api/usuarios/:id