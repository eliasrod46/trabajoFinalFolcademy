
# Desafio 2 - api-productos
## Elias Rodriguez

### Iniciar el servidor
Para iniciar el server y probar la api seguimos los siguientes pasos en la terminal

* npm i
* npm run start

El puerto por defecto es 3000 

### Descripcion de la api
###### La api cuenta con con 4 endpints, get, post, put, detele
* get -> obtener todos los productos
* post -> agregar un producto(datos por body)
* put -> editar un producto(indicando id por URL)(datos por body)
* deletet -> eliminar un producto(indicando id por URL)

### URL

* get -> url:port/productos -> ej. localhost:3000/productos
* post -> url:port/productos  -> ej. localhost:3000/productos (formato del body acontinuacion)
* put -> url:port/productos/:id  -> ej. localhost:3000/productos/:id (ponemos el id del producto a editar)(formato del body acontinuacion)
* delete -> url:port/productos/:id  -> ej. localhost:3000/productos/:id (ponemos el id del producto a eliminar)


### Formato body
###### El body tiene 3 atributos(nombre, precio, stock)
###### Para agregar un producto(post) el parametro nombre es oblicatorio
###### Para editar, en la url debe indicar el id del producto, y en el body solo el atributo a modificar


```
{ 
 nombre: "", 
 precio: 0,
 stock: 0
}
```
