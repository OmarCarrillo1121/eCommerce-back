const { Reviews } = require("../../db");

const getEnabledReviewsController = async () => {
  const enabledReviews = await Reviews.findAll({
    where: {
      banned: false,
    },
  });

  return enabledReviews;
};

module.exports = { getEnabledReviewsController };
