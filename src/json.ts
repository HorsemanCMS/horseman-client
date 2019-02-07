import 'isomorphic-unfetch';

import {GetAuthToken, GetApiKey, GetApiSecret} from './auth';
import InstanceAuth from './instanceauth';

export let baseUri = 'https://api.horseman.io';

export const setBaseUri = (baseuri: string) => {
    baseUri = baseuri;
}

export const json = async <T = any, R = {}>(path: string, method: string = 'GET', body?: R) => {

    let headers: any = {
        'Content-Type': 'application/json'
    }

    if(GetAuthToken()) {
        headers.Authorization = GetAuthToken();
    } else if(GetApiKey()) {
        headers["x-instance-key"] = GetApiKey();
    } else if(GetApiSecret()) {
        headers["x-instance-secret"] = GetApiSecret();
    }

    if(InstanceAuth.authToken()) {
        headers["x-instance-token"] = InstanceAuth.authToken();
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
            return false;
        }
    } catch(e) {
        console.log(e);
        throw e;
    }
}

export default json;