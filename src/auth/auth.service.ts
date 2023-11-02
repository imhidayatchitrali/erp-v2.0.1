import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    signup() {
        return { msg: "I am singup" }
    }
    signin() {

        return { msg: "I am singin" }
    }
}