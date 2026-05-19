import { usersMock } from "../mocks/userMock.js";
import type { userType } from "../types/userType.js";


export class GetUsersService {

    execute(): userType[] {
        return usersMock;
    }
}