const { Orders } = require("../../db");

const restoreOrder = async (orderId) => {
    const order = await Orders.findByPk(orderId);

    // verificamos si el Id ingresado es correcto
    if (!order) {
        throw new Error(`Order with ID ${id} not found.`);
    }

    // si el id ingresado es correcto, verificamos si la orden no esta cancelada
    if (order.cancelled === false) {
        return "Order is not cancelled."
    };

    // En caso de que  este cancelada, la restauramos!
    await order.update({ cancelled: false });

    return "Order restored succesfully";
}

module.exports = { restoreOrder };