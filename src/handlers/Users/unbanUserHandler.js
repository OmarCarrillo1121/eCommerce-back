const unbanUserController = require("../../controllers/Users/unbanUserController");

const unbanUserHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await unbanUserController.unbanUser(id);
    res.status(200).json({ message: result });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = unbanUserHandler;
