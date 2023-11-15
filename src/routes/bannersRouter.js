const { Router } = require("express");

// importamos handlers
const getBannersHandler = require("../handlers/Banners/getBannersHandler");
const getDeletedBannersHandler = require("../handlers/Banners/getDeletedBannersHandler");
const createBannerHandler = require("../handlers/Banners/createBannerHandler");
const editBannerHandler = require("../handlers/Banners/editBannerHandler");
const deleteBannerHandler = require("../handlers/Banners/deleteBannerHandler")
const restoreBannerHandler = require("../handlers/Banners/restoreBannerHandler");

const bannersRouter = Router();

// definimos rutas
bannersRouter.get("/", getBannersHandler);
bannersRouter.get("/deleted", getDeletedBannersHandler);
bannersRouter.post("/", createBannerHandler);
bannersRouter.put("/update/:id", editBannerHandler);
bannersRouter.delete("/ban/:id", deleteBannerHandler);
bannersRouter.put("/unban/:id", restoreBannerHandler);

module.exports = bannersRouter;