import { Fetch, Method } from "./fetch";

export class Profile {
  static getProfile(): Promise<any> {
    return Fetch.call("/profile", Method.GET);
  }

  static updateProfile(data: { [key: string]: any }): Promise<any> {
    return Fetch.call("/profile", Method.PUT, data);
  }
}
