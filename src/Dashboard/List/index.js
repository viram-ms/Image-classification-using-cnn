import React, {useEffect} from 'react';
import { Grid } from '@material-ui/core';
import Collection from '../Collection';
import Filters from '../Filter';
import {StyledGrid, StyledGridOne, StyledGridTwo} from './style';
import { UseGetCar,UseBill } from './service';
function List(){
    const {car , fetchCall} = UseGetCar();
    const {fetchBillCall} = UseBill();
    const [selectedStartDate, setSelectedStartDate] = React.useState(new Date('2019-10-18T21:11:54'));
    const [selectedEndDate, setSelectedEndDate] = React.useState(new Date('2019-10-18T21:11:54'));
    const [open, setOpen] = React.useState(false);
    const [carData, setCar] = React.useState();

    useEffect(() => {
        fetchCall('http://localhost:4000/car/getcar');
        console.log(car);
    },[])

    function handleClickOpen(item) {
      setOpen(true);
      setCar(item);
    }
  
    function handleStartDateChange(date) {
    //   setSelectedStartDate(date.toISOString().split('T')[0]);
    setSelectedStartDate(date)
    }
  
    function handleEndDateChange(date) {
    //   setSelectedEndDate(date.toISOString().split('T')[0]);
      setSelectedEndDate(date);
    }
    function createBill(){
        console.log(carData);
        console.log(selectedEndDate.getDate());
        console.log(selectedStartDate.getDate());
        console.log(localStorage.getItem('data'));
        let days;
        const startmonth = selectedStartDate.getMonth();
        const endmonth = selectedEndDate.getMonth();
        if(startmonth === endmonth){
          days = selectedEndDate.getDate() - selectedStartDate.getDate();  
          console.log(days);
        } else {
            if(selectedStartDate.getMonth() === 2){
                days = (28-selectedStartDate.getDate()) + selectedEndDate.getDate();
            } else if(selectedStartDate.getMonth % 2 === 0){
                days = (30-selectedStartDate.getDate()) + selectedEndDate.getDate();
            } else {
                days = (31-selectedStartDate.getDate()) + selectedEndDate.getDate();
            }
        }
        let amount = days * 300 * carData.Price;
        const gst = amount * 0.18;
        console.log(amount);
        const payload = {
            Amount: amount,
            StartDate: selectedStartDate.toISOString().split('T')[0],
            EndDate: selectedEndDate.toISOString().split('T')[0],
            VehicleId: carData.VehicleId,
            UserId: localStorage.getItem('data'),
            Gst: gst
        }

        localStorage.setItem('StartDate',payload.StartDate);
        localStorage.setItem('EndDate',payload.EndDate);

        fetchBillCall('http://localhost:4000/car/newbill', JSON.stringify(payload))

    }
    const data = localStorage.getItem('data');
    console.log(data);
return(
    <Grid container>
        {/* <StyledGridOne item xs={12} sm={12} md={3}  >
            <Filters  />
        </StyledGridOne> */}
    <StyledGrid container item  xs={12} sm={12} md={9} >
            <StyledGridTwo item xs={12} >
               { car && <Collection open={open} handleClickOpen={handleClickOpen} setOpen={setOpen} car={car} createBill={createBill} selectedStartDate={selectedStartDate} selectedEndDate={selectedEndDate} handleStartDateChange={handleStartDateChange} handleEndDateChange={handleEndDateChange} /> }
            </StyledGridTwo>
    </StyledGrid>
    </Grid>

)
}

export default List;