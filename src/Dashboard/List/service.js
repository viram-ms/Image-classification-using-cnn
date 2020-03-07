import  { useState } from 'react';
export const UseGetCar = () => {
    const [car, setCar] = useState();
    async function fetchCall(url){
        console.log('sending http requests');
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
                setCar(data)
            }
        } catch(e){
            console.log(e);
        }
    }
    return {car,fetchCall};
}

export const UseBill = () => {
    async function fetchBillCall(url,body){
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
                console.log(data);
            }
        } catch(e){
            console.log(e);
        }
    }
    return {fetchBillCall};
}