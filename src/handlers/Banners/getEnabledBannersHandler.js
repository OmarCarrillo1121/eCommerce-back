const { getEnabledBannersController } = require("../../controllers/Banners/getEnabledBannersController");

const getEnabledBannersHandler = async (req, res) => {
    try {
        const banners = await getEnabledBannersController();
        res.status(200).json(banners);
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.log(error);
    }
};

module.exports = getEnabledBannersHandler;