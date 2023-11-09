const {
  getUserByIdController,
} = require("../../controllers/Users/getUserByIdController");

const getUserByIdHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await getUserByIdController(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = getUserByIdHandler;
