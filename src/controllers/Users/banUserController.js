// Controller que nos permite banear (deshabilitar) un user obtenido por ID
const { Users } = require("../../db");

const banUser = async (id) => {
  const user = await Users.findByPk(id);

  // Verificamos si el ID ingresado es correcto
  if (!user) {
    throw new Error(`User ID not found: ${id}`);
  }

  // Si el ID ingresado es correcto, verificamos si el usuario ya estaba baneado
  if (user.banned === true) {
    return "User is already banned.";
  }

  // En caso de que no este baneado, lo baneamos
  await user.update({ banned: true });

  return "User banned succesfully.";
};

module.exports = { banUser };
