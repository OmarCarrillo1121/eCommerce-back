const {
  getBanners,
} = require("../../controllers/Banners/getBannersController");

const getBannersHandler = async (req, res) => {
  try {
    const bannerData = await getBanners();
    res.status(200).json(bannerData);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = getBannersHandler;
