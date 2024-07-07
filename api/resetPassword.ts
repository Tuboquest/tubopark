import { Fetch, Method } from "./fetch";

export class resetPassword {
  static sendMailPassCode(email: string): Promise<any> {
    return Fetch.call("/send-reset-code", Method.POST, {
      email: email,
    });
  }

  static confirmMailPassCode(email: string, code: string): Promise<any> {
    return Fetch.call("/confirm-reset-code", Method.POST, {
      email: email,
      code: code,
    });
  }

  static resetPassword(
    token: string,
    password: string,
    confirmPassword
  ): Promise<any> {
    return Fetch.call("/reset-password", Method.POST);
  }
}
