const { Reviews } = require("../../db");

const getUserReviewsController = async (id) => {
  const userReviews = await Reviews.findAll({
    where: {
      userId: id,
    },
  });

  return userReviews;
};

module.exports = { getUserReviewsController };
