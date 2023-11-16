const { getOrdersDB } = require("../../controllers/Orders/getOrdersController");

const getOrdersHandler = async (req, res) => {
  try {
    const allOrders = await getOrdersDB();
    res.status(200).json(allOrders);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log(error);
  }
};

module.exports = getOrdersHandler;