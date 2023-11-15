const { Banners } = require("../../db");

const deleteBannerDB = async (id) => {
  const banner = await Banners.findByPk(id);

  // Verificamos si el ID ingresado es correcto
  if (!banner) {
    throw new Error(`Banner with ID ${id} not found.`);
  }

  // Si el ID ingresado es correcto, verificamos si ya esta baneado
  if (banner.banned === true) {
    return "Banner is already banned.";
  }

  // En caso de que no este baneado, lo baneamos
  await banner.update({ banned: true });

  return "Banner banned succesfully";
};

module.exports = { deleteBannerDB };
