import { Fetch, Method } from "./fetch";

export class Camera {
  static camera(): Promise<any> {
    return Fetch.call("/camera");
  }
}
