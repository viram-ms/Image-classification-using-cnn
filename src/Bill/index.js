import React, {useEffect} from 'react';
import {StyledPaper, StyledImg, StyledName, StyledGrid, BorderBottomGrid, RightGrid} from './style';
import Grid from '@material-ui/core/Grid';
import Logo from '../assests/login.webp';
import Table from './Table';
import {UseSingleBill} from './service';
import Button from '@material-ui/core/Button';



function Bill(){
    const token = localStorage.getItem('token');

    const {cardata,userdata,data,fetchSingleBillCall} = UseSingleBill();

    
    useEffect(() => {
        const payload = {
            UserId: localStorage.getItem('data'),
            StartDate: localStorage.getItem('StartDate'),
            EndDate: localStorage.getItem('EndDate')
        }
        fetchSingleBillCall('http://localhost:4000/car/singlebill', JSON.stringify(payload))
    },[])

    // function handleSubmit(){
    //     (async () => {
    //         const browser = await puppeteer.launch({
    //             ignoreDefaultArgs: ['--disable-extensions'],
    //           })
    //         const page = await browser.newPage();
    //         await page.goto('http://localhost:3000/bill')
    //         await page.evaluate(() => {
    //             localStorage.setItem('token', token);
    //         })
    //         await page.goto('http://localhost:3000/bill')
    //         const buffer = await page.pdf({format: 'A4', printBackground: true, path: 'response.pdf'})
    //         console.log(buffer);
    //         // res.type('application/pdf')
    //         // res.send(buffer)
    //         browser.close()
    //     })()
    // }
    
    return(
        cardata && data && userdata ? ( <StyledPaper border="10px solid rosybrown">
            <BorderBottomGrid container >
            <StyledGrid item container xs={12}>
                <Grid item xs={2}>
                    <StyledImg src={Logo} alt="logo"  /> 
                </Grid>
                <Grid container direction="column" item xs={7}>
                    <Grid item>
                    <StyledName variant={"body1"} style={{fontWeight: 600}} textaligncenter="center">Car Renting </StyledName>
                    </Grid>
                    <Grid item>
                    <StyledName variant="body2" textaligncenter="center">DJ Sanghvi</StyledName>
                    </Grid>
                    <Grid item>
                    <StyledName variant="body2" textaligncenter="center">Tel: 8879490461</StyledName>
                    </Grid>
                </Grid>
                <Grid container item xs={3} direction="column">
                    <Grid item>
                        <StyledName variant={"body1"} style={{fontWeight: 600}}>Invoice </StyledName>
                    </Grid>
                    <Grid item>
                        <StyledName variant={"body2"} paddingtop="5px">Bill Id: {data.BillId} </StyledName>
                    </Grid>
                    <Grid item >
                        <StyledName variant={"body2"} paddingtop="5px">Date: {Date()} </StyledName>
                    </Grid>
                </Grid>
            </StyledGrid>
            <Grid container item xs={12} style={{marginTop: 40}}>
                <BorderBottomGrid item xs={12} border="2px solid gainsboro" >
                    <StyledName variant={"h6"} fontsize="1rem">Bill To:  </StyledName>
                </BorderBottomGrid>
                <Grid item xs={12} >
                    <StyledName variant={"h6"} fontsize="1rem">Name: {userdata.Name} </StyledName>
                </Grid>
                <Grid item xs={12} >
                    <StyledName variant={"h6"} fontsize="1rem">Phone No: {userdata.PhoneNo} </StyledName>
                </Grid>
                <Grid item xs={12} >
                    <StyledName variant={"h6"} fontsize="1rem">Email: {userdata.EmailId} </StyledName>
                </Grid>
                <Grid item xs={12} >
                    <StyledName variant={"h6"} fontsize="1rem">Addhar No: {userdata.AddharNo} </StyledName>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Table cardata={cardata}/>
            </Grid>
            <Grid item xs={12} container  style={{marginTop: 40}}>
                <Grid item xs={5}>
                    <StyledName>Remarks / Payment Instruction</StyledName>
                </Grid>
                <RightGrid item xs={7} container direction="column">
                    <Grid item >
                        <StyledName variant={"h6"} fontsize="0.9rem">Amount: <b>{data.Amount}</b> </StyledName>
                    </Grid>
                    <Grid item >
                        <StyledName variant={"h6"} fontsize="0.9rem">18% GST: <b>{data.Gst}</b> </StyledName>
                    </Grid>
                    <Grid item >
                        <StyledName variant={"h6"} fontsize="0.9rem">Payable Amount: <b>Rs{data.Amount + data.Gst}</b> </StyledName>
                    </Grid>
                </RightGrid>
            </Grid>
            {/* <Button onClick={handleSubmit}>Print</Button> */}
        </BorderBottomGrid>
        </StyledPaper> ) : (<p>loafing</p>)
    );
}

export default Bill;