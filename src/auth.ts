declare var localStorage: any;
import json from './json';
import { IUser } from './interfaces';
import { ReturnError } from './error';

let API_KEY: string;
let API_SECRET: string;
let AUTHTOKEN: string;
let AUTHENTICATED: boolean = false;

export const GetApiKey = () => {
    return API_KEY;
}

export const GetApiSecret = () => {
    return API_SECRET;
}

export const GetAuthToken = () => {
    return AUTHTOKEN;
}

export const isAuthenticated = () => {
    return AUTHENTICATED;
}

export const SetApiKey = (key: string, secret?: string) => {
    AUTHTOKEN = null;
    API_KEY = key;
    API_SECRET = secret;
}

export const checkAuthenticated = async () => {
    //if we've already determined that we are authenticated
    if(AUTHENTICATED || !AUTHTOKEN) return AUTHENTICATED;

    try {
        let result = await json(`/auth/token/validate`);
        if(result) {
            return AUTHENTICATED = true;
        } else {
            return AUTHENTICATED = false;
        }
    } catch(e) {
        return AUTHENTICATED = false;
    }
}

if(typeof localStorage !== 'undefined' && localStorage.getItem('hmtoken')) {
    AUTHTOKEN = localStorage.getItem('hmtoken');
}

export const ValidatingAuthToken = checkAuthenticated();


const SetAuthToken = (token: string) => {
    AUTHTOKEN = token;
    if(typeof localStorage !== 'undefined') {
        localStorage.setItem('hmtoken', token);
    }
}

export const Login = async (email: string, password: string) => {

    try {
        let result = await json(`/auth/login`, 'POST', { email, password });
        if(result) {
            SetAuthToken(result.token);
            return AUTHENTICATED = true;
        } else {
            return AUTHENTICATED = false;
        }
    } catch(e) {
        return AUTHENTICATED = false;
    }
}

export const Logout = () => {
    if(typeof localStorage !== 'undefined' && localStorage.getItem('hmtoken')) {
        AUTHTOKEN = null;
        AUTHENTICATED = false;
        localStorage.removeItem('hmtoken');
    }
}

export const Register = async (user: IUser, invitetoken: string) => {
    try {
        let result = await json(`/auth/register/${invitetoken}`, `POST`, user);
       return result;
    } catch(e) {
        return ReturnError(e);
    }
}

export default {
    Login,
    isAuthenticated,
    ValidatingAuthToken,
    Register,
    SetApiKey,
    GetApiKey,
    GetApiSecret,
    GetAuthToken
}