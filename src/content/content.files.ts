import { AUTHTOKEN, API_KEY, API_SECRET } from "../auth";
import { baseUri } from "../json";

export const ContentFiles = {
    upload: async (instanceid: number, file: any) => {
        try {
            let headers: any = {
            }
        
            if(AUTHTOKEN) {
                headers.Authorization = AUTHTOKEN;
            } else if(API_KEY) {
                headers["x-instance-key"] = API_KEY;
            } else if(API_SECRET) {
                headers["x-instance-secret"] = API_SECRET;
            }
        
            try {
                let data = new FormData();
                data.append('file', file);
                let result = await fetch(`${baseUri}/api/content/files/${instanceid}`, {
                    method: 'POST',
                    headers,
                    body: data
                });
        
                if(result.ok) {
                    return (await result.json());
                } else {
                    return false;
                }
            } catch(e) {
                console.log(e);
                throw e;
            }
        } catch(e) {
            console.log(e);
            return false;
        }
    },
}

export default ContentFiles;