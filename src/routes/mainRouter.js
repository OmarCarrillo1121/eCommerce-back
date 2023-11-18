const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

//Agregar rutas:⭐
//const  = require("./");
const usersRouter = require("./usersRouter");
const videogamesRouter = require("./videogamesRouter");
const bannersRouter = require("./bannersRouter");
const reviewsRouter = require("./reviewsRouter");
const ordersRouter = require("./ordersRouter");


const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);⭐

// mainRouter.use("/videogames", videogamesRouter);
mainRouter.use("/users", usersRouter);
mainRouter.use("/videogames", videogamesRouter);
mainRouter.use("/banners", bannersRouter);
mainRouter.use("/reviews", reviewsRouter);
mainRouter.use("/orders", ordersRouter);



module.exports = mainRouter;
