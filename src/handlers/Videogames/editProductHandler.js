const editProductController =require("../../controllers/Videogames/editProductController");

//⭐Handler Edit:
const editProductHandler = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
  
    try {
      const result = await editProductController(id, updatedData);
      res.status(200).json({ message: result });
    } catch (error) {
      res.status(400).json({ error: error.message });
      console.log(error);
    }
  };
  
  module.exports = editProductHandler;