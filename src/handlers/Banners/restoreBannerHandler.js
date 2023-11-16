const restoreBannerController = require("../../controllers/Banners/restoreBannerController");

const restoreBannerHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await restoreBannerController.restoreBannerDB(id);
        res.status(200).json({ message: result });
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.log(error);
    }
};

module.exports = restoreBannerHandler;