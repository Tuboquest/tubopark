import { Fetch, Method } from "./fetch";

export class Notifications {
  static getNotifications(): Promise<any> {
    return Fetch.call("/notifications", Method.GET);
  }
}
