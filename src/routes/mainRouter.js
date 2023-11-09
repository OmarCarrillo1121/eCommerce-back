const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

//Agregar rutas:⭐
//const  = require("./");
<<<<<<< HEAD
// const videogamesRouter = require("./videogamesRouter");
const usersRouter = require("./usersRouter");
=======
const videogamesRouter = require("./videogamesRouter");
>>>>>>> b66b690dab9f0ed6c70564add740beb965fd74f8



const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);⭐

<<<<<<< HEAD
// mainRouter.use("/videogames", videogamesRouter);
mainRouter.use("/users", usersRouter);
=======
mainRouter.use("/videogames", videogamesRouter);
>>>>>>> b66b690dab9f0ed6c70564add740beb965fd74f8
//mainRouter.use("/", );



module.exports = mainRouter;