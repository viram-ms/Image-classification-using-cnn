import  { useState } from 'react';

export const UseLogin = () => {
    const [info, setInfo] = useState(false);
    async function fetchCall(url,body){
        console.log('sending http request');
        try {
            const res = await fetch(
                url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: body
                }
            )
            console.log(res);
            if(res.status === 500){
                console.log('error');
            }
            const data = await res.json();
            console.log(data);
            if (res.status === 200){
                console.log(data.data);
                localStorage.setItem('token',data.token);
                localStorage.setItem('data',data.data[0].UserId);
                window.location.reload();
                setInfo(data.data);
            }
        } catch(e){
            console.log(e);
        }
    }
    return {info,fetchCall};
}