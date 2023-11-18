const { Orders } = require("../../db");

const cancelOrder = async (orderId) => {
    const order = await Orders.findByPk(orderId);

    // verificamos si el Id ingresado es correcto
    if (!order) {
        throw new Error(`Order with ID ${id} not found.`);
    }

    // si el id ingresado es correcto, verificamos si la orden ya esta cancelada
    if (order.cancelled === true) {
        return "Order is already cancelled."
    };

    // En caso de que no este cancelada, la cancelamos
    await order.update({ cancelled: true });

    return "Order cancelled succesfully";
};

module.exports = { cancelOrder };