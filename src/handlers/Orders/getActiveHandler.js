const getOrderActiveController = require("../../controllers/Orders/getOrderActiveController");


//⭐ Handler -> Delete en FALSE:
const getActiveHandler = async(req, res)=>{
    try {
        const activeOrders = await getOrderActiveController(); 
        res.status(200).json(activeOrders); 
        console.log(activeOrders);// registros no cancelados!!!⭐
      } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message});
      };
}
module.exports= getActiveHandler;