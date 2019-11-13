import json from './json';
import { IInstance } from './interfaces';
import { ReturnError } from './error';

export const Instances = {
    all: async () => {
        try {
            return await json<Array<IInstance>>('/api/instances');
        } catch(e) {
            return ReturnError(e);
        }
    },
    create: async (instance: IInstance) => {
        try {
            return await json('/api/instances', 'POST', instance);
        } catch(e) {
            return ReturnError(e);
        }
    }
}

export default Instances;