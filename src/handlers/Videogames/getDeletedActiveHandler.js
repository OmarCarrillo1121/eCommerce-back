const  getActiveVideogames  = require("../../controllers/Videogames/getDeletedActiveController");

//⭐Active handler:
const getActiveVideogamesHandler = async (req, res) => {
    try {
      const activeVideogames = await getActiveVideogames(); 
      res.status(200).json(activeVideogames); // lista de  marcados como eliminados 
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message});
    }
  };
  
  module.exports = getActiveVideogamesHandler;