const { Videogames } = require("../../db");
const sequelize = require('sequelize');

//⭐Implementando el borrado logico:
  const deletedProduct = async (id) => {
    const product = await Videogames.findByPk(id);
  
    // Verificamos si el ID ingresado es correcto
    if (!product) {
      throw new Error(`Product ID not found: ${id}`);
    }
    // Si el ID ingresado es correcto
    if (product.deleted === true) {
      return "Product already removed.";
    }
  
    //⭐ lo baneamos:
    await product.update({ deleted: true });
  
    return "Product successfully removed.";
  };
  
  module.exports = { deletedProduct };