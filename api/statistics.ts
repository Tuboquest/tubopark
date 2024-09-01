import { Fetch, Method } from "./fetch";

export class Stats {
  static getStatistics(): Promise<any> {
    console.log("test");
    return Fetch.call("/statistics", Method.GET);
  }
}
