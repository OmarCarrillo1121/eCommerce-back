const { Router } = require("express");

//Importo los handlers que pertenecen al producto Videogames:
const  getVideogamesHandler  = require("../handlers/Videogames/getVideogamesHandler");
const  getVideogamesByIdHandler  = require("../handlers/Videogames/getVideogamesByIdHandler");
const createVideogamesHandler = require("../handlers/Videogames/createVideogamesHandler");


const videogamesRouter = Router();

//⭐Ruta que trae todos los productos videogames
videogamesRouter.get("/", getVideogamesHandler);

//⭐Ruta que busca un producto Videogames por ID:
videogamesRouter.get("/:id", getVideogamesByIdHandler);

//⭐Ruta que crea un Producto Videogames:
videogamesRouter.post("/", createVideogamesHandler);

module.exports = videogamesRouter;

