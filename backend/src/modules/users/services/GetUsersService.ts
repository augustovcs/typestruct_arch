import { usersMock } from "../mocks/userMock.js";
import type { userTypeV2 } from "../types/userType.js";
import { supabase } from "../../../../lib/db_conn.js";


export class GetUsersService {


    

    async execute(): Promise<userTypeV2[]> {



        const {data, error} = await supabase
        .from("users_test")
        .select("*");

        if(error) {
          throw new Error(error.message)
            }

        console.log(data)
            
        return data || []

    }

}