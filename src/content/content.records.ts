import json from '../json';
import { IContentRecord } from '../interfaces';
import { ReturnError } from '../error';

export const ContentRecords = {
    all: async (typeid: number) => {
        try {
            return await json<Array<IContentRecord>>(`/api/content/records/${typeid}`);
        } catch(e) {
            return ReturnError(e);
        }
    },
    one: async (typeid: number, recordid: number) => {
        try {
            return await json<IContentRecord>(`/api/content/records/${typeid}/${recordid}`);
        } catch(e) {
            return ReturnError(e);
        }
    },
    create: async (typeid: number, record: IContentRecord) => {
        try {
            return await json<{ id: number }>(`/api/content/records/${typeid}`, 'POST', {
                ...record
            });
        } catch(e) {
            return ReturnError(e);
        }
    },
    update: async (typeid: number, recordid: number, record: IContentRecord) => {
        try {
            return await json<{ status: 'success' }>(`/api/content/records/${typeid}/${recordid}`, 'PUT', {
                ...record
            });
        } catch(e) {
            return ReturnError(e);
        }
    },
    delete: async (typeid: number, recordid: number) => {
        try {
            return await json<{ status: 'success' }>(`/api/content/records/${typeid}/${recordid}`, 'DELETE');
        } catch(e) {
            return ReturnError(e);
        }
    }
}

export default ContentRecords;