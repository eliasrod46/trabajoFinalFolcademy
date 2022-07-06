# Desafio 2 - api-productos
## Elias Rodriguez

### Descripcion de la api
###### La api cuenta con con 4 endpints, get, post, put, detele
###### get(obtener todos los productos), post(agregar un producto), put(editar un producto), deletet(eliminar un producto)

### URL

###### get url:port/porductos ej. localhost:3000/porductos
###### post url:port/porductos ej. localhost:3000/porductos (formato del body acontinuacion)
###### put url:port/porductos/:id ej. localhost:3000/porductos/:id (ponemos el id del producto a editar)(formato del body acontinuacion)
###### delete url:port/porductos/:id ej. localhost:3000/porductos/:id (ponemos el id del producto a eliminar)


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
