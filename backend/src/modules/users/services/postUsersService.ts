import type { userType } from "../types/userType.js";
import { supabase } from "../../../../lib/db_conn.js";
import { usersMock, usersMockV2 } from "../mocks/userMock.js";

export class PostUsersService{

    async execute(): Promise<userType[]> {


        
        const {data, error} = await supabase
        .from("users_test")
        .insert(usersMockV2 )
        .select();

        if(error) {
          throw new Error(error.message)
            }
            
        return data



    }
}