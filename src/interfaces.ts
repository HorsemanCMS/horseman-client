export interface IContentField {
    id?: number;
    datatypeid?: number;
    name?: string;
    sortorder?: number;
}

export interface IContentRecord {
    [key:string]: string | number;
}

export interface IContentType {
    [key:string]: any,
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

export interface IInstanceLogin {
    id?: number;
    email: string;
    password: string;
}