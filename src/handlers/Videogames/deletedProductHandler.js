const  deletedProductController = require("../../controllers/Videogames/deletedProductController");

//⭐Delete Handler:
const deletedProductHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deletedProductController.deletedProduct(id);
    res.status(200).json({ message: result });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = deletedProductHandler;