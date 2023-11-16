const { getOrderByIdDB } = require("../../controllers/Orders/getOrderByIdController");

const getOrderByIdHandler = async (req, res) => {
  const { orderId } = req.params;

  try {
    const order = await getOrderByIdDB(orderId);

    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404).json({ error: "Order not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log(error);
  }
};

module.exports = getOrderByIdHandler;
