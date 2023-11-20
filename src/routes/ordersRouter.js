const { Router } = require("express");

// importamos handler
const getOrdersHandler = require("..//handlers/Orders/getOrdersHandler");
const createOrderHandler = require("../handlers/Orders/createOrderHandler");
const getOrdersByUserIdHandler = require("../handlers/Orders/getOrdersByUserIdHandler");
const getOrderByIdHandler = require("../handlers/Orders/getOrderByIdHandler");
const editOrderHandler = require("../handlers/Orders/editOrderHandler");
const cancelOrderHandler = require("../handlers/Orders/cancelOrderHandler");
const restoreOrderHandler = require('../handlers/Orders/restoreOrderHandler');

const ordersRouter = Router();

// definimos rutas
ordersRouter.get("/", getOrdersHandler);
ordersRouter.get("/:orderId", getOrderByIdHandler);
ordersRouter.get("/user/:userId", getOrdersByUserIdHandler);
ordersRouter.post("/", createOrderHandler);
ordersRouter.put("/:orderId", editOrderHandler);
ordersRouter.delete("/cancel/:orderId", cancelOrderHandler);
ordersRouter.put("/restore/:orderId", restoreOrderHandler);

module.exports = ordersRouter;