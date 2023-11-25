const { Orders } = require("../../db");

const getOrderByIdDB = async (orderId) => {
  const order = await Orders.findByPk(orderId);
  
  return order;
};

module.exports = { getOrderByIdDB };
