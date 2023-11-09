const { getUsersDB } = require("../../controllers/Users/getUsersController");

const getUsersHandler = async (req, res) => {
  try {
    const usersData = await getUsersDB();
    res.status(200).json(usersData);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = getUsersHandler;
