const { Videogames } = require("../../db");
const sequelize = require('sequelize');

//⭐Traigo los productos que fueron marcados como eliminados/ Osea q tienen la propiedad deleted en TRUE:

  const getActiveVideogames = async () => {
    try {
      const active = await Videogames.findAll({
        where: {
          deleted: true, // ⭐ Registros marcados como ELIMINADOS!
        },
      });
      return active;
    } catch (error) {
      console.error("Error:", error);
      throw error; 
    }
  };
  
  module.exports = getActiveVideogames;