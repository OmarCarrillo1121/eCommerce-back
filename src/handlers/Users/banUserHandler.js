const banUserController = require("../../controllers/Users/banUserController");

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
