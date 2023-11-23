const { sendMail } = require("../../utils/email");
const {
  createOrderDB,
} = require("../../controllers/Orders/createOrderController");

const createOrderHandler = async (req, res) => {
  const { userId, products, amount, cancelled, date } = req.body;

  try {
    const { order, user } = await createOrderDB(
      userId,
      products,
      cancelled,
      date,
      amount
    );

    const productDetails = order.products.map((product) => {
      return `
        <div style="margin-bottom: 20px; border-bottom: 1px solid #ccc; padding-bottom: 10px;">
          <p style="font-weight: bold; margin-top: 10px;">${product.name}</p>
          <p>Precio: $${product.price}</p>
        </div>
      `;
    });

    const message = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
    <p style="font-size: 18px; color: #333;">¡Compra realizada con éxito!</p>
    <p style="font-size: 16px; color: #555;">Detalles de la orden:</p>
    <ul style="list-style: none; padding: 0;">
        <li style="font-size: 14px; color: #777; margin-bottom: 10px;">Usuario: ${
          user.email
        }</li>
        <li style="font-size: 14px; color: #777; margin-bottom: 10px;">Productos:</li>
        <ul style="list-style: none; padding: 0; margin-left: 0;">
            ${productDetails.join("")}
        </ul>
        <li style="font-size: 16px; color: #333; font-weight: bold; margin-top: 10px;">Total: $${
          order.amount
        }</li>
    </ul>
    <p style="font-size: 16px; color: #555;">¡Gracias por tu compra!</p>
</div>

    `;

    await sendMail(user.email, "Compra realizada", message);
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = createOrderHandler;
