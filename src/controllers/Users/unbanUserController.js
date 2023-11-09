// Controller que nos permite desbanear (habilitar) un user obtenido por ID
const { Users } = require("../../db");

const unbanUser = async (id) => {
  const user = await Users.findByPk(id);

  // Verificamos si el ID ingresado es correcto
  if (!user) {
    throw new Error(`User ID not found: ${id}`);
  }

  // Si el ID ingresado es correcto, verificamos si el usuario ya estaba desbaneado
  if (user.banned === false) {
    return "User is not banned.";
  }

  // En caso de que este baneado, lo desbaneamos
  await user.update({ banned: false });

  return "User unbanned succesfully.";
};

module.exports = { unbanUser };
