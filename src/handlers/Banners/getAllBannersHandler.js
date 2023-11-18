const { getAllBannersDB } = require("../../controllers/Banners/getAllBannersController");

const getAllBannersHandler = async (req, res) => {
  try {
    const banners = await getAllBannersDB();
    res.status(200).json(banners);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = getAllBannersHandler;