const { Orders } = require("../../db");

const getOrdersDB = async () => {
  const allOrders = await Orders.findAll();
  return allOrders;
};

module.exports = { getOrdersDB };
