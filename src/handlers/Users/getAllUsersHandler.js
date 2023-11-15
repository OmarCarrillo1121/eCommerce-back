const {
  getAllUsersDB
} = require("../../controllers/Users/getAllUsersController");

const getAllUsersHandler = async (req, res) => {
  try {
    const userData = await getAllUsersDB();
    res.status(200).json(userData);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = getAllUsersHandler;
