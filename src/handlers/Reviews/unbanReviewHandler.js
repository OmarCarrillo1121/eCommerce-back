const unbanReviewController = require("../../controllers/Reviews/unbanReviewController");

const unbanReviewHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await unbanReviewController.unbanReview(id);
    res.status(200).json({ message: result });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = unbanReviewHandler;
