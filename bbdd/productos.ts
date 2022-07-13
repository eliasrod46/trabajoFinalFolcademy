// productos.ts
// Creando una lista de productos

//-----------------------------------------------BBDD
//----------Definirmos una interface Producto
interface Producto { 
  id: number
  nombre: string; 
  precio: number;
  stock: number; 
} 

//----------Productos de ejemplo
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

//----------Array de Productos
let productos:Array<Producto> = [
 Producto1,
 Producto2,
 Producto3,
 Producto4
]

//-----------------------------------------------Funciones
//----------Ver todos los productos
export function getStock():Array<Producto> {
  //Retorno el array de productos entero
  return productos
}

//----------Agregar un producto
export function addProduct(nombre:string, precio:number, stock:number):String {

  //----------------------(Correccion del Fernando Emtnor)----------------------
  // defino variable id 
  // si el array esta vacio se va a asignar a id el valor 1
  // si no, vamos al ultimo elemento del array y al id del ultimo elemento le sumo 1 y lo guardo en id
  let id:number = !productos.length ? 1 : productos[productos.length-1].id+1
  
  // Asi lo hice yo
  // let id:number = -1
  
  // productos.length == 0
  // ? 1 
  // : productos[productos.length-1].id+1

  
  

  // Validacion(verifico si los datos recibidos vienen con info)
  // (en el body no hace falta poner los tres datos, solo el nombre es obligatorio)
  if(nombre === undefined){
    nombre = 'Sin Dato'
  }

  if(precio === undefined){
    precio = 0
  }

  if(stock === undefined){
    stock = 0
  }

  // Verifico si el campo nombre viene con info 
  if (nombre !== 'Sin Dato') {
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
  } else {
    throw new Error("Faltan datos para cargar el producto(nombre)");
    
  }
  
}

//----------Editar un producto
export function editProduct(id:number, nombre:string, precio:number, stock:number):String {
  // defino variable indexEdit donde voy a guardar el indice el producto a editar(en caso de encontrarlo) 
  let indexEdit:number = -1

  //Verifico que lo recibido por parametros sea un numero
  if(isNaN(id)){
    throw new Error("El parametro ingresado no es un numero");
  }

  //Busco si existe en el array algun producto con el id recibido por params  
  indexEdit= productos.findIndex((producto)=> producto.id == id)


  //Verifico si existe el producto, si existe sobreesribo el objeto con los datos nuevos
  if(indexEdit !== -1){

    // Verifico que datos ingreso el usuario ya que puede modificar 1,2 o los 3 atributos
    // y luego actualizo la info
    nombre === undefined
    ? productos[indexEdit].nombre = productos[indexEdit].nombre
    : productos[indexEdit].nombre = nombre

    precio === undefined
    ? productos[indexEdit].precio = productos[indexEdit].precio
    : productos[indexEdit].precio = precio

    stock === undefined
    ? productos[indexEdit].stock = productos[indexEdit].stock
    : productos[indexEdit].stock = stock

    return `producto con id: ${id} editado`

  }else{
    throw new Error(`No existe producto con el id ingresado(${id})`);
  }

}

//----------Eliminar un producto
export function delProduct(id:number):String {
  // defino variable indexDel donde voy a guardar el indice el producto a eliminar(en caso de encontrarlo) 
  let indexDel:number = -1

  //Verifico que lo recibido por parametros sea un numero
  if(isNaN(id)){
    throw new Error("El parametro ingresado no es un numero");
  }

  //Busco si existe en el array algun producto con el id recibido por params  
  indexDel= productos.findIndex((producto)=> producto.id == id)

  //Verifico si existe el producto con el id, si existe con splice elimino el objeto del array
  if(indexDel !== -1){
    productos.splice(indexDel,1)
    return `producto con id: ${id} eliminado`
  }else{
    throw new Error(`No existe producto con el id ingresado(${id})`);
  }

}