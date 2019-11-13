import json from './json';
import { IInstanceUser } from './interfaces';
import { ReturnError } from './error';

export const InstanceUsers = {
    all: async (instanceid: number) => {
        try {
            return await json<Array<IInstanceUser>>(`/api/instance/users/${instanceid}`);
        } catch(e) {
            return ReturnError(e);
        }
    },
    create: async (user: IInstanceUser) => {
        try {
            return await json('/api/users', 'POST', user);
        } catch(e) {
            return ReturnError(e);
        }
    },
    update: async (user: IInstanceUser) => {
        try {
            return await json(`/api/instance/users/${user.instanceid}`, 'PUT', user);
        } catch(e) {
            return ReturnError(e);
        }
    },
    invite: async (instanceid: number, email: string) => {
        try {
            return await json(`/api/instance/users/${instanceid}/invite`, 'POST', { email });
        } catch(e) {
            return ReturnError(e);
        }
    }
}

export default InstanceUsers;