const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

//Agregar rutas:⭐
//const  = require("./");
const usersRouter = require("./usersRouter");
const videogamesRouter = require("./videogamesRouter");



const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);⭐

// mainRouter.use("/videogames", videogamesRouter);
mainRouter.use("/users", usersRouter);
mainRouter.use("/videogames", videogamesRouter);
//mainRouter.use("/", );



module.exports = mainRouter;
