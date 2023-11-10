const { Videogames } = require("../../db");
const axios = require("axios");

//Create Producto Videogames:
const createVideogamesDB = async(name, description, image, genre, developer, platform, price, discount, stock)=>{ 
    const newProduct = await Videogames.create({name, description, image, genre, developer, platform, price, discount, stock});
     return newProduct;
  };

  module.exports={createVideogamesDB};