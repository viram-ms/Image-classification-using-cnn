import React  from 'react';
import Grid from '@material-ui/core/Grid';
import {ImageHolder, TripHolder, StyledText, StyledGrid} from './style';
import Car from '../../assests/car.jpg';
import StyledLoadingButton from '../../common/LoadingButton';
import AlertDialog from '../Dialog';
function Collection(props) {
    const {car, open, setOpen, handleClickOpen, selectedStartDate, selectedEndDate,handleStartDateChange, handleEndDateChange, createBill} = props;
  
    function handleClose() {
      setOpen(false);
    }

    console.log(car);
    return (
            car.message.map((item) => {
            if(item.Status === 1)
            return <TripHolder container wrap="nowrap">
                <Grid item style={{alignSelf: 'center'}}>
                    <ImageHolder src={Car} />
                </Grid>
                <StyledGrid container item >
                    <Grid item xs={6}>
                        <StyledText variant="body1">
                            Name: <b>{item.Name} </b>
                        </StyledText>
                    </Grid>
                    <Grid item xs={6}>
                        <StyledText variant="body1">
                            Vehicle No : {item.VehicleNo}
                        </StyledText>
                    </Grid>
                    <Grid item xs={6}>
                        <StyledText variant="body1">
                            Fuel Type: {item.FType}
                        </StyledText>
                    </Grid>
                    <Grid item xs={6}>
                        <StyledText variant="body1">
                            Price / Km : Rs.{item.Price}
                        </StyledText>
                    </Grid>
                    <Grid item xs={6}>
                        <StyledText variant="body1">
                            Loaction:{item.Location}
                        </StyledText>
                    </Grid>
                    <Grid item xs={6}>
                        <StyledText variant="body1">
                            Status: {item.Status === 1 ? 'available': 'unavailable'}
                        </StyledText>
                    </Grid>

                    <Grid item xs={12} >
                        <StyledLoadingButton
                            onClick={handleClickOpen.bind(this,item)}
                            color="secondary"
                            variant="contained"
                            className="btn navbar-btn"
                        >
                            Select
                        </StyledLoadingButton>
                    </Grid>
                </StyledGrid>
            <AlertDialog open={open} createBill={createBill} handleClose={handleClose} selectedStartDate={selectedStartDate} selectedEndDate={selectedEndDate} handleStartDateChange={handleStartDateChange} handleEndDateChange={handleEndDateChange}/>
        </TripHolder>
    return null; })
    );
}

export default Collection