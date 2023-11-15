const { Banners } = require("../../db");

const createBannerDB = async (title, logotypeUrl, backgroundUrl) => {
  const newBanner = await Banners.create({
    title,
    logotypeUrl,
    backgroundUrl,
  });

  return newBanner;
};

module.exports = { createBannerDB };