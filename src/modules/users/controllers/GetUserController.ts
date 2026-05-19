import type {Request, Response} from "express";
import { GetUsersService } from "../services/GetUsersService";

export class GetUsersController {

    async handle(
        req: Request,
        res: Response
    ) {

        const service = new GetUsersService();
        const users = service.execute();

        return res.json(users);

    }

}