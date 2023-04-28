import { Router } from "express";
import {
  productList,
  addProduct,
  searchProduct,
  updateProduct,
  deleteProduct,
} from "../controller/product.controller.js";

const router = Router();

// GET functions for Product
router.route("/").get(productList);
router.route("/:name").get(searchProduct);

//POST function for Product
router.route("/add").post(addProduct);

//PUT to update the Product stock
router.route("/update/:name").put(updateProduct);

//DELETE a Product
router.route("/delete/:name").delete(deleteProduct);

export default router;
