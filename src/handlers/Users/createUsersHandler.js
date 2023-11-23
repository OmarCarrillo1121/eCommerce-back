const { sendMail } = require("../../utils/email");
const {
  createUsersDB,
} = require("../../controllers/Users/createUsersController");

const createUsersHandler = async (req, res) => {
  const { name, email, password, image, address } = req.body;
  try {
    const createUser = await createUsersDB(
      name,
      email,
      password,
      image,
      address
    );

    const message = `
  <div style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px; border-radius: 10px; max-width: 600px; margin: 0 auto;">
    <h1 style="color: #333;">Bienvenido/a ${name} a nuestro sitio</h1>
    <p style="color: #555; font-size: 16px;">Gracias por registrarte en nuestro increíble sitio. Estamos emocionados de tenerte con nosotros.</p>
    <img src="https://image.freepik.com/vetores-gratis/modelo-de-logotipo-de-videogame-com-joystick_23-2147820934.jpg" alt="Imagen de ejemplo" style="max-width: 100%; border-radius: 8px; margin-top: 20px;">
    <p style="color: #555; font-size: 16px;">¡Esperamos que disfrutes de tu tiempo en nuestra plataforma!</p>
  </div>
`;

    await sendMail(email, "Bienvenido/a", message);

    res.status(201).json(createUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = createUsersHandler;
