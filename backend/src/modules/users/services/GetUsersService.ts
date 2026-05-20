import { usersMock } from "../mocks/userMock.js";
import type { userType } from "../types/userType.js";
import { supabase } from "../../../../lib/db_conn.js";


export class GetUsersService {


    

    async execute(): Promise<userType[]> {



        const {data, error} = await supabase
        .from("users_test")
        .select("*");

        if(error) {
          throw new Error(error.message)
            }
            
        return data

    }

}