const { Router } = require("express");

//⭐Importo los handlers que pertenecen al producto Videogames:
const  getVideogamesHandler  = require("../handlers/Videogames/getVideogamesHandler");
const  getVideogamesByIdHandler  = require("../handlers/Videogames/getVideogamesByIdHandler");
const createVideogamesHandler = require("../handlers/Videogames/createVideogamesHandler");

//👀Importo los handlers que utilizan Deleted! 
const getDeleteFalseHandler = require("../handlers/Videogames/getDeleteFalseHandler");//handler delete en false!

const deletedProductHandler = require("../handlers/Videogames/deletedProductHandler");//handler de borrado logico!

const getActiveVideogamesHandler = require("../handlers/Videogames/getDeletedActiveHandler");//handler de productos eliminados!

const putProductHandler = require("../handlers/Videogames/putDeletedHandler");

const editProductHandler =require("../handlers/Videogames/editProductHandler");

/////////////////////////////////////////////////////////

const videogamesRouter = Router();


//delete:
videogamesRouter.get("/", getDeleteFalseHandler);//False


//⭐Ruta que trae todos los productos videogames
videogamesRouter.get("/all", getVideogamesHandler);//(Trae todos los productos, habilitados y deshabilitados)

//⭐Ruta que busca un producto Videogames por ID:
//videogamesRouter.get("/:id", getVideogamesByIdHandler);//producto por id

//⭐Ruta que crea un Producto Videogames:
videogamesRouter.post("/", createVideogamesHandler);//post producto

///👀Delete:
videogamesRouter.get("/", getDeleteFalseHandler);//False

videogamesRouter.get("/disabled", getActiveVideogamesHandler);//Trae todos los productos que tenga la propiedad deleted en true

videogamesRouter.delete("/:id", deletedProductHandler);//Deshabilita un producto existente por id, no eliminar solo cambiar la propiedad deleted a true

//⭐Ruta que busca un producto Videogames por ID:
videogamesRouter.get("/:id", getVideogamesByIdHandler);//producto por id

videogamesRouter.put("/restore/:id", putProductHandler);//para habilitar los productos desabilitados!

videogamesRouter.put("/:id", editProductHandler);//para editar un producto!

module.exports = videogamesRouter;

