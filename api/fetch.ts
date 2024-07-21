import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export enum Method {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export class Fetch {
  private static baseURL: string = process.env.EXPO_PUBLIC_BASE_URL ?? "";
  private static token: string = "";

  static setToken(token: string) {
    this.token = token;
  }

  private static getUrl(
    endpoint: string,
    method: Method,
    body?: { [key: string]: string }
  ): string {
    if (!this.baseURL) {
      throw new Error(
        "Base URL is not defined. Please check your environment configuration."
      );
    }

    let baseUrl = this.baseURL.replace("[]", endpoint);

    // Add any additional query parameters to the URL here if needed
    // if (endpoint === "/batch") {
    //   return `${baseUrl}&urls=${body?.urls}`;
    // }

    // if (body && body.idMembers) {
    //   baseUrl += `&idMembers=${body.idMembers}`;
    //   delete body.idMembers;
    // }

    // const hasQuery = body && Object.keys(body).length > 0;
    // if (hasQuery) {
    //   baseUrl += `&${new URLSearchParams(body || {}).toString()}`;
    // }

    console.log(`Fetching: ${baseUrl}`);

    return baseUrl;
  }

  static async call(
    endpoint: string,
    method: Method = Method.GET,
    body?: { [key: string]: string }
  ) {
    const url = this.getUrl(endpoint, method, body);
    if (!url) {
      throw new Error("Cannot load an empty URL");
    }

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // Add authorization header if token is available
        ...(this.token ? { Authorization: `Bearer ${this.token}` } : {}),
      },
      body: method !== Method.GET ? JSON.stringify(body) : undefined,
    });

    try {
      return await response.json();
    } catch (e) {
      console.error(`Error during fetch: ${e}`);
      return null;
    }
  }
}
