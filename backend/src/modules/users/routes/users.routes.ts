import { Router } from "express";
import { GetUsersController } from "../controllers/GetUserController.js";
import { PostUsersControllers } from "../controllers/PostUserController.js";

const usersRoutes = Router();

//GET
const getUsersController = new GetUsersController();

//POST 
const postUsersController = new PostUsersControllers();


usersRoutes.get("/post/users", postUsersController.handle);
usersRoutes.get("/users", getUsersController.handle);

export { usersRoutes }