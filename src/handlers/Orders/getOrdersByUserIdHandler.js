const { getOrdersByUserIdDB } = require("../../controllers/Orders/getOrdersByUserIdController");

const getOrdersByUserIdHandler = async (req, res) => {
  const { userId } = req.params;

  try {
    const userOrders = await getOrdersByUserIdDB(userId);

    if (userOrders.length > 0) {
      res.status(200).json(userOrders);
    } else {
      res.status(404).json({ message: "No orders found for the user" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log(error);
  }
};

module.exports = getOrdersByUserIdHandler;
