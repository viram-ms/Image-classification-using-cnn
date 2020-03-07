import React, {useEffect} from 'react';
import { Grid } from '@material-ui/core';
import Collection from '../Collection';
import {StyledGrid, StyledGridTwo} from './style';
import {UseHistory, UseReturnCar} from './service';
function List(){
    const {car , fetchHistory} = UseHistory();
    const {fetchReturn} = UseReturnCar();
    useEffect(() => {
        const payload = {
            UserId: localStorage.getItem('data')
        }
        fetchHistory('http://localhost:4000/car/history', JSON.stringify(payload))
    },[])

    function handleClickOpen(item){
        console.log(item);
        const payload = {
            BillId: item.BillId,
            VehicleId: item.VehicleId
        }
        fetchReturn('http://localhost:4000/car/return', JSON.stringify(payload));
        window.location.reload();
    }
  
return(
    <Grid container>
    <StyledGrid container item  xs={12} sm={12} md={9} >
            <StyledGridTwo item  >
              { car &&  <Collection car={car} handleClickOpen={handleClickOpen} /> }
            </StyledGridTwo>
    </StyledGrid>
    </Grid>
)
}

export default List;