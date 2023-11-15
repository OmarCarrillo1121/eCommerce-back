const { Reviews } = require("../../db");

const unbanReview = async (id) => {
  const review = await Reviews.findByPk(id);

  // Verificamos si el ID ingresado es correcto
  if (!review) {
    throw new Error(`Review with ID ${id} not found.`);
  }

  // Si el ID ingresado es correcto, verificamos si la review ya esta baneada
  if (review.banned === false) {
    return "Review is not banned.";
  }

  // En caso de que no este baneado, lo baneamos
  await review.update({ banned: false });

  return "Review unbanned succesfully.";
};

module.exports = { unbanReview };
