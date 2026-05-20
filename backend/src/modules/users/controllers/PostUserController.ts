import type {Request, Response} from "express";
import { NOTIMP } from "node:dns";
import { setUncaughtExceptionCaptureCallback } from "node:process";


export class PostUsersControllers {

    async handle (
        req: Request,
        res: Response
    )
    {
        const service;
        const users = await service.execute();

        return res.status(200).json(users)
    }
}