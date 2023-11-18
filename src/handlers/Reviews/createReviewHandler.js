const {
  createReviewDB,
} = require("../../controllers/Reviews/createReviewController");

const createReviewHandler = async (req, res) => {
  const { content, rating, userId, videogameId } = req.body;

  try {
    const newReview = await createReviewDB(
      content,
      rating,
      userId,
      videogameId
    );
    res.status(201).json(newReview);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = createReviewHandler;
