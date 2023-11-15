const {
  getBannedUsersDB,
} = require("../../controllers/Users/getBannedUsersController");

const getBannedUsersHandler = async (req, res) => {
  try {
    const usersData = await getBannedUsersDB();
    res.status(200).json(usersData);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = getBannedUsersHandler;
