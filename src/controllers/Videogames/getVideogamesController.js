const { Videogames } = require("../../db");
const axios = require("axios");

//Producto videogames:
const getVideogamesDB = async ()=>{
    const allVideogamesDB = await Videogames.findAll();


    //⭐Hago un map para estructurar la info q viene de la db!
    const productEstructurados = allVideogamesDB.map((videogame)=> {
        return {
            id: videogame.id,
            name: videogame.name,
            description: videogame.description,
            image: videogame.image,
            genre: videogame.genre,
            developer: videogame.developer,
            platform: videogame.platform,
            price: videogame.price,
            stock: videogame.stock,//revisar
            discount: videogame.discount,
            deleted: videogame.deleted//revisar
        };
    });
    return productEstructurados;
};

//😃Busqueda por Name:
const  getAllVideogames = async (name)=>{
    const getProduct = await getVideogamesDB();
    const allProduct = [...getProduct];

    if (name){
        const productName = allProduct.filter((videogame)=>videogame.name.toLowerCase().includes(name.toLowerCase())
        );
        if(!productName.length)
        throw new Error(`No se encontro el Producto con ese Nombre: ${name}`);
        return productName;
    }
        return allProduct;
}
module.exports = {getAllVideogames};