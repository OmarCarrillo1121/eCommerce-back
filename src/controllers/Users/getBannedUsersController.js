// Controller que trae users donde banned = true
const { Users } = require("../../db");

const getBannedUsersDB = async () => {
  const usersDB = await Users.findAll({
    where: {
      banned: true,
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
    };
  });

  return usersEstructurados;
};

module.exports = { getBannedUsersDB };
