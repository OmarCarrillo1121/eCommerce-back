const cancelOrderController = require("../../controllers/Orders/cancelOrderController");

const cancelOrderHandler = async (req, res) => {
  const { orderId } = req.params;

  try {
    const result = await cancelOrderController.cancelOrder(orderId);
    res.status(200).json({ message: result });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = cancelOrderHandler;
