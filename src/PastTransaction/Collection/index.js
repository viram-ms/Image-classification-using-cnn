import React  from 'react';
import Grid from '@material-ui/core/Grid';
import {ImageHolder, TripHolder, StyledText, StyledGrid} from './style';
import Car from '../../assests/car.jpg';
import StyledLoadingButton from '../../common/LoadingButton';
function Collection(props) {
    const {car  } = props;
    console.log(car);
    return (
            car.message.map((item) => {
            if(item)
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
                            Vehicle No : <b> {item.VehicleNo}</b>
                        </StyledText>
                    </Grid>
                    <Grid item xs={6}>
                        <StyledText variant="body1">
                            Fuel Type: <b>{item.Ftype}</b> 
                        </StyledText>
                    </Grid>
                    <Grid item xs={6}>
                        <StyledText variant="body1">
                            Price / Km : <b>Rs.{item.Price}</b> 
                        </StyledText>
                    </Grid>
                   
                    <Grid item xs={6}>
                        <StyledText variant="body1">
                           Start Date: <b>{item.StartDate}</b>
                        </StyledText>
                    </Grid>
                    <Grid item xs={6}>
                        <StyledText variant="body1">
                           End Date: <b>{item.EndDate}</b>
                        </StyledText>
                    </Grid>
                    <Grid item xs={6}>
                        <StyledText variant="body1">
                           Amount: <b>{item.Amount}</b>
                        </StyledText>
                    </Grid>
                    <Grid item xs={6}>
                        <StyledText variant="body1">
                           Gst: <b>{item.Gst}</b>
                        </StyledText>
                    </Grid>
                </StyledGrid>
        </TripHolder>
    return null; })
    );
}

export default Collection