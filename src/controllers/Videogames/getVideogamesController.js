const { Videogames } = require("../../db");
const axios = require("axios");

//Producto videogames:
const getVideogamesDB = async () => {
  const allVideogamesDB = await Videogames.findAll();

  // ⭐ Hago un map para estructurar la info que viene de la db
  const productEstructurados = allVideogamesDB.map((product) => {
    return {
      id: product.id,
      name: product.name,
      description: product.description, 
      image: product.image,
      genre: product.genre,
      developer: product.developer,
      platform: product.platform, 
      originalPrice: product.originalPrice,
      price: product.price,
      stock: product.stock,
      discount: product.discount,
      deleted: product.deleted,
    };
  });
  return productEstructurados;
};

// 😃 Busqueda por Name:
const getAllVideogames = async (name) => {
  const getProduct = await getVideogamesDB();
  const allProduct = [...getProduct];

  if (name) {
    const productName = allProduct.filter((videogame) =>
      videogame.name.toLowerCase().includes(name.toLowerCase())
    );
    if (!productName.length)
      throw new Error(`No se encontró el Producto con ese Nombre: ${name}`);
    return productName;
  }
  return allProduct;
};

module.exports = { getAllVideogames };
