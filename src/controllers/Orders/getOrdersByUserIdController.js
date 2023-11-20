const { Orders } = require("../../db");

const getOrdersByUserIdDB = async (userId) => {
  const userOrders = await Orders.findAll({
    where: {
      userId: userId,
    },
  });
  return userOrders;
};

module.exports = { getOrdersByUserIdDB };
