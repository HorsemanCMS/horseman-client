import ContentDataTypes from './content/content.datatypes';
declare const _default: {
    Auth: {
        Login: (email: string, password: string) => Promise<boolean>;
        API_KEY: string;
        API_SECRET: string;
        AUTHTOKEN: string;
        AUTHENTICATED: boolean;
        isAuthenticated: () => Promise<boolean>;
        ValidatingAuthToken: Promise<boolean>;
        Register: (user: import("./auth").IUser, invitetoken: string) => Promise<any>;
        SetApiKey: (key: string, secret?: string) => void;
    };
    Roles: {
        id: number;
        name: string;
    }[];
    Instances: {
        all: () => Promise<false | import("./instances").IInstance[]>;
        create: (instance: import("./instances").IInstance) => Promise<any>;
    };
    Accounts: {
        all: () => Promise<false | import("./accounts").IAccount[]>;
    };
    InstanceUsers: {
        all: (instanceid: number) => Promise<false | import("./instanceusers").IInstanceUser[]>;
        create: (user: import("./instanceusers").IInstanceUser) => Promise<any>;
        update: (user: import("./instanceusers").IInstanceUser) => Promise<any>;
        invite: (instanceid: number, email: string) => Promise<any>;
    };
    ContentTypes: {
        all: (instanceid: number) => Promise<false | import("./content/content.types").IContentType[]>;
        one: (typeid: number) => Promise<false | import("./content/content.types").IContentType>;
        create: (contentType: import("./content/content.types").IContentType, instanceid: number) => Promise<false | {
            id: number;
        }>;
        update: (contentType: import("./content/content.types").IContentType, typeid: number) => Promise<number | false>;
    };
    ContentFields: {
        all: (typeid: number) => Promise<false | import("./content/content.fields").IContentField[]>;
        create: (typeid: number, field: import("./content/content.fields").IContentField) => Promise<false | {
            id: string;
        }>;
        update: (fieldid: number, field: import("./content/content.fields").IContentField) => Promise<number | false>;
    };
    ContentDataTypes: typeof ContentDataTypes;
    ContentRecords: {
        all: (typeid: number) => Promise<false | import("./content/content.records").IContentRecord[]>;
        one: (typeid: number, recordid: number) => Promise<false | import("./content/content.records").IContentRecord>;
        create: (typeid: number, record: import("./content/content.records").IContentRecord) => Promise<false | {
            id: number;
        }>;
        update: (typeid: number, recordid: number, record: import("./content/content.records").IContentRecord) => Promise<false | {
            status: "success";
        }>;
    };
    setBaseUri: (baseuri: string) => void;
};
export default _default;
