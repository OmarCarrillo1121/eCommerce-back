const { Router } = require("express");

// importamos handlers
const getUsersHandler = require("../handlers/Users/getUsersHandler");
const getAllUsersHandler = require("../handlers/Users/getAllUsersHandler");
const getBannedUsersHandler = require("../handlers/Users/getBannedUsersHandler");
const searchUserByNameHandler = require("../handlers/Users/searchUserByNameHandler");
const getUserByIdHandler = require("../handlers/Users/getUserByIdHandler");
const createUsersHandler = require("../handlers/Users/createUsersHandler");
const banUserHandler = require("../handlers/Users/banUserHandler");
const unbanUserHandler = require("../handlers/Users/unbanUserHandler");
const editUserHandler = require("../handlers/Users/editUserHandler");
const searchUserByEmailHandler = require("../handlers/Users/searchUserByEmailHandler");

const usersRouter = Router();

// definimos rutas
usersRouter.get("/", getUsersHandler);
usersRouter.get("/search/name", searchUserByNameHandler);
usersRouter.get("/search/email", searchUserByEmailHandler);
usersRouter.get("/all", getAllUsersHandler);
usersRouter.get("/disabled", getBannedUsersHandler);
usersRouter.get("/:id", getUserByIdHandler);
usersRouter.post("/", createUsersHandler);
usersRouter.delete("/:id", banUserHandler);
usersRouter.put("/:id/restore", unbanUserHandler);
usersRouter.put("/:id", editUserHandler);

module.exports = usersRouter;
