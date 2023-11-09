const putDeleteActiveController = require("../../controllers/Videogames/putDeleteActiveController");

//⭐put:
const putProductHandler = async (req, res) => {
    const { id } = req.params;
  
    try {
      const result = await putDeleteActiveController.putDeleteActive(id);
      res.status(200).json({ message: result });
    } catch (error) {
      res.status(400).json({ error: error.message });
      console.log(error);
    }
  };
  
  module.exports = putProductHandler;