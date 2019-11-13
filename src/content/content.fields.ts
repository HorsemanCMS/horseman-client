import json from '../json';
import { IContentField } from '../interfaces';
import { ReturnError } from '../error';

export const ContentFields = {
    all: async (typeid: number) => {
        try {
            return await json<Array<IContentField>>('/api/content/fields/find', 'POST', {
                __typeid: typeid
            });
        } catch(e) {
            return ReturnError(e);
        }
    },
    create: async (typeid: number, field: IContentField) => {
        try {
            return await json<{id: string}>(`/api/content/fields/`, 'POST', {
                __typeid: typeid,
                ...field
            });
        } catch(e) {
            return ReturnError(e);
        }
    },
    update: async (fieldid: number, field: IContentField) => {
        
        let f = Object.assign({}, field);
        delete f.id

        try {
            return await json<number, IContentField>(`/api/content/fields/${fieldid}`, 'PUT', {
                ...f
            });
        } catch(e) {
            return ReturnError(e);
        }
    }
}

export default ContentFields;