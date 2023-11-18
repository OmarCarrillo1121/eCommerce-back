const { Router } = require("express");

// importamos handlers
const getGameReviewsHandler = require("../handlers/Reviews/getGameReviewsHandler");
const getReviewByIdHandler = require("../handlers/Reviews/getReviewByIdHandler");
const getAllReviewsHandler = require("../handlers/Reviews/getAllReviewsHandler");
const getDisabledReviewsHandler = require("../handlers/Reviews/getDisabledReviewsHandler");
const getEnabledReviewsHandler = require("../handlers/Reviews/getEnabledReviewsHandler");
const getUserReviewsHandler = require("../handlers/Reviews/getUserReviewsHandler");
const createReviewHandler = require("../handlers/Reviews/createReviewHandler");
const banReviewHandler = require("../handlers/Reviews/banReviewHandler");
const unbanReviewHandler = require("../handlers/Reviews/unbanReviewHandler");
const editReviewHandler = require("../handlers/Reviews/editReviewHandler");

const reviewsRouter = Router();

// definimos rutas
reviewsRouter.get("/all", getAllReviewsHandler);
reviewsRouter.get("/disabled", getDisabledReviewsHandler);
reviewsRouter.get("/enabled", getEnabledReviewsHandler);
reviewsRouter.get("/:reviewId", getReviewByIdHandler);
reviewsRouter.get("/videogame/:id", getGameReviewsHandler);
reviewsRouter.get("/user/:id", getUserReviewsHandler);
reviewsRouter.post("/", createReviewHandler);
reviewsRouter.delete("/ban/:id", banReviewHandler);
reviewsRouter.put("/unban/:id", unbanReviewHandler);
reviewsRouter.put("/update/:id", editReviewHandler);

module.exports = reviewsRouter;
