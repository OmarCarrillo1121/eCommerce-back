const {
  createUsersDB,
} = require("../../controllers/Users/createUsersController");

const createUsersHandler = async (req, res) => {
  const { name, email, password, image, address, google } = req.body;

  //VALIDACIONES
  try {
    const createUser = await createUsersDB(
      name,
      email,
      password,
      image,
      address,
      google
    );
    res.status(201).json(createUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = createUsersHandler;
