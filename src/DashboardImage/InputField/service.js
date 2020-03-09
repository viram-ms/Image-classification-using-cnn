import  { useState } from 'react';

export const UploadPhotoCall = () => {
    const [info, setInfo] = useState();
    async function fetchCall(url,body){
        console.log(body);
        try {
            const res = await fetch(
                url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body)
                }
            )
            console.log(res);
            if(res.status === 500){
                console.log('error');
            }
            const data = await res.json();
            console.log(data);
            if (res.status === 200){
                setInfo(data);
            }
        } catch(e){
            console.log(e);
        }
    }
    return {info,fetchCall};
}