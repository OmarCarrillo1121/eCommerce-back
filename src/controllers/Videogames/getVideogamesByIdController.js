const { Videogames } = require("../../db");
const axios = require("axios");


//⭐Busqueda de un Producto Videogame por ID:
const getVideogamesByIdController = async (id) => {
   
    const productDB = await Videogames.findByPk(id);

    if (!productDB) {
      throw new Error(`No se encontro ningun Producto con el ID ${id}`);
    }
    return productDB;
  };

 module.exports = {getVideogamesByIdController};
   