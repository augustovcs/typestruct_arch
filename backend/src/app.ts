import express from "express"
import {usersRoutes} from "./modules/users/routes/users.routes.js"

const app = express();

app.use(express.json());
app.use(usersRoutes);

export { app };