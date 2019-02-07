import Auth from "../auth";
import { baseUri } from "../json";

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