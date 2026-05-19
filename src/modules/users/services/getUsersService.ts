import { usersMock } from "../mocks/userMock";
import type { userType } from "../types/userType";


export class GetUsersService {

    execute(): userType[] {
        return usersMock;
    }
}