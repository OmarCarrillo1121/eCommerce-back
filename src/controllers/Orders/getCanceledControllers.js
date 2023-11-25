const { Orders } = require("../../db");
const sequelize = require('sequelize');
//⭐Traigo las ordenes que fueron marcadas como eliminadas/ Osea q tienen la propiedad deleted en TRUE:

const getCanceledControllers = async () => {
  try {
    const active = await Orders.findAll({
      where: {
        cancelled: true, // ⭐ Registros marcados como ELIMINADOS!
      },
    });
    return active;
  } catch (error) {
    console.error("Error:", error);
    throw error; 
  }
};

module.exports = getCanceledControllers;