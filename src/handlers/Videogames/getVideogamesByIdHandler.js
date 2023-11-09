//const { videogamesRouter } = require("../../routes/videogamesRouter");

const { getVideogamesByIdController } = require("../../controllers/Videogames/getVideogamesByIdController");

//⭐Busqueda por id de Producto videogames:
const getVideogamesByIdHandler = async(req, res)=>{
    const { id } = req.params;
    try{
        const response = await getVideogamesByIdController(id);
        return res.status(200).json(response);
    } catch(error){
        return res.status(400).json({error: error.message});
        console.log(error);
    }
}
module.exports= getVideogamesByIdHandler;