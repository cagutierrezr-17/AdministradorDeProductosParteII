import express from "express";
import * as productCtrl from "../controllers/productController.js"

const router = express.Router();

router.post("/api/product/create", productCtrl.createProduct);
router.get("/api/product/get", productCtrl.getProduct);
router.get("/api/product/getone/:idProduct", productCtrl.getOneProduct);
router.put("/api/product/update/:idProduct", productCtrl.updateOneProduct);
router.delete("/api/product/create/delete/:idProduct", productCtrl.deleteProduct);

export {router};