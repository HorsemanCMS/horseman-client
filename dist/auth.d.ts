export declare let API_KEY: string;
export declare let API_SECRET: string;
export declare let AUTHTOKEN: string;
export declare let AUTHENTICATED: boolean;
export declare const isAuthenticated: () => Promise<boolean>;
export declare const ValidatingAuthToken: Promise<boolean>;
export declare const SetApiKey: (key: string, secret?: string) => void;
export declare const SetAuthToken: (token: string) => void;
export declare const Login: (email: string, password: string) => Promise<boolean>;
export declare const Logout: () => void;
export declare const Register: (user: IUser, invitetoken: string) => Promise<any>;
export interface IUser {
    id?: number;
    email: string;
    password?: string;
    firstname?: string;
    lastname?: string;
}
declare const _default: {
    Login: (email: string, password: string) => Promise<boolean>;
    API_KEY: string;
    API_SECRET: string;
    AUTHTOKEN: string;
    AUTHENTICATED: boolean;
    isAuthenticated: () => Promise<boolean>;
    ValidatingAuthToken: Promise<boolean>;
    Register: (user: IUser, invitetoken: string) => Promise<any>;
    SetApiKey: (key: string, secret?: string) => void;
};
export default _default;
