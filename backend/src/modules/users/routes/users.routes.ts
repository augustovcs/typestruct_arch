import { Router } from "express";
import { GetUsersController } from "../controllers/GetUserController.js";

const usersRoutes = Router();

const getUsersController= new GetUsersController();

usersRoutes.get("/users", getUsersController.handle);

export { usersRoutes }