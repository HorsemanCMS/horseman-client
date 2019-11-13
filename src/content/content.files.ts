import Auth from "../auth";
import { baseUri } from "../json";
import { ReturnError } from "../error";

export const ContentFiles = {
    upload: async (instanceid: number, file: any) => {
        try {
            let headers: any = {
            }
        
            if(Auth.GetAuthToken()) {
                headers.Authorization = Auth.GetAuthToken();
            } else if(Auth.GetApiKey()) {
                headers["x-instance-key"] = Auth.GetApiKey();
            } else if(Auth.GetApiSecret()) {
                headers["x-instance-secret"] = Auth.GetApiSecret();
            }
        
            try {
                let data = new FormData();
                data.append('file', file);
                let result = await fetch(`${baseUri}/api/content/files/${instanceid}`, {
                    method: 'POST',
                    headers,
                    body: data
                });
        
                return (await result.json());
            } catch(e) {
                throw e;
            }
        } catch(e) {
            return ReturnError(e);
        }
    },
}

export default ContentFiles;