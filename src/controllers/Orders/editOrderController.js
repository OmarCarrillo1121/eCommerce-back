const { Orders } = require("../../db");

const updateOrderDB = async (orderId, updatedData) => {
  const order = await Orders.findByPk(orderId);

  if (!order) {
    return null; // Puedes personalizar el manejo si la orden no se encuentra
  }

  const updatedOrder = await order.update(updatedData);
  return updatedOrder;
};

module.exports = { updateOrderDB };
