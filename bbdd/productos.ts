// productos.ts
// Creando una lista de productos

//Definirmos una interface Producto
interface Producto { 
  id: number
  nombre: string; 
  precio: number;
  stock: number; 
} 

//Productos de ejemplo
const Producto1: Producto = { 
  id: 1,
  nombre: "Yogurt", 
  precio: 100,
  stock: 13
}; 
const Producto2: Producto = { 
 id: 2,
 nombre: "Paquete de Galletas", 
 precio: 89.9,
 stock: 40
};
const Producto3: Producto = {
 id: 3,
 nombre: "Lata Coca-Cola", 
 precio: 80.50,
 stock: 0
};
const Producto4: Producto = {
 id: 4,
 nombre: "Alfajor",
 stock: 12,
 precio: 40
}

//Array de Productos
let productos:Array<Producto> = [
 Producto1,
 Producto2,
 Producto3,
 Producto4
]

//Ver todos los productos
export function getStock() {
  //Retorno el array de productos entero
  return productos
}

//Agregar un producto
export function addProduct(nombre:string, precio:number, stock:number) {

  // defino variable id 
  let id:number
  // si el arrray esta vacio se va a asignar a id el valor 1
  // si no, vamos al ultimo elemento del array y al id del ultimo elemento le sumo 1 y lo guardo en id
  productos.length === 0
  ? id = 1
  : id = productos[productos.length-1].id+1

  //Armo el objeto producto
  const newProuct: Producto = { 
    id: id,
    nombre: nombre, 
    precio: precio,
    stock: stock
   };
  //Pusheo el nuevo objeto en el array y retorno mensaje OK
  productos.push(newProuct)
  return `producto agregado correctamente con id: ${id}`
}

//Editar un producto
export function editProduct(id:number, nombre:string, precio:number, stock:number) {
  // defino variable indexEdit donce voy a guardar el indice el producto a editar(en caso de encontrarlo) 
  let indexEdit:number = -1

  //Busco si existe en el array algun producto con el id recibido por params  
  productos.forEach((producto,index) => {
    if(producto.id === id){
      indexEdit = index
    }
  });

  //Verifico si existe, si existe sobreesribo el objeto con los dotos nuevos
  if(indexEdit !== -1){
    productos[indexEdit].nombre = nombre
    productos[indexEdit].precio = precio
    productos[indexEdit].stock = stock
    return `producto con id: ${id} editado`

  }else{
    return `No existe producto con el id ingresado(${id})`
  }

}

//Eliminar un producto
export function delProduct(id:number) {
  // defino variable indexDel donce voy a guardar el indice el producto a eliminar(en caso de encontrarlo) 
  let indexDel:number = -1

  //Busco si existe en el array algun producto con el id recibido por params  
  productos.forEach((producto,index) => {
    if(producto.id === id){
      indexDel = index
    }
  });

  //Verifico si existe, si existe con splice elimino el objeto del array
  if(indexDel !== -1){
    productos.splice(indexDel,1)
    return `producto con id: ${id} eliminado`
  }else{
    return `No existe producto con el id ingresado(${id})`
  }

}