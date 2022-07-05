// productos.ts
// Creando una lista de productos
interface Producto { 
  id: number
  nombre: string; 
  precio: number;
  stock: number; 
} 
//
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
let productos:Array<Producto> = [
 Producto1,
 Producto2,
 Producto3,
 Producto4
]

//Ver todos los productos
export function getStock() {
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

  productos.push(newProuct)
  return `producto agregado correctamente con id: ${id}`
}

//Editar un producto
export function editProduct(id:number, nombre:string, precio:number, stock:number) {
  let indexEdit:number = -1

  productos.forEach((producto,index) => {
    if(producto.id === id){

      indexEdit = index
    }
  });

  if(indexEdit !== -1){
    productos[indexEdit].nombre = nombre
    productos[indexEdit].precio = precio
    productos[indexEdit].stock = stock
    return `producto con id: ${id} editado`

  }else{
    return `No existe producto con el id ingresado(${id})`
  }

}

export function delProduct(id:number) {
  return "producto eliminado"
}