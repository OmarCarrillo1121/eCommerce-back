const { getAllReviewsDB } = require("../../controllers/Reviews/getAllReviewsController");

const getAllReviewsHandler = async (req, res) => {
  try {
    const reviews = await getAllReviewsDB();

    res.status(200).json(reviews);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = getAllReviewsHandler;
