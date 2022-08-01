// product.controller.ts
//---------------------------------/---------------------------------Imports
import Product from "../models/Product";
import ProductInterface from "../models/product.interface";

//---------------------------------/--------------------------------- Funciones

//Obtener Todos Los productos
export const getAll = async (req: any, res: any) => {
  try {
    const order: string = req.query.order;
    const atributo: string = req.query.atributo;

    let sort: any = {};
    sort[atributo] = order;

    res.json({
      Respuesta: await Product.find().sort(sort),
    });
  } catch (error) {
    res.status(404).send(`Error al traer todos los productos: ${error}`);
  }
};

//Agregar un producto
export const add = async (req: any, res: any) => {
  try {
    let product: ProductInterface = new Product(req.body);
    await product.save();
    res.json({ message: "Product Created Successful" });
  } catch (error) {
    res.status(400).json({ message: `Fail to create product: ${error}` });
  }
};

//Obtener producto por id
export const getById = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    res.json({
      Respuesta: await Product.findById(id),
    });
  } catch (error) {
    res.status(404).send(`Fail to get product: ${error}`);
  }
};

//Editar producto por id
export const editById = async (req: any, res: any) => {
  try {
    const { id } = req.params;

    await Product.findByIdAndUpdate(id, req.body);

    res.json({ respuesta: "Product Updated Successful" });
  } catch (error) {
    res.status(404).json({ message: `Fail to update product: ${error}` });
  }
};

//Eliminar producto por id
export const delById = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const respuesta = await Product.findByIdAndDelete(id);
    if (!respuesta)
      return res.status(403).json({ message: "Product not found" });
    res.json({ message: "Product Deleted Successful" });
  } catch (error) {
    res.status(404).json({ message: "Fail to delete product" });
  }
};
