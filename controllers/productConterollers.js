import productModel from "../models/productModel.js";

const createProduct = async (req, res) => {

    //verificar datos

    //convertir a number los string
    //const precioProducto = parseInt(req.body.precioProducto);

    const { 
        nombreProducto, 
        precioProducto, 
        descripcionProducto, 
        stockProducto, 
        imagenProducto } = req.body;

    const newProduct = new productModel({
        nombreProducto, 
        precioProducto, 
        descripcionProducto, 
        stockProducto, 
        imagenProducto
    });

    console.log(newProduct);
    

    await newProduct.save();

    res.render('formProductos');
};

const getProducts = async (req, res) => {};
const getProductById = async (req, res) => {};
const updateProduct = async (req, res) => {};
const deleteProduct = async (req, res) => {};

export { 
    createProduct, 
    getProducts, 
    getProductById, 
    updateProduct, 
    deleteProduct 
};