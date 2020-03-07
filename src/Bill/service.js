import {useState} from 'react';
export const UseSingleBill = () => {
    const [data, setDate] = useState();
    const [userdata, setUserData]= useState();
    const [cardata, setCarData]= useState();
    async function fetchSingleBillCall(url,body){
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
                setDate(data.message.bill[0])
                setUserData(data.message.user[0])
                setCarData(data.message.car[0])
            }
        } catch(e){
            console.log(e);
        }
    }
    return {cardata,userdata,data,fetchSingleBillCall};
}