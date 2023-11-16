const { getGameReviewsController } = require("../../controllers/Reviews/getGameReviewsController");

const getGameReviewsHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const reviews = await getGameReviewsController(id);

    res.status(200).json(reviews);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = getGameReviewsHandler;
