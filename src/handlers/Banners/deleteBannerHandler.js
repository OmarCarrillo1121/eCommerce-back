const deleteBannerController = require("../../controllers/Banners/deleteBannerController");

const deleteBannerHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deleteBannerController.deleteBannerDB(id);
    res.status(200).json({ message: result });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = deleteBannerHandler;
