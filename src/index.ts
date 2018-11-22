import auth from './auth';
import instances from './instances';
import accounts from './accounts';
import instanceUsers from './instanceusers';
import contentTypes from './content/content.types';
import contentFields from './content/content.fields';
import contentDataTypes from './content/content.datatypes';
import contentRecords from './content/content.records';
import contentFiles from './content/content.files';
import roles from './roles';
import { setBaseUri } from './json';

export const Auth = auth;
export const Instances = instances;
export const Accounts = accounts;
export const InstanceUsers = instanceUsers;
export const ContentTypes = contentTypes;
export const ContentFields = contentFields;
export const ContentDataTypes = contentDataTypes;
export const ContentRecords = contentRecords;
export const ContentFiles = contentFiles;
export const Roles = roles;

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

export default {
    Auth,
    Roles,
    Instances,
    Accounts,
    InstanceUsers,
    ContentTypes,
    ContentFields,
    ContentDataTypes,
    ContentRecords,
    ContentFiles,
    setBaseUri,
}
