const {Videogames} = require("../../db");

const putDeleteActive = async (id) => {
    const product = await Videogames.findByPk(id);
  
    // Verificamos si el ID ingresado es correcto
    if (!product) {
      throw new Error(`Product ID not found: ${id}`);
    }
  
    // Si el ID ingresado es correcto, verificamos si el usuario ya estaba baneado
    if (product.deleted === false) {
      return "Product is not removed.";
    }
  
    // En caso de que no este baneado, lo baneamos
    await product.update({ deleted: false });
  
    return "Product restored succesfully!.";
  };
  
  module.exports = { putDeleteActive };