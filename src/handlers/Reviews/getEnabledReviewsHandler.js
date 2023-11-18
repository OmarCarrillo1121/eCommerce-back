const {
  getEnabledReviewsController,
} = require("../../controllers/Reviews/getEnabledReviewsController");

const getEnabledReviewsHandler = async (req, res) => {
  try {
    const reviews = await getEnabledReviewsController();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = getEnabledReviewsHandler;
