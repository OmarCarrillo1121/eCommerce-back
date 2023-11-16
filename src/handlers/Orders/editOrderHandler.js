const { updateOrderDB } = require("../../controllers/Orders/editOrderController");

const updateOrderHandler = async (req, res) => {
  const { orderId } = req.params;
  const updatedData = req.body; // Los datos actualizados deben estar en el cuerpo de la solicitud

  try {
    const updatedOrder = await updateOrderDB(orderId, updatedData);

    if (updatedOrder) {
      res.status(200).json(updatedOrder);
    } else {
      res.status(404).json({ error: "Order not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log(error);
  }
};

module.exports = updateOrderHandler;
