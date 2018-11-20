import json from '../json';

export const ContentTypes = {
    all: async (instanceid: number) => {
        try {
            return await json<Array<IContentType>>('/api/content/types/find', 'POST', {
                __instanceid: instanceid
            });
        } catch(e) {
            console.log(e);
            return false;
        }
    },
    one: async (typeid: number) => {
        try {
            return await json<IContentType>(`/api/content/types/${typeid}`);
        } catch(e) {
            console.log(e);
            return false;
        }
    },
    create: async (contentType: IContentType, instanceid: number) => {
        try {
            contentType.__instanceid = instanceid;
            return await json<{id: number}>(`/api/content/types/`, `POST`, contentType);
        } catch(e) {
            console.log(e);
            return false;
        }
    },
    update: async (contentType: IContentType, typeid: number) => {
        try {
            return await json<number>(`/api/content/types/${typeid}`, `PUT`, contentType);
        } catch(e) {
            console.log(e);
            return false;
        }
    }
}

export interface IContentType {
    [key:string]: any,
    id?: number;
    name?: string;
}

export default ContentTypes;