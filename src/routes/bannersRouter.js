const { Router } = require("express");

// importamos handlers
const getAllBannersHandler = require("../handlers/Banners/getAllBannersHandler");
const getDeletedBannersHandler = require("../handlers/Banners/getDeletedBannersHandler");
const getEnabledBannersHandler = require("../handlers/Banners/getEnabledBannersHandler");
const createBannerHandler = require("../handlers/Banners/createBannerHandler");
const editBannerHandler = require("../handlers/Banners/editBannerHandler");
const deleteBannerHandler = require("../handlers/Banners/deleteBannerHandler")
const restoreBannerHandler = require("../handlers/Banners/restoreBannerHandler");

const bannersRouter = Router();

// definimos rutas
bannersRouter.get("/all", getAllBannersHandler);
bannersRouter.get("/deleted", getDeletedBannersHandler);
bannersRouter.get("/enabled", getEnabledBannersHandler);
bannersRouter.post("/", createBannerHandler);
bannersRouter.put("/update/:id", editBannerHandler);
bannersRouter.delete("/ban/:id", deleteBannerHandler);
bannersRouter.put("/unban/:id", restoreBannerHandler);

module.exports = bannersRouter;