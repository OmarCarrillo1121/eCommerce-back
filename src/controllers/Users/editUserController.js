// Controller que nos permite editar los datos de un user obtenido por ID
const { Users } = require("../../db");

const editUserController = async (id, updatedData) => {
  const userData = await Users.findByPk(id);

  // Verificamos si el ID ingresado es correcto
  if (!userData) {
    throw new Error(`User ID not found: ${id}`);
  }

  // Si es correcto, editamos su info recibida por body (chequear el handler)
  await userData.update(updatedData);
  return "Successfully edited user data";
};

module.exports = editUserController;
