const {
    getDeletedBannersDB,
  } = require("../../controllers/Banners/getDeletedBannersController");
  
  const getDeletedBannersHandler = async (req, res) => {
    try {
      const bannerData = await getDeletedBannersDB();
      res.status(200).json(bannerData);
    } catch (error) {
      res.status(400).json({ error: error.message });
      console.log(error);
    }
  };
  
  module.exports = getDeletedBannersHandler;
  