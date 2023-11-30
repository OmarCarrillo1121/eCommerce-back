//const { videogamesRouter } = require("express");

const { createVideogamesDB } = require("../../controllers/Videogames/createVideogamesController");

const createVideogamesHandler = async (req, res) => {
  const { name, description, image, genre, developer, platform, price, discount, stock } = req.body;
  
  try {
    // Asegúrate de que solo se proporcione un precio
    if (!price || isNaN(parseFloat(price)) || discount < 0 || discount > 100) {
      throw new Error("Invalid price or discount value");
    }

    const createProduct = await createVideogamesDB(
      name,
      description,
      image,
      genre,
      developer,
      platform,
      price,
      discount,
      stock
    );

    res.status(201).json(createProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = createVideogamesHandler;