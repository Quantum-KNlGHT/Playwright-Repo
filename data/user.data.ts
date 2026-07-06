import { User } from "./user.type";

export function getUserData(): User{
    return {
        emailaddress: process.env.Email,
        password: process.env.Password
    }

}