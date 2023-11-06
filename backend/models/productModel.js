import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema(
    {
        name: {type: String},
        price: {type: Number},
        description: {type: String}
    }
);

const Product = mongoose.model("products", ProductSchema);

export default Product;