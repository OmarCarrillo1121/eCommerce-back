// const { videogamesRouter } = require("express");
const { getAllVideogames } = require("../../controllers/Videogames/getVideogamesController");

// ⭐ Todos los productos y búsqueda por name:
const getVideogamesHandler = async (req, res) => {
  const { name } = req.query;
  console.log(name);
  try {
    if (name) {
      const response = await getAllVideogames(name); // Devuelvo el producto que se encontró por nombre
      return res.status(200).json(response);
    }
    const getAllProduct = await getAllVideogames(); // Todos los productos
    res.status(200).json(getAllProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = getVideogamesHandler;