const { getReviewByIdDB } = require("../../controllers/Reviews/getReviewByIdController");

const getReviewByIdHandler = async (req, res) => {
  const { reviewId } = req.params;

  try {
    const review = await getReviewByIdDB(reviewId);

    res.status(200).json(review);
  } catch (error) {
    res.status(404).json({ error: error.message });
    console.error(error);
  }
};

module.exports = getReviewByIdHandler;
