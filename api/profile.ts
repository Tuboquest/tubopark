import { Fetch, Method } from "./fetch";

export class Profile {
  static getProfile(): Promise<any> {
    return Fetch.call("/profile", Method.GET);
  }

  static updateProfile(data: { [key: string]: any }): Promise<any> {
    const defaultData = {
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      imageUri: "",
      ...data,
    };
    return Fetch.call("/profile", Method.PUT, defaultData);
  }
}
