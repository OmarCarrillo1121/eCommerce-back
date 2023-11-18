const searchUserByNameController = require("../../controllers/Users/searchUserByNameController");

const searchUserByNameHandler = async (req, res) => {
    const { name } = req.query;
    try {
        if (name) {
            const response = await searchUserByNameController(name);
            return res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
        console.log(error);
    }
}

module.exports = searchUserByNameHandler;