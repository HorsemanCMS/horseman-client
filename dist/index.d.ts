import contentDataTypes from './content/content.datatypes';
export * from './interfaces';
export declare const Auth: {
    Login: (email: string, password: string) => Promise<boolean>;
    isAuthenticated: () => boolean;
    ValidatingAuthToken: Promise<boolean>;
    Register: (user: import("./interfaces").IUser, invitetoken: string) => Promise<any>;
    SetApiKey: (key: string, secret?: string) => void;
    GetApiKey: () => string;
    GetApiSecret: () => string;
    GetAuthToken: () => string;
};
export declare const Instances: {
    all: () => Promise<false | import("./interfaces").IInstance[]>;
    create: (instance: import("./interfaces").IInstance) => Promise<any>;
};
export declare const Accounts: {
    all: () => Promise<false | import("./interfaces").IAccount[]>;
};
export declare const InstanceUsers: {
    all: (instanceid: number) => Promise<false | import("./interfaces").IInstanceUser[]>;
    create: (user: import("./interfaces").IInstanceUser) => Promise<any>;
    update: (user: import("./interfaces").IInstanceUser) => Promise<any>;
    invite: (instanceid: number, email: string) => Promise<any>;
};
export declare const InstanceAuth: {
    login: (email: string, password: string) => Promise<false | {
        token: string;
    }>;
    register: (login: import("./interfaces").IInstanceLogin) => Promise<false | {
        token: string;
    }>;
    authToken: () => string;
};
export declare const ContentTypes: {
    all: (instanceid: number) => Promise<false | import("./interfaces").IContentType[]>;
    one: (typeid: number) => Promise<false | import("./interfaces").IContentType>;
    create: (contentType: import("./interfaces").IContentType, instanceid: number) => Promise<false | {
        id: number;
    }>;
    update: (contentType: import("./interfaces").IContentType, typeid: number) => Promise<number | false>;
};
export declare const ContentFields: {
    all: (typeid: number) => Promise<false | import("./interfaces").IContentField[]>;
    create: (typeid: number, field: import("./interfaces").IContentField) => Promise<false | {
        id: string;
    }>;
    update: (fieldid: number, field: import("./interfaces").IContentField) => Promise<number | false>;
};
export declare const ContentDataTypes: typeof contentDataTypes;
export declare const ContentRecords: {
    all: (typeid: number) => Promise<false | import("./interfaces").IContentRecord[]>;
    one: (typeid: number, recordid: number) => Promise<false | import("./interfaces").IContentRecord>;
    create: (typeid: number, record: import("./interfaces").IContentRecord) => Promise<false | {
        id: number;
    }>;
    update: (typeid: number, recordid: number, record: import("./interfaces").IContentRecord) => Promise<false | {
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
        isAuthenticated: () => boolean;
        ValidatingAuthToken: Promise<boolean>;
        Register: (user: import("./interfaces").IUser, invitetoken: string) => Promise<any>;
        SetApiKey: (key: string, secret?: string) => void;
        GetApiKey: () => string;
        GetApiSecret: () => string;
        GetAuthToken: () => string;
    };
    Roles: {
        id: number;
        name: string;
    }[];
    Instances: {
        all: () => Promise<false | import("./interfaces").IInstance[]>;
        create: (instance: import("./interfaces").IInstance) => Promise<any>;
    };
    InstanceAuth: {
        login: (email: string, password: string) => Promise<false | {
            token: string;
        }>;
        register: (login: import("./interfaces").IInstanceLogin) => Promise<false | {
            token: string;
        }>;
        authToken: () => string;
    };
    Accounts: {
        all: () => Promise<false | import("./interfaces").IAccount[]>;
    };
    InstanceUsers: {
        all: (instanceid: number) => Promise<false | import("./interfaces").IInstanceUser[]>;
        create: (user: import("./interfaces").IInstanceUser) => Promise<any>;
        update: (user: import("./interfaces").IInstanceUser) => Promise<any>;
        invite: (instanceid: number, email: string) => Promise<any>;
    };
    ContentTypes: {
        all: (instanceid: number) => Promise<false | import("./interfaces").IContentType[]>;
        one: (typeid: number) => Promise<false | import("./interfaces").IContentType>;
        create: (contentType: import("./interfaces").IContentType, instanceid: number) => Promise<false | {
            id: number;
        }>;
        update: (contentType: import("./interfaces").IContentType, typeid: number) => Promise<number | false>;
    };
    ContentFields: {
        all: (typeid: number) => Promise<false | import("./interfaces").IContentField[]>;
        create: (typeid: number, field: import("./interfaces").IContentField) => Promise<false | {
            id: string;
        }>;
        update: (fieldid: number, field: import("./interfaces").IContentField) => Promise<number | false>;
    };
    ContentDataTypes: typeof contentDataTypes;
    ContentRecords: {
        all: (typeid: number) => Promise<false | import("./interfaces").IContentRecord[]>;
        one: (typeid: number, recordid: number) => Promise<false | import("./interfaces").IContentRecord>;
        create: (typeid: number, record: import("./interfaces").IContentRecord) => Promise<false | {
            id: number;
        }>;
        update: (typeid: number, recordid: number, record: import("./interfaces").IContentRecord) => Promise<false | {
            status: "success";
        }>;
    };
    ContentFiles: {
        upload: (instanceid: number, file: any) => Promise<any>;
    };
    setBaseUri: (baseuri: string) => void;
};
export default _default;
