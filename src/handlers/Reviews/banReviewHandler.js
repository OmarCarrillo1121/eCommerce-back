const banReviewController = require("../../controllers/Reviews/banReviewController");

const banReviewHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await banReviewController.banReview(id);
    res.status(200).json({ message: result });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = banReviewHandler;
