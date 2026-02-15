const { Router } = require("express");
const {
  getOrders,
  postOrder,
  deleteOrder,
  getOrder,
} = require("../controllers/ordersController");
const isAdmin = require("../controllers/isAdmin");
const verifyToken = require("../controllers/verifyToken");

const ordersRouter = new Router();

ordersRouter.get("/", isAdmin, getOrders);
ordersRouter.post("/", verifyToken, postOrder);
ordersRouter.delete("/:id", isAdmin, deleteOrder);
ordersRouter.get("/:id", isAdmin, getOrder);

module.exports = ordersRouter;
