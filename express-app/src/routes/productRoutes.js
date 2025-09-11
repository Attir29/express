import express from "express";
import {
  addProductsHandler,
  deleteProductByIdHandler,
  getAllProductsHandler,
  getProductByIdHandler,
  updateProductByIdHandler,
} from "../handlers/productHandler.js";

const productRouter = express.Router();

productRouter.get("/products", getAllProductsHandler);
productRouter.post("/products", addProductsHandler);
productRouter.get("/products/:id", getProductByIdHandler);
productRouter.put("/products/:id", updateProductByIdHandler);
productRouter.delete("/products/:id", deleteProductByIdHandler);

export default productRouter;
