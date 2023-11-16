const { Op } = require('sequelize');

const { Videogames } = require("../../db");

//Todos los productos que tengan la propiedad delete en FALSE⭐!
const getDeletedFalse = async () => {
  const productDB = await Videogames.findAll({
    where: {
      deleted: false,
    },
  });

  const productEstructurados = productDB.map((product) => {
    return {
      id: product.id,
      name: product.name,
      description: product.description, 
      image: product.image,
      genre: product.genre,
      developer: product.developer,
      platform: product.platform, 
      price: product.price,
      stock: product.stock,
      deleted: product.deleted,
    };
  });

  return productEstructurados;
};

module.exports = { getDeletedFalse };
