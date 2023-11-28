//const { videogamesRouter } = require("express");

const { createVideogamesDB } = require("../../controllers/Videogames/createVideogamesController");

 const createVideogamesHandler = async(req, res)=>{
    const { name, description, image, genre, developer, platform, price, stock, discount } = req.body;
    try {
        const createProduct = await createVideogamesDB(name, description, image, genre, developer, platform, price, stock, discount);
        res.status(201).json(createProduct);

    } catch(error){
        res.status(400).json({error: error.message});
        console.log(error);
    }
 }
 module.exports= createVideogamesHandler;
