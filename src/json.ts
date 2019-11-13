import "isomorphic-unfetch";

import { GetAuthToken, GetApiKey, GetApiSecret } from "./auth";
import InstanceAuth from "./instanceauth";
import { HorsemanError, ReturnError } from "./error";

export let baseUri = "https://api.horseman.io";

export const setBaseUri = (baseuri: string) => {
  baseUri = baseuri;
};

export const json = async <T = any, R = {}>(
  path: string,
  method: string = "GET",
  body?: R,
  instanceAuthToken?: string
): Promise<{ data?: T; error?: HorsemanError }> => {
  let headers: any = {
    "Content-Type": "application/json"
  };

  if (instanceAuthToken || InstanceAuth.authToken()) {
    headers["x-instance-token"] = instanceAuthToken || InstanceAuth.authToken();
  } else {
    if (GetAuthToken()) {
      headers.Authorization = GetAuthToken();
    } else if (GetApiKey()) {
      headers["x-instance-key"] = GetApiKey();
    } else if (GetApiSecret()) {
      headers["x-instance-secret"] = GetApiSecret();
    }
  }

  try {
    let result = await fetch(`${baseUri}${path}`, {
      method,
      headers,
      body: JSON.stringify(body)
    });

    if (result.ok) {
      return { data: await result.json() };
    } else {
      const resp = await result.json();
      return resp;
    }
  } catch (e) {
    return ReturnError(e);
  }
};

export default json;
