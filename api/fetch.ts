export enum Method {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export class Fetch {
  static getUserData(): any {
    throw new Error("Method not implemented.");
  }
  private static baseURL: string = process.env.EXPO_PUBLIC_BASE_URL ?? "";
  private static token: string = "";

  static setToken(token: string) {
    this.token = token;
  }

  static getUser() {
    return this.call("/me", Method.GET);
  }

  static rotateDisc(angle: number) {
    return this.call("/c/rotate", Method.POST, {
      angle: angle.toString(),
      date: new Date().toDateString(),
    });
  }

  static getDisks() {}

  private static getUrl(endpoint: string): string {
    if (!this.baseURL) {
      throw new Error(
        "Base URL is not defined. Please check your environment configuration.",
      );
    }
    let baseUrl = this.baseURL + endpoint;
    return baseUrl;
  }

  /**
   * Fetch.call("/users", Method.GET)
   * Fetch.call("/users", Method.POST, { name: "John" })
   */
  static async call(
    endpoint: string,
    method: Method = Method.GET,
    body?: { [key: string]: string },
  ) {
    const url = this.getUrl(endpoint);

    console.log(url);

    if (!url) {
      throw new Error("Cannot load an empty URL");
    }

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Cache-Control": "no-cache",
        Authorization: `Bearer ${this.token}`,
      },
      body: method !== Method.GET ? JSON.stringify(body) : undefined,
    });

    // console.log("response,", response);
    // console.log(await response.json());

    try {
      let r = await response.json();
      console.log(r);
      return r;
    } catch (e) {
      console.error(`Error during fetch: ${e}`);
      return null;
    }
  }
}
