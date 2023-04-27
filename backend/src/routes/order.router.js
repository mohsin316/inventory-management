import { Router } from "express";
import { orderList,addOrder, searchOrder, updateOrder, deleteOrder } from "../controller/order.controller.js";

const router = Router();

// GET functions for Product
router.route("/").get(orderList);
router.route("/:name").get(searchOrder);

//POST function for Product
router.route("/add").post(addOrder);

//PUT to update the Product stock
router.route("/update/:name").put(updateOrder);

//DELETE a Product
router.route("/delete/:name").delete(deleteOrder);

export default router;