const { Banners } = require("../../db");

const editBannersController = async (id, updatedData) => {
    const bannerData = await Banners.findByPk(id);

    // Verificamos si el id ingresado es correcto
    if (!bannerData) {
        throw new Error(`Banner ID not found: ${id}`);
    }

    // Si es correcto, editamos su info recibida por body
    await bannerData.update(updatedData);
    return "Banner updated succesfully";
};

module.exports = editBannersController;