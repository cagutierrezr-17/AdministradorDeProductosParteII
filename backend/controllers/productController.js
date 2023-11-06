import Product from "../models/productModel.js";


// crear producto
const createProduct = async (req, res) => {
	try {
		let productData = req.body;
		let newProduct = await Product.create(productData);
		res.status(200).json(newProduct);
	} catch (e) {
		console.log("error: " + e);
		res.status(400).json({
			"message": e.message
		});
	}
};

// mostrar todos los productos
const getProduct = async (req, res) => {
	let productList = await Product.find();
	res.status(200).json(productList)
};

// mostrar un producto
const getOneProduct = async (req, res) => {
	try {
		let id = req.params.idProduct;
		let productFound = await Product.findById(id)
		res.status(200).json(productFound)
	} catch (e) {
		console.log(e);
	}
};

// editar un producto
const updateOneProduct = async (req, res) => {
	try {
		let id = req.params.idProduct;
		let data = req.body;
		await Product.findByIdAndUpdate(id, data);
		res.status(200).json("Producto actualizado")
	} catch (e) {
		res.status(400).json({
			"message": e.message
		});
	}
};

// borrar un producto
const deleteProduct = async (req, res) => {
	let id = req.params.idProduct;
	let productDelete = await Product.findByIdAndDelete(id);
	res.status(200).json(productDelete);
};


export { createProduct, getProduct, getOneProduct, updateOneProduct, deleteProduct };