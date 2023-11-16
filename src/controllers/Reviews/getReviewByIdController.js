const { Reviews } = require("../../db");

const getReviewByIdDB = async (reviewId) => {
  const review = await Reviews.findByPk(reviewId);

  if (!review) {
    throw new Error(`Review with ID ${reviewId} not found.`);
  }

  return review;
};

module.exports = { getReviewByIdDB };
