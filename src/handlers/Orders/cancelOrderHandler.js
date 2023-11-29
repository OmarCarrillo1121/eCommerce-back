/* const cancelOrderController = require("../../controllers/Orders/cancelOrderController");

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
 */
const { Orders, Users } = require("../../db");
const cancelOrderController = require("../../controllers/Orders/cancelOrderController");
const { sendMail } = require("../../utils/email");

const cancelOrderHandler = async (req, res) => {
  const { orderId } = req.params;

  try {
    const result = await cancelOrderController.cancelOrder(orderId);

    const canceledOrder = await Orders.findByPk(orderId, { include: Users });

    if (!canceledOrder) {
      console.log("Order not found");
      return res
        .status(404)
        .json({ error: `Order with ID ${orderId} not found.` });
    }

    if (!canceledOrder.User) {
      console.log("User not found");
      return res
        .status(404)
        .json({ error: `User with ID ${canceledOrder.userId} not found.` });
    }

    const userEmail = canceledOrder.User.email;

    const subject = "Orden Cancelada";
    const message = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <p style="font-size: 18px; color: #333;">¡Orden Cancelada!</p>
        <p style="font-size: 16px; color: #555;">Detalles de la orden cancelada:</p>
        <ul style="list-style: none; padding: 0;">
          <li style="font-size: 14px; color: #777; margin-bottom: 10px;">Usuario: ${userEmail}</li>
          <li style="font-size: 14px; color: #777; margin-bottom: 10px;">Productos:</li>
          <ul style="list-style: none; padding: 0; margin-left: 0;">
            ${canceledOrder.products
              .map(
                (product) => `
              <div style="margin-bottom: 20px; border-bottom: 1px solid #ccc; padding-bottom: 10px;">
                <p style="font-weight: bold; margin-top: 10px;">${product.name}</p>
                <p>Precio: $${product.price}</p>
              </div>
            `
              )
              .join("")}
          </ul>
          <li style="font-size: 16px; color: #333; font-weight: bold; margin-top: 10px;">Total: $${
            canceledOrder.amount
          }</li>
        </ul>
        <p style="font-size: 16px; color: #555;">Lamentamos la cancelación de tu orden. Si tienes alguna pregunta, contáctanos.</p>
      </div>
    `;

    await sendMail(userEmail, subject, message);

    return res.status(200).json({ message: result });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = cancelOrderHandler;
