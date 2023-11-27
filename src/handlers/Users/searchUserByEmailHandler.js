const searchUserByEmailController = require("../../controllers/Users/searchUserByEmailController");

const searchUserByEmailHandler = async (req, res) => {
  const { email } = req.query;
  try {
    if (email) {
      const response = await searchUserByEmailController(email);
      return res.status(200).json(response);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = searchUserByEmailHandler;
