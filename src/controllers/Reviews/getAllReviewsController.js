const { Reviews } = require("../../db");

const getAllReviewsDB = async () => {
  const allReviews = await Reviews.findAll();

  return allReviews;
};

module.exports = { getAllReviewsDB };
