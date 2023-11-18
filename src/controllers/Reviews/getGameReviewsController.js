const { Reviews } = require("../../db");

const getGameReviewsController = async (id) => {
  const allReviews = await Reviews.findAll({
    where: {
      videogameId: id,
      banned: false,
    },
  });

  return allReviews;
};

module.exports = { getGameReviewsController };