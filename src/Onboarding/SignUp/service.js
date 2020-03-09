export const UseSignUp = (props) => {
    const {props : {history} } = props;
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
            if (res.status === 201){
                history.push('./login');
            }
        } catch(e){
            console.log(e);
        }
    }
    return {fetchCall};
}