const { getUserReviewsController } = require("../../controllers/Reviews/getUserReviewsController");

const getUserReviewsHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const reviews = await getUserReviewsController(id);
        res.status(200).json(reviews);
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.log(error);
    }
};

module.exports = getUserReviewsHandler;