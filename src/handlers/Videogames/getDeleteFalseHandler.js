const {getDeletedFalse} = require("../../controllers/Videogames/getDeletedFalseController");

//⭐ Handler -> Delete en FALSE:
const getDeleteFalseHandler = async(req, res)=>{
    try {
        const activeProducts = await getDeletedFalse(); 
        res.status(200).json(activeProducts); 
        console.log(activeProducts);// registros no eliminados 
      } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message});
      };
}
module.exports=getDeleteFalseHandler;