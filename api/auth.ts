import { Fetch, Method } from "./fetch";

export class Auth {

    static login(email : string, password : string) : Promise<any> {
        return Fetch.call("/auth/login", Method.POST);
    }

    static register(email : string, password : string) : Promise<any> {
        return Fetch.call("/auth/register", Method.POST);
    }

    static logout() : Promise<any> {
        return Fetch.call("/auth/logout", Method.POST);
    }

    static forgotPassword(email : string) : Promise<any> {
        return Fetch.call("/auth/forgot-password", Method.POST);
    }
}