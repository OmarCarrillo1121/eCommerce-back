const { Banners } = require("../../db");

const getBanners = async () => {
  const bannersDB = await Banners.findAll({
    where: {
      banned: false,
    }
  });

  const bannersEstructurados = bannersDB.map((banner) => {
    return {
      id: banner.id,
      title: banner.title,
      logotypeUrl: banner.logotypeUrl,
      backgroundUrl: banner.backgroundUrl,
      banned: banner.banned,
    };
  });

  return bannersEstructurados;
};

module.exports = { getBanners };