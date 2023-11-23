const { Orders, Videogames, Users } = require("../../db");

const createOrderDB = async (userId, products, cancelled, date, amount) => {
  try {
    // Asegúrate de que userId tenga un valor
    if (!userId) {
      throw new Error("UserId no proporcionado");
    }

    // Obtener la información del usuario asociado a la orden
    const user = await Users.findByPk(userId, { attributes: ["email"] });

    // recibimos la información completa de los Videogames
    const productsInfo = await Promise.all(
      products.map(async (productId) => {
        // Convertir productId a un número si es necesario
        const id = parseInt(productId, 10);

        if (isNaN(id) || id <= 0) {
          // Manejar el caso en que productId no sea un número válido
          return null;
        }

        const videogame = await Videogames.findByPk(id);

        return videogame ? videogame.toJSON() : null;
      })
    );

    // Validar si todos los productos tienen información
    if (productsInfo.some((product) => !product)) {
      throw new Error("Alguno de los productos no fue encontrado");
    }

    // calculamos el total del precio
    const totalAmount = productsInfo.reduce((acc, product) => {
      return acc + product.price;
    }, 0);

    const newOrder = await Orders.create({
      userId: userId || undefined,
      user: user.toJSON(), // Agregar información del usuario a la orden
      products: productsInfo,
      amount: totalAmount,
      cancelled: cancelled,
      date: date,
    });

    return { order: newOrder, user: user.toJSON() };
  } catch (error) {
    throw new Error("Error al crear la orden");
  }
};

module.exports = { createOrderDB };
