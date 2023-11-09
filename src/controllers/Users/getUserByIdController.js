// Controller que nos trae un user por su ID
const { Users } = require("../../db");

const getUserByIdController = async (id) => {
  const userDB = await Users.findByPk(id);

  if (!userDB) {
    throw new Error(`User ID not found: ${id}`);
  }
  return userDB;
};

module.exports = { getUserByIdController };
