const { Banners } = require("../../db");

const restoreBannerDB = async (id) => {
  const banner = await Banners.findByPk(id);

  // Verificamos si el ID ingresado es correcto
  if (!banner) {
    throw new Error(`Banner with ID ${id} not found.`);
  }

  // Si el ID ingresado es correcto, verificamos si ya esta baneado
  if (banner.banned === false) {
    return "Banner is not banned.";
  }

  // En caso de que no este baneado, lo baneamos
  await banner.update({ banned: false });

  return "Banner unbanned succesfully";
};

module.exports = { restoreBannerDB };