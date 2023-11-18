const editReviewController = require("../../controllers/Reviews/editReviewController");

const editReviewHandler = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const result = await editReviewController(id, updatedData);
    res.status(200).json({ message: result });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = editReviewHandler;
