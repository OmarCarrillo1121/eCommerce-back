// Controller que nos permite crear un user
const { Users } = require("../../db");
const bcrypt = require('bcryptjs');
const { sendMail } = require("../../utils/email");

const createUsersDB = async (name, email, password, image, address) => {
  // Verificamos si el usuario ya existe por su email
  const existingUser = await Users.findOne({ where: { email } });

  const usernameVerification = await Users.findOne({
    where: {
      name: name,
    },
  });

  if (existingUser) {
    return res
      .status(STATUS_ERROR)
      .json({ error: "El correo electrónico ya existe" });
  }

  if (usernameVerification)
    return res.status(STATUS_ERROR).json({ error: "El usuario ya existe" });

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const userData = {
    name,
    email,
    password: hashedPassword,
    image,
    address,
  };

  // Si el usuario no existe, lo creamos
  const newUser = await Users.create(userData);

  const message = `
  <div style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px; border-radius: 10px; max-width: 600px; margin: 0 auto;">
    <h1 style="color: #333;">Bienvenido/a ${name} a nuestro sitio</h1>
    <p style="color: #555; font-size: 16px;">Gracias por registrarte en nuestro increíble sitio. Estamos emocionados de tenerte con nosotros.</p>
    <img src="https://image.freepik.com/vetores-gratis/modelo-de-logotipo-de-videogame-com-joystick_23-2147820934.jpg" alt="Imagen de ejemplo" style="max-width: 100%; border-radius: 8px; margin-top: 20px;">
    <p style="color: #555; font-size: 16px;">¡Esperamos que disfrutes de tu tiempo en nuestra plataforma!</p>
  </div>
`;

  await sendMail(email, "Bienvenido/a", message);

  return newUser;
};

module.exports = { createUsersDB };
