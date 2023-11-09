const {Videogames} = require("../../db");

const editProductController = async (id, updatedData) => {
    const productData = await Videogames.findByPk(id);
  
    // Verificamos si el ID ingresado es correcto
    if (!productData) {
      throw new Error(`Product ID not found: ${id}`);
    }
  
    // Si es correcto, editamos su info recibida por body (chequear el handler)
    await productData.update(updatedData);
    return "Successfully edited product";
  };
  
  module.exports = editProductController;