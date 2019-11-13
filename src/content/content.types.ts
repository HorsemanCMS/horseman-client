import json from '../json';
import { IContentType } from '../interfaces';
import { ReturnError } from '../error';

export const ContentTypes = {
    all: async (instanceid: number) => {
        try {
            return await json<Array<IContentType>>('/api/content/types/find', 'POST', {
                __instanceid: instanceid
            });
        } catch(e) {
            return ReturnError(e);
        }
    },
    one: async (typeid: number) => {
        try {
            return await json<IContentType>(`/api/content/types/${typeid}`);
        } catch(e) {
            return ReturnError(e);
        }
    },
    create: async (contentType: IContentType, instanceid: number) => {
        try {
            contentType.__instanceid = instanceid;
            return await json<{id: number}>(`/api/content/types/`, `POST`, contentType);
        } catch(e) {
            return ReturnError(e);
        }
    },
    update: async (contentType: IContentType, typeid: number) => {
        try {
            return await json<number>(`/api/content/types/${typeid}`, `PUT`, contentType);
        } catch(e) {
            return ReturnError(e);
        }
    }
}

export default ContentTypes;