const { Reviews } = require("../../db");

const createReviewDB = async (content, rating, userId, videogameId) => {
  const newReview = await Reviews.create({
    content,
    rating,
    userId: userId,
    videogameId: videogameId,
  });

  return newReview;
};

module.exports = { createReviewDB };
