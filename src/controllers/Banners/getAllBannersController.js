const { Banners } = require("../../db");

const getAllBannersDB = async () => {
  const allBanners = await Banners.findAll();

  return allBanners;
};

module.exports = { getAllBannersDB };