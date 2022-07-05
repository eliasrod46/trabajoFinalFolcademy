// productos.ts
// Creando una lista de productos
interface Producto { 
  nombre: string; 
  precio: number;
  stock: number; 
} 
//
const Producto1: Producto = { 
  nombre: "Yogurt", 
  precio: 100,
  stock: 13
}; 
const Producto2: Producto = { 
 nombre: "Paquete de Galletas", 
 precio: 89.9,
 stock: 40
};
const Producto3: Producto = { 
 nombre: "Lata Coca-Cola", 
 precio: 80.50,
 stock: 0
};
const Producto4: Producto = {
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

export function getStock() {
  return productos
}

export function addProduct(obj:Object) {
  return "producto agregado"
}

export function editProduct(obj:Object) {
  return "producto editado"
}

export function delProduct(name:string) {
  return "producto eliminado"
}