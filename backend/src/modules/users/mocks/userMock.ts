import { randomInt } from "crypto";
import type { userType, userTypeV2 } from "../types/userType.js";
import { getRandomInt } from "../../../utils/funcUtils.js";

export const usersMock : userType[] = [{
    
    id: 1,
    username: "Alan",
    favorite_fruit: "Banana",
    age: 22

}];


export const usersMockV2 : userTypeV2[] = [{
    
    id: getRandomInt(1000, 5000),
    name: "TESTEV2",
    cpf: getRandomInt(1000000, 7000000),
    email: "testev2@test.com",
    phone: getRandomInt(1000000, 7000000),
    renda_mensal: getRandomInt(1750, 7500),
    

}];