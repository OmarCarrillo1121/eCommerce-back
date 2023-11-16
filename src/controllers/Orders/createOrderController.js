const { Orders, Videogames } = require("../../db");

const createOrderDB = async (userId, products, cancelled, date) => {
  // recibimos la información completa de los Videogames
  const productsInfo = await Promise.all(
    products.map(async (productId) => {
      const videogame = await Videogames.findByPk(productId);
      return videogame.toJSON();
    })
  );

  // calculamos el total del precio
  const totalAmount = productsInfo.reduce((acc, product) => {
    return acc + (product ? product.price : 0);
  }, 0);

  // creamos la orden
  const newOrder = await Orders.create({
    userId: userId,
    products: productsInfo,
    amount: totalAmount,
    cancelled: cancelled,
    date: date,
  });

  return newOrder;
};

module.exports = { createOrderDB };
