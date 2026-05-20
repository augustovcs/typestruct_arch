import type {Request, Response} from "express";
import { GetUsersService } from "../services/GetUsersService.js";

export class GetUsersController {

    async handle(
        req: Request,
        res: Response
    ) {

        const service = new GetUsersService();
        const users =  await service.execute();

        return res.status(200).json(users);

    }

}