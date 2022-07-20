# Desafio 4 - crud-productos

## Info api

### Iniciar el servidor

Para iniciar el server y probar la api seguimos los siguientes pasos en la terminal

- npm i
- npm run dev-server

El puerto por defecto es 3000

### Descripcion de la api

###### La api cuenta con con 5 endpints, get, post, put, patch y detele

- get -> obtener todos los usuarios, o traer un usuario por id, username o email
- post -> agregar un usuario(datos por body)
- put -> editar un usuario(indicando id por URL)(datos por body)
- patch -> reemplazar un usuario(indicando id por URL)(datos por body)
- delete -> eliminar un usuario(indicando id por URL)

### URL

    1.Get:
    - get -> url:port/api/V2.0/usuarios -> ej. localhost:3000/usuarios
    - get -> url:port/api/V2.0/usuarios/id/:dato -> ej. localhost:3000/usuarios/id/k546kjjk4563j4kh5jk34
    - get -> url:port/api/V2.0/usuarios/username/:dato -> ej. localhost:3000/usuarios/username/usuario1
    - get -> url:port/api/V2.0/usuarios/email/:dato -> ej. localhost:3000/usuarios/email/usuario1@usuario1.com


    1.Post:
    - post -> url:port/api/V2.0/usuarios -> ej. localhost:3000/api/V2.0/usuarios (formato del body acontinuacion)


    1.Put:
    - put -> url:port/api/V2.0/usuarios/id/:dato -> ej. localhost:3000/api/V2.0/usuarios/:k546kjjk4563j4kh5jk34(ponemos el id del usuario a reemplazar)(formato del body acontinuacion)
    - put -> url:port/api/V2.0/usuarios/username/:dato -> ej. localhost:3000/api/V2.0/usuarios/username/usuario1(ponemos el username del usuario a reemplazar)(formato del body acontinuacion)
    - put -> url:port/api/V2.0/usuarios/email/:dato -> ej. localhost:3000/api/V2.0/usuarios/email/usuario1@usuario1.com(ponemos el email del usuario a reemplazar)(formato del body acontinuacion)


    1. Patch:
    - Patch -> url:port/api/V2.0/usuarios/id/:dato -> ej. localhost:3000/api/V2.0/usuarios/:k546kjjk4563j4kh5jk34(ponemos el id del usuario a editar)(formato del body acontinuacion)
    - Patch -> url:port/api/V2.0/usuarios/username/:dato -> ej. localhost:3000/api/V2.0/usuarios/username/usuario1(ponemos el username del usuario a editar)(formato del body acontinuacion)
    - Patch -> url:port/api/V2.0/usuarios/email/:dato -> ej. localhost:3000/api/V2.0/usuarios/email/usuario1@usuario1.com(ponemos el email del usuario a editar)(formato del body acontinuacion)



    1. Delete:
    - Delete -> url:port/api/V2.0/usuarios/id/:dato -> ej. localhost:3000/api/V2.0/usuarios/:k546kjjk4563j4kh5jk34(ponemos el id del usuario a eliminar)
    - Delete -> url:port/api/V2.0/usuarios/username/:dato -> ej. localhost:3000/api/V2.0/usuarios/username/usuario1(ponemos el username del usuario a eliminar)
    - Delete -> url:port/api/V2.0/usuarios/email/:dato -> ej. localhost:3000/api/V2.0/usuarios/email/usuario1@usuario1.com(ponemos el email del usuario a eliminar)

### Formato body

###### El body tiene 3 atributos(nombre, precio, stock)

```
{
 username: "",
 email: "",
 password: ""
}
```

### Aclaraciones

#### Para agregar(post) y reemplazar(put) se deben enviar los tres atributos del body

#### Para editar(patch) solo se envia el atributo a modificar

#### Para get all(todos los archivos) se puede recibir un querry "orden" para definir si queremos que los elementos se meustren en forma ascendente ("ASC") o descendiente("DESC")
