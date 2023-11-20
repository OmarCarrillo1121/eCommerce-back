const { Banners } = require("../../db");

const getEnabledBannersController = async () => {
    const enabledBanners = await Banners.findAll({
        where: {
            banned: false,
        },
    });

    return enabledBanners;
};

module.exports = { getEnabledBannersController };