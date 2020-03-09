import React, {useState} from 'react';
import {Button, Grid} from '@material-ui/core';
import {UploadPhotoCall} from './service';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
    root: {
    //   margin: 10,
    //   textAlign: 'center'
    },
    textfield:{
        width: 150,
        height: 10
    },
    image: {
      height:'91vh'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 25
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));



function DisplayImage() {
    const classes = useStyles();
    const {fetchCall, info } = UploadPhotoCall();
    const [values, setValues] = useState(['forest','glacier','buildings','street','sea','forest','glacier','buildings','street','glacier']);
    const [num, setNum] = useState(0);
    

    const submitValue =  async (e) => {
        e.preventDefault();
        console.log('hi');
        const temp = await fetchCall('http://40ac57f9.ngrok.io/api/images/');
        console.log(temp);
        // await pause(3000);
        setNum(temp.length);
        console.log(num);
        let array = [];
        const demo = ['forest','glacier','buildings','street','sea',]

        for(let i=0;i<temp.length;i++){
            var random = Math.random()*5;
            array.push(demo[random]);
        }
        console.log(array);
        setValues(array); 
    }
    const handleChange = (key,event) => {
        console.log(values);
        const newData = [...values];
        newData[key] = event.target.value;
        setValues(newData)
        console.log(values);
    }

    const SubmitImagesWithText = (event) => {
        console.log('hi')
    }

    return (
        <div>
            <h2><u>Upload Images For Prediction and Retraining</u></h2>
            <form action="http://40ac57f9.ngrok.io/api/imagepost/" method="POST" enctype = "multipart/form-data" style={{marginTop: 20}}>
                <input type='file' name='images' multiple></input>
            <input type="submit" value="Submit" />
            </form>
            <Button variant="contained" color="primary" type="submit" onClick={submitValue} style={{marginTop: 20,marginBottom: 20}}> 
                Get Results
            </Button>
            <Grid container>
            {info && info.map((item,key) => (
               <Grid item xs={12} sm={2} md={2} style={{textAlign: 'center',marginTop: 20}}>
                   <img src={item.image} style={{marginTop: 20}} />
                   <TextField
                        className={classes.textfield}
                        value={values[key]}
                        onChange={handleChange.bind(this,key)}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="dataset"
                        // label="Default Label"
                        name="number_of_filters"
                    />

               </Grid> 
            ))}
            </Grid>
            {info && <Button variant="contained" color="primary" type="submit" onClick={SubmitImagesWithText} style={{marginTop: 50,marginBottom: 20}}> 
                Submit Images with labels
            </Button>}
        </div>
    )
}
export default DisplayImage;