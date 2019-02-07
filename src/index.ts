import auth from './auth';
import instances from './instances';
import accounts from './accounts';
import instanceUsers from './instanceusers';
import instanceAuth from './instanceauth';
import contentTypes from './content/content.types';
import contentFields from './content/content.fields';
import contentDataTypes from './content/content.datatypes';
import contentRecords from './content/content.records';
import contentFiles from './content/content.files';
import roles from './roles';
import { setBaseUri } from './json';

export * from './interfaces';
export const Auth = auth;
export const Instances = instances;
export const Accounts = accounts;
export const InstanceUsers = instanceUsers;
export const InstanceAuth = instanceAuth;
export const ContentTypes = contentTypes;
export const ContentFields = contentFields;
export const ContentDataTypes = contentDataTypes;
export const ContentRecords = contentRecords;
export const ContentFiles = contentFiles;
export const Roles = roles;

export default {
    Auth,
    Roles,
    Instances,
    InstanceAuth,
    Accounts,
    InstanceUsers,
    ContentTypes,
    ContentFields,
    ContentDataTypes,
    ContentRecords,
    ContentFiles,
    setBaseUri,
}
