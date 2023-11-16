const { Orders } = require("../../db");

const restoreOrder = async (orderId) => {
    const order = await Orders.findByPk(orderId);

    // verificamos si el Id ingresado es correcto
    if (!order) {
        throw new Error(`Order with ID ${id} not found.`);
    }

    // si el id ingresado es correcto, verificamos si la orden ya esta cancelada
    if (order.cancelled === false) {
        return "Order is not cancelled."
    };

    // En caso de que no este cancelada, la cancelamos
    await order.update({ cancelled: false });

    return "Order restored succesfully";
}

module.exports = { restoreOrder };