import 'isomorphic-unfetch';

import { AUTHTOKEN, API_KEY, API_SECRET } from './auth';

export let baseUri = 'https://api.horseman.io';

export const setBaseUri = (baseuri: string) => {
    baseUri = baseuri;
}

export const json = async <T = any, R = {}>(path: string, method: string = 'GET', body?: R) => {

    let headers: any = {
        'Content-Type': 'application/json'
    }

    if(AUTHTOKEN) {
        headers.Authorization = AUTHTOKEN;
    } else if(API_KEY) {
        headers["x-instance-key"] = API_KEY;
    } else if(API_SECRET) {
        headers["x-instance-secret"] = API_SECRET;
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