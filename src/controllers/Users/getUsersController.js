// Controller que trae users donde banned = false
const { Users } = require("../../db");

const getUsersDB = async () => {
  const usersDB = await Users.findAll({
    where: {
      banned: false,
    },
  });

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

module.exports = { getUsersDB };
