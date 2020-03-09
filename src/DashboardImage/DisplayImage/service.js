import  { useState } from 'react';

export const UploadPhotoCall = () => {
    const [info, setInfo] = useState('');
    async function fetchCall(url){
        try {
            const res = await fetch(
                url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
            console.log(res);
            if(res.status === 500){
                console.log('error');
            }
            const data = await res.json();
            console.log(data);
            if (res.status === 200){
                setInfo(data.results);
                return data.results;
            }
        } catch(e){
            console.log(e);
        }
    }
    return {info,fetchCall};
}