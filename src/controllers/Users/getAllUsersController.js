// Controller que trae todos los users (baneados y no baneados)
const { Users } = require("../../db");

const getAllUsersDB = async () => {
  const usersDB = await Users.findAll();

  const usersEstructurados = usersDB.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      image: user.image,
      address: user.address,
      rol: user.rol,
      banned: user.banned,
      isAdmin: user.isAdmin,
      google: user.google,
    };
  });

  return usersEstructurados;
};

module.exports = { getAllUsersDB };
