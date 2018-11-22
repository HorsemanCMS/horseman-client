import json from '../json';
import { IContentRecord } from '../index';

export const ContentRecords = {
    all: async (typeid: number) => {
        try {
            return await json<Array<IContentRecord>>(`/api/content/records/${typeid}`);
        } catch(e) {
            console.log(e);
            return false;
        }
    },
    one: async (typeid: number, recordid: number) => {
        try {
            return await json<IContentRecord>(`/api/content/records/${typeid}/${recordid}`);
        } catch(e) {
            console.log(e);
            return false;
        }
    },
    create: async (typeid: number, record: IContentRecord) => {
        try {
            return await json<{ id: number }>(`/api/content/records/${typeid}`, 'POST', {
                ...record
            });
        } catch(e) {
            console.log(e);
            return false;
        }
    },
    update: async (typeid: number, recordid: number, record: IContentRecord) => {
        try {
            return await json<{ status: 'success' }>(`/api/content/records/${typeid}/${recordid}`, 'PUT', {
                ...record
            });
        } catch(e) {
            console.log(e);
            return false;
        }
    }
}

export default ContentRecords;