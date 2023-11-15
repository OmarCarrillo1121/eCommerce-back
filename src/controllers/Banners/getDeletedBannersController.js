const { Banners } = require("../../db");

const getDeletedBannersDB = async () => {
  const bannersDB = await Banners.findAll({
    where: {
      banned: true,
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

module.exports = { getDeletedBannersDB };