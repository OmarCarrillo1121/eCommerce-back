const { Orders } = require("../../db");
const sequelize = require('sequelize');
//Todas las ordenes  que tengan la propiedad cancelled en FALSE⭐!
const getOrderActiveController = async () => {
  const orderDB = await Orders.findAll({
    where: {
      cancelled: false,
    },
  });

  return orderDB;
};

module.exports =  getOrderActiveController ;
