import React, {useEffect} from 'react';
import { Grid } from '@material-ui/core';
import Collection from '../Collection';
import {StyledGrid, StyledGridTwo} from './style';
import {UseHistory} from './service';
function List(){
    const {car , fetchHistory} = UseHistory();
    useEffect(() => {
        const payload = {
            UserId: localStorage.getItem('data')
        }
        fetchHistory('http://localhost:4000/car/transactions', JSON.stringify(payload))
    },[])

   
  
return(
    <Grid container>
    <StyledGrid container item  xs={12} sm={12} md={9} >
            <StyledGridTwo item  >
              { car &&  <Collection car={car}  /> }
            </StyledGridTwo>
    </StyledGrid>
    </Grid>
)
}

export default List;