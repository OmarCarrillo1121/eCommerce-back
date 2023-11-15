const {
  createBannerDB,
} = require("../../controllers/Banners/createBannerController");

const createBannerHandler = async (req, res) => {
  const { title, logotypeUrl, backgroundUrl } = req.body;

  try {
    const createBanner = await createBannerDB(title, logotypeUrl, backgroundUrl);
    res.status(201).json(createBanner);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = createBannerHandler;
