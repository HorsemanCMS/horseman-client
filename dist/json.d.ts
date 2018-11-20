export declare const setBaseUri: (baseuri: string) => void;
export declare const json: <T = any, R = {}>(path: string, method?: string, body?: R) => Promise<false | T>;
export default json;
