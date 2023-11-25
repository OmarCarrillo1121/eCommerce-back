const  getCanceledControllers = require('../../controllers/Orders/getCanceledControllers');


//⭐Active Canceled handler:
const getCanceledHandler = async (req, res) => {
    try {
      const activeCanceled = await getCanceledControllers(); 
      res.status(200).json(activeCanceled); // lista de  marcados como eliminados 
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message});
    }
  };
  
  module.exports = getCanceledHandler;