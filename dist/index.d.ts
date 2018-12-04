import contentDataTypes from './content/content.datatypes';
export interface IContentField {
    id?: number;
    datatypeid?: number;
    name?: string;
    sortorder?: number;
}
export interface IContentRecord {
    [key: string]: string | number;
}
export interface IContentType {
    [key: string]: any;
    id?: number;
    name?: string;
}
export interface IUser {
    id?: number;
    email: string;
    password?: string;
    firstname?: string;
    lastname?: string;
}
export interface IInstanceUser {
    id: number;
    instanceid: number;
    roleid: number;
    email: string;
}
export interface IAccount {
    id?: number;
    name?: string;
}
export interface IInstance {
    id?: number;
    accountid?: number;
    name?: string;
    domain?: string;
}
export declare const Auth: {
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
export declare const Instances: {
    all: () => Promise<false | IInstance[]>;
    create: (instance: IInstance) => Promise<any>;
};
export declare const Accounts: {
    all: () => Promise<false | IAccount[]>;
};
export declare const InstanceUsers: {
    all: (instanceid: number) => Promise<false | IInstanceUser[]>;
    create: (user: IInstanceUser) => Promise<any>;
    update: (user: IInstanceUser) => Promise<any>;
    invite: (instanceid: number, email: string) => Promise<any>;
};
export declare const ContentTypes: {
    all: (instanceid: number) => Promise<false | IContentType[]>;
    one: (typeid: number) => Promise<false | IContentType>;
    create: (contentType: IContentType, instanceid: number) => Promise<false | {
        id: number;
    }>;
    update: (contentType: IContentType, typeid: number) => Promise<number | false>;
};
export declare const ContentFields: {
    all: (typeid: number) => Promise<false | IContentField[]>;
    create: (typeid: number, field: IContentField) => Promise<false | {
        id: string;
    }>;
    update: (fieldid: number, field: IContentField) => Promise<number | false>;
};
export declare const ContentDataTypes: typeof contentDataTypes;
export declare const ContentRecords: {
    all: (typeid: number) => Promise<false | IContentRecord[]>;
    one: (typeid: number, recordid: number) => Promise<false | IContentRecord>;
    create: (typeid: number, record: IContentRecord) => Promise<false | {
        id: number;
    }>;
    update: (typeid: number, recordid: number, record: IContentRecord) => Promise<false | {
        status: "success";
    }>;
};
export declare const ContentFiles: {
    upload: (instanceid: number, file: any) => Promise<any>;
};
export declare const Roles: {
    id: number;
    name: string;
}[];
declare const _default: {
    Auth: {
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
    Roles: {
        id: number;
        name: string;
    }[];
    Instances: {
        all: () => Promise<false | IInstance[]>;
        create: (instance: IInstance) => Promise<any>;
    };
    Accounts: {
        all: () => Promise<false | IAccount[]>;
    };
    InstanceUsers: {
        all: (instanceid: number) => Promise<false | IInstanceUser[]>;
        create: (user: IInstanceUser) => Promise<any>;
        update: (user: IInstanceUser) => Promise<any>;
        invite: (instanceid: number, email: string) => Promise<any>;
    };
    ContentTypes: {
        all: (instanceid: number) => Promise<false | IContentType[]>;
        one: (typeid: number) => Promise<false | IContentType>;
        create: (contentType: IContentType, instanceid: number) => Promise<false | {
            id: number;
        }>;
        update: (contentType: IContentType, typeid: number) => Promise<number | false>;
    };
    ContentFields: {
        all: (typeid: number) => Promise<false | IContentField[]>;
        create: (typeid: number, field: IContentField) => Promise<false | {
            id: string;
        }>;
        update: (fieldid: number, field: IContentField) => Promise<number | false>;
    };
    ContentDataTypes: typeof contentDataTypes;
    ContentRecords: {
        all: (typeid: number) => Promise<false | IContentRecord[]>;
        one: (typeid: number, recordid: number) => Promise<false | IContentRecord>;
        create: (typeid: number, record: IContentRecord) => Promise<false | {
            id: number;
        }>;
        update: (typeid: number, recordid: number, record: IContentRecord) => Promise<false | {
            status: "success";
        }>;
    };
    ContentFiles: {
        upload: (instanceid: number, file: any) => Promise<any>;
    };
    setBaseUri: (baseuri: string) => void;
};
export default _default;
