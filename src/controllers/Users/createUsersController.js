// Controller que nos permite crear un user
const { Users } = require("../../db");

const createUsersDB = async (name, email, password, image, address) => {
  // Verificamos si el usuario ya existe por su email
  const existingUser = await Users.findOne({ where: { email } });

  if (existingUser) {
    return "User with this email already exists.";
  }

  // Si el usuario no existe, lo creamos
  const newUser = await Users.create({
    name,
    email,
    password,
    image,
    address,
  });
  return newUser;
};

module.exports = { createUsersDB };
