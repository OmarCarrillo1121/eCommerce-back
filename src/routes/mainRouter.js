const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
//const dotenv = require("dotenv"); //Para usar variables de entorno
//Agregar rutas:⭐
//const  = require("./");
const usersRouter = require("./usersRouter");
const videogamesRouter = require("./videogamesRouter");
const bannersRouter = require("./bannersRouter");
const reviewsRouter = require("./reviewsRouter");
const ordersRouter = require("./ordersRouter");
const mercadoPago = require("./mercadoPago");// edward


const mainRouter = Router();

//  Ruta Principal
mainRouter.get("/", (req, res) => {
    res.send('Bienvenidos al Backend de eCommerce');
  });

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);⭐

// mainRouter.use("/videogames", videogamesRouter);

mainRouter.use("/users", usersRouter);
mainRouter.use("/videogames", videogamesRouter);
mainRouter.use("/banners", bannersRouter);
mainRouter.use("/reviews", reviewsRouter);
mainRouter.use("/orders", ordersRouter);
mainRouter.use("/MercadoPago", mercadoPago);
module.exports = mainRouter;
