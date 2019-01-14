declare var localStorage: any;
import json from './json';
import { IUser } from './index';

export let API_KEY: string;
export let API_SECRET: string;
export let AUTHTOKEN: string;
export let AUTHENTICATED: boolean = false;

export const isAuthenticated = async () => {
    //if we've already determined that we are authenticated
    if(AUTHENTICATED) return AUTHENTICATED;

    try {
        let result = await json(`/auth/token/validate`);
        if(result) {
            return AUTHENTICATED = true;
        } else {
            return AUTHENTICATED = false;
        }
    } catch(e) {
        console.log(e);
        return AUTHENTICATED = false;
    }
}

if(typeof localStorage !== 'undefined' && localStorage.getItem('hmtoken')) {
    AUTHTOKEN = localStorage.getItem('hmtoken');
}

export const ValidatingAuthToken = isAuthenticated();

export const SetApiKey = (key: string, secret?: string) => {
    AUTHTOKEN = null;
    API_KEY = key;
    API_SECRET = secret;
}

export const SetAuthToken = (token: string) => {
    AUTHTOKEN = token;
    if(typeof localStorage !== 'undefined') {
        localStorage.setItem('hmtoken', token);
    }
}

export const Login = async (email: string, password: string) => {

    try {
        let result = await json(`/auth/login`, 'POST', { email, password });
        SetAuthToken(result.token);
        return AUTHENTICATED = true;
    } catch(e) {
        console.log(e);
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
        console.log(e);
        return false;
    }
}

export default {
    Login,
    API_KEY,
    API_SECRET,
    AUTHTOKEN,
    AUTHENTICATED,
    isAuthenticated,
    ValidatingAuthToken,
    Register,
    SetApiKey,
}