const { Videogames } = require("../../db");

//Create Producto Videogames:
const createVideogamesDB = async (
  name,
  description,
  image,
  genre,
  developer,
  platform,
  price,
  discount,
  stock
) => {
  // Convierte el precio y el descuento a números
  const originalPrice = parseFloat(price);
  const discountValue = parseFloat(discount);

  // Calcula el precio con descuento aplicado
  const discountedPrice = originalPrice - (originalPrice * discountValue) / 100;

  // Crea el nuevo producto
  const newProduct = await Videogames.create({
    name,
    description,
    image,
    genre,
    developer,
    platform,
    originalPrice,
    price: discountedPrice,
    discount: discount,
    stock,
  });

  return newProduct;
};

module.exports = { createVideogamesDB };
