const { createOrderDB } = require("../../controllers/Orders/createOrderController");

const createOrderHandler = async (req, res) => {
  const { userId, products, amount, cancelled, date } = req.body;

  try {
    const newOrder = await createOrderDB(userId, products, amount, cancelled, date);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = createOrderHandler;
