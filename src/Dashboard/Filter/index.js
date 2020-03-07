import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import RangeSlider from '../Slider';
const Filters = () => {
    return(
        <Grid container direction="row" style={{padding: 20, textAlignLast: 'left',}} >
        {/* <Typography variant="h4">Filters</Typography> */}
            {/* <Grid item xs={3} sm={3} md={12} lg={12}>
            </Grid> */}
            <Grid container direction="column" item xs={6} sm={6} md={12} lg={12}  align="center">
                <Grid item>
                    <Typography variant="h5">Fuel Type</Typography>
                </Grid>
                <Grid item>
                    <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Petrol"
                    />
                </Grid>
                <Grid item>
                    <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Diesel"
                    />
                </Grid>
            </Grid>
            <Grid container direction="column" item xs={6} sm={6} md={12} lg={12} align="center">
                <Grid item>
                    <Typography variant="h5">Location</Typography>
                    <br />
                </Grid>
                <Grid item>
                    <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Mumbai"
                    />
                </Grid>
                <Grid item>
                    <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Chennai"
                    />
                </Grid>
            </Grid>
            <Grid container direction="column" item xs={12} >
                <RangeSlider  />
            </Grid>

           
           
        </Grid>
        
    )
}

export default Filters;