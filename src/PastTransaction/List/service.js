import {useState} from 'react';
export const UseHistory = () => {
    const [car, setCar] = useState();
    async function fetchHistory(url,body){
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
                setCar(data);
            }
        } catch(e){
            console.log(e);
        }
    }
    return {car,fetchHistory};
}
