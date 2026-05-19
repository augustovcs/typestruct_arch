import type {Request, Response} from "express";
import { GetUsersService } from "../services/GetUsersService";

export class GetUsersController {

    async handle(
        req: Request,
        res: Response
    ) {

        const service = new GetUsersService();
        const users = service.execute();

        return res.status(200).json(users);

    }

}