/* const banUserController = require("../../controllers/Users/banUserController");

const banUserHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await banUserController.banUser(id);
    res.status(200).json({ message: result });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = banUserHandler;
 */
const { Users } = require("../../db");
const banUserController = require("../../controllers/Users/banUserController");
const { sendMail } = require("../../utils/email");

const banUserHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await banUserController.banUser(id);

    // Obtener el correo electrónico del usuario baneado
    const user = await Users.findByPk(id);
    const userEmail = user.email;

    // Enviar correo electrónico al usuario baneado
    const subject = "Usuario Baneado";
    const message = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <p style="font-size: 18px; color: #333;">¡Tu cuenta ha sido baneada!</p>
        <p style="font-size: 16px; color: #555;">Lamentamos informarte que tu cuenta en nuestro sitio ha sido baneada debido a violaciones de nuestros términos de servicio.</p>
        <p style="font-size: 16px; color: #555;">Si tienes alguna pregunta o crees que esto ha sido un error, por favor contáctanos.</p>
        <p style="font-size: 16px; color: #555;">Atentamente,</p>
        <p style="font-size: 16px; color: #555;">El equipo de GameStore </p>
      </div>
    `;

    await sendMail(userEmail, subject, message);

    res.status(200).json({ message: result });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = banUserHandler;
