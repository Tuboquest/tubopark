import { Fetch, Method } from "./fetch";

export class Auth {
  static login(email: string, password: string): Promise<any> {
    return Fetch.call("/login", Method.POST, {
      email: email,
      password: password,
    });
  }

  static register(
    email: string,
    password: string,
    password_confirmation: string
  ): Promise<any> {
    return Fetch.call("/register", Method.POST, {
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    });
  }

  static logout(): Promise<any> {
    return Fetch.call("/logout", Method.POST);
  }

  static setPasscode(passCode: string): Promise<any> {
    return Fetch.call("/set-passcode", Method.POST, {
      passCode: passCode,
    });
  }

  static verifyPasscode(token: string, passCode: string): Promise<any> {
    return Fetch.call("/verifyPasscode", Method.POST, {
      passCode: passCode,
    });
  }
}
