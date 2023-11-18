const restoreOrderController = require("../../controllers/Orders/restoreOrderController");

const restoreOrderHandler = async (req, res) => {
    const { orderId } = req.params;

    try {
        const result = await restoreOrderController.restoreOrder(orderId);
        res.status(200).json({ message: result });
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.log(error);
    }
};

module.exports = restoreOrderHandler;