const {
  getDisabledReviewsController,
} = require("../../controllers/Reviews/getDisabledReviewsController");

const getDisabledReviewsHandler = async (req, res) => {
  try {
    const reviews = await getDisabledReviewsController();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = getDisabledReviewsHandler;
