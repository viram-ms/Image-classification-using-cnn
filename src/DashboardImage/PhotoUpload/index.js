import React , {useState}  from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {UploadPhotoCall} from './service';
import axios , {post } from 'axios';
import {Button} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      margin: 'auto',
    //   textAlign: 'center'
    },
    textfield:{
        width: 350
    },
    image: {
      height:'91vh'
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


function PhotoUpload(){

    const classes = useStyles();
    const [values, setValues] = useState()
    const [fields, setFields] = useState({ dataset: '', type: 'CNN'})
    const { fetchCall } = UploadPhotoCall();

    const handleChange = (event) => {
        event.preventDefault();
        setFields({...fields, [event.target.name]: event.target.value} );
      }

    const handleChangeFile = (event) => {
        event.preventDefault();
        console.log(event.target.files);
        let files = event.target.files;
        console.log(files);
        const formData = new FormData();
        formData.append('zipFile',event.target.files);
        formData.append('username', 'Chris');
        var url = ' http://40ac57f9.ngrok.io/api/mymodels/';
        console.log(formData);
        // fetchCall(url,formData);
        const headers = {
                    'Content-Type': 'multipart/form-data',
                    'Authorization':   `Token ${localStorage.getItem('token')}`
                }
        return post(url, formData , { headers: headers})
            .then(response => console.log("result", response))
            .catch(error => console.log(error))

        
        // let reader = new FileReader();
        // reader.readAsDataURL(files[0]);
        // reader.onload = (e) => {
        //     console.warn('img data', e.target.result)
        //     var url = 'http://19da2ea5.ngrok.io/api/mymodels/';
        //     const formData = new FormData();
        //     formData.append('zipFile',eve);
        //     formData.append('dafsvf','sadff');
        //     // formData.append('model_name', fields.dataset)
        //     // formData.append('model_type',fields.type)
        //     // const body = { zipfile: files[0] }

        //     console.log(formData)
        //     const headers = {
        //         'Content-Type': 'multipart/form-data',
        //         'Authorization':   `Token ${localStorage.getItem('token')}`
        //     }
        //     return post(url, formData , { headers: headers})
        //     .then(response => console.log("result", response))
        //     .catch(error => console.log(error))
        //     // fetchCall(url, formData);
        // }
      }

      const handleSubmit = (e) => {
          console.log(e.target)
            e.preventDefault();
      }

    return(
        <div  className={classes.root}>
            <h2><u>Upload Dataset</u></h2>
            <Grid container component={Paper} style={{padding: 10}}>
            <Grid item xs={12} sm={8} md={4}  elevation={6} square>
            <TextField
            className={classes.textfield}
              value={fields.dataset}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="dataset"
              label="Model Name"
              name="dataset"
              autoFocus
            />
            </Grid>
            <Grid item xs={12} sm={8} md={4}  elevation={6} square>
            <TextField
            className={classes.textfield}
              value={fields.type}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="dataset"
              label="Model Type"
              name="type"
              autoFocus
            />
            </Grid>
            
            <Grid item xs={12} sm={8} md={4}  elevation={6} square style={{display: 'flex', flexDirection: 'column', marginTop: 30,alignContent: 'flex-end'}}>
            <form action="http://40ac57f9.ngrok.io/api/zipfile/" method="POST" enctype = "multipart/form-data">
                <input type='file' name='zipfile' multiple></input>
                <Button variant="contained" color="primary" type="submit">
                    Submit 
                </Button>
            {/* <input type="submit" value="Submit"  onSubmit={handleSubmit}/> */}
            </form>
            </Grid>
            </Grid>
        </div>
    )
}

export default PhotoUpload;