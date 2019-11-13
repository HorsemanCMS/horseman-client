import 'isomorphic-unfetch';

import {GetAuthToken, GetApiKey, GetApiSecret} from './auth';
import InstanceAuth from './instanceauth';
import { HorsemanError } from './error';

export let baseUri = 'https://api.horseman.io';

export const setBaseUri = (baseuri: string) => {
    baseUri = baseuri;
}

export const json = async <T = any, R = {}>(path: string, method: string = 'GET', body?: R, instanceAuthToken?: string): Promise<T | HorsemanError> => {

    let headers: any = {
        'Content-Type': 'application/json'
    }

    if(instanceAuthToken || InstanceAuth.authToken()) {
        headers["x-instance-token"] = instanceAuthToken || InstanceAuth.authToken();
    } else {
        if(GetAuthToken()) {
            headers.Authorization = GetAuthToken();
        } else if(GetApiKey()) {
            headers["x-instance-key"] = GetApiKey();
        } else if(GetApiSecret()) {
            headers["x-instance-secret"] = GetApiSecret();
        }
    }

    try {
        let result = await fetch(`${baseUri}${path}`, {
            method,
            headers,
            body: JSON.stringify(body)
        });

        if(result.ok) {
            return <T>(await result.json());
        } else {
            const error = await result.json()
            if(error?.status) {
                return <HorsemanError>(error);
            }
        }
    } catch(e) {
        console.log(e);
        return {
            error: {
                message: e.message,
                status: 0
            }
        };
    }
}

export default json;