const { Reviews } = require("../../db");

const editReviewController = async (id, updatedData) => {
  const reviewData = await Reviews.findByPk(id);

  // Verificamos si  el ID ingresado es correcto
  if (!reviewData) {
    throw new Error(`Review with ID ${id} not found.`);
  }

  // Si es correcto, editamos su info recibida por body
  await reviewData.update(updatedData);
  return "Succesfully edited review data";
};

module.exports = editReviewController;
