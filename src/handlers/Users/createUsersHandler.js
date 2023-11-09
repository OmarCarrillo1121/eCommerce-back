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
    res.status(201).json(createUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = createUsersHandler;
