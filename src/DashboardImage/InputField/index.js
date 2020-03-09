import React , {useState, Fragment}  from 'react';
import { Grid, Paper,CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Select, MenuItem, InputLabel } from "@material-ui/core";
import {UploadPhotoCall} from './service';
import {Button, paper, FormControl} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles(theme => ({
    root: {
    //   margin: 10,
    //   textAlign: 'center'
    },
    textfield:{
        width: 350,
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

  const PrettoSlider = withStyles({
    root: {
      color: '#52af77',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus,&:hover,&$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);


function InputField(){

    const classes = useStyles();
    const { fetchCall,info,loading } = UploadPhotoCall();

    const inputLabel = React.useRef(null);

    const [values, setValues] = useState();
    const [show,setShow] = useState(true);
    const [vision,setVision] = useState(false);

    const [temp, setTemp ] = useState([{
            name: 'Convolutional',
            number_of_nodes: '',
            number_of_filters: '',
            kernel_size_x: '3',
            kernel_size_y: '3',
            activation: 'relu',
           
            dropout_rate: '0.5',
            
    }]);

    const pause = ms => new Promise(res => setTimeout(res,ms));


    const [ var1 , setVar] = useState( {
        dropout_rate: '0.5',
        learning_rate: '0.0001',
        loss_function: 'Sparse_Categorical_CrossEntropy',
        epoch: '35',
        input_shape_x: '',
        input_shape_y: '',

    })

    const handleChange = event => {
        setValues(event.target.value)
        console.log(values)
    }

    const handleChangeVar = (event) => {
        event.preventDefault();
        setVar({...var1, [event.target.name]: event.target.value });

    }

    const handleChangeTemp = (item,property,event) => {
      const newData = [...temp];
      newData[item][`${property}`] = event.target.value;
      setTemp(newData)
    }

    const addField = () => {
        let temp1 = {
            name: 'Convolutional',
            number_of_nodes: '',
            number_of_filters: '',
            kernel_size_x: '3',
            kernel_size_y: '3',
            activation: 'relu',
            learning_rate: '0.0001',
        }
        setTemp([...temp, temp1]);
    }

    const removeField = () => {
        let temp1 = [...temp];
        temp1.pop();
        console.log(temp1);
        setTemp([...temp1])
    }

    


    let array = []
    const submitValues =async (e) => {
        e.preventDefault();
        const values = {
            var1 ,
            temp
        }
        console.log(values);
        const url = 'http://40ac57f9.ngrok.io/api/parameters/'
        fetchCall(url,values); 
        await pause(3000)
        setVision(true);
       }


    return(
        <div  className={classes.root} component={Paper} style={{}}>
                <h2><u>Adjust Parameters</u></h2>
            <Grid container component={Paper} style={{padding: 10}}>
                <Grid item xs={12} sm={8} md={3}  elevation={6} square>
                <Tooltip title="The amount that the weights are updated during training is referred to as the step size or the “learning rate.”" aria-label="add" placement="top">
                    <TextField
                    className={classes.textfield}
                    value={var1.learning_rate}
                    onChange={handleChangeVar}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="dataset"
                    label="Learning Rate"
                    name="learning_rate"
                    
                    />
                </Tooltip>
                    </Grid>

                <Grid item xs={12} sm={8} md={3}  elevation={6} square>
                <Tooltip title="During training, some number of layer outputs are randomly ignored or “dropped out.” This has the effect of making the layer look-like and be treated-like a layer with a different number of nodes and connectivity to the prior layer. " aria-label="add" placement="top">
                    <TextField
                     className={classes.textfield}
                    value={var1.dropout_rate}
                    onChange={handleChangeVar}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="dataset"
                    label="Drop Out Rate"
                    name="dropout_rate"
                    
                    />
                    </Tooltip>
                </Grid>
                <Grid item xs={12} md={3} sm={12}>
                <Tooltip title="It is the size of the input image along the x axis" aria-label="add" placement="top">
                        <TextField
                         className={classes.textfield}
                        value={var1.input_shape_x}
                        onChange={handleChangeVar}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="dataset"
                        label="Input Shape X"
                        name="input_shape_x"
                        
                        />
                        </Tooltip>
                        </Grid>
                        <Grid item xs={12} md={3} sm={12}>
                        <Tooltip title="It is the size of the input image along the y axis" aria-label="add" placement="top">
                        <TextField
                         className={classes.textfield}
                        value={var1.input_shape_y}
                        onChange={handleChangeVar}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="dataset"
                        label="Input Shape Y"
                        name="input_shape_y"
                        
                        />
                        </Tooltip>
                        </Grid>
                        <Grid item xs={12} sm={8} md={3}  elevation={6} square>
                        <Tooltip title=" An epoch is a measure of the number of times all of the training vectors are used once to update the weights." aria-label="add" placement="top">
                          <TextField
                           className={classes.textfield}
                            value={var1.epoch}
                            onChange={handleChangeVar}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="dataset"
                            label="Epoch"
                            name="epoch"
                            
                        />
                        </Tooltip>
                         </Grid>
                        <Grid item xs={12} sm={8} md={3}  elevation={6} square style={{display: 'flex',flexDirection: 'column',marginTop: 38}}>
                        <Tooltip title="Loss Function" aria-label="add" placement="top">
                         <Select style={{paddingRight: 0, textAlign: 'center'}}  className={classes.textfield}  labelId="Loss Function" label="select activation function" id="select" onChange={handleChangeVar} value={var1.loss_function} name="loss_function">
                        <MenuItem value="Sparse_Categorical_CrossEntropy">Sparse_Categorical_CrossEntropy</MenuItem>
                        <MenuItem value="Categorical_CrossEntropy">Categorical_CrossEntropy</MenuItem>
                        <MenuItem value="Binary_CrossEntropy">Binary_CrossEntropy</MenuItem>

                    </Select>
                    </Tooltip>
                    </Grid>
            </Grid>
            <div>
                <div style={{display: 'block',marginTop:20}}>

                <Button  variant="contained" color="secondary"  type="button" onClick={addField} style={{marginRight: 10}}>Add Layer </Button>
                <Button  variant="contained" color="secondary"  type="button" onClick={removeField}>Remove Layer</Button>
            {/* <Button type="submit" onClick={submitValues} variant="contained" color="primary" style={{display: 'block', margin:'20px 20px 20px 0px'}} > Submit Values </Button>
            {!info && vision && <CircularProgress style={{marginTop: 20}}/>} */}
                <div style={{display: 'flex'}}>

            </div>
                </div>
            {temp && show && temp.map((item,key) => (
                <div style={{marginTop: 40}}>
                <h2 style={{marginLeft: 5}}> <u>Hidden Layer {key+1}</u></h2>
                    <Grid container component={Paper} style={{padding: 10}}>
                        <Grid item xs={12} md={3} sm={12}>
                        <Tooltip title="Add" aria-label="add" placement="top">
                            <Select  style={{display: 'flex',flexDirection: 'column',marginTop: 38,paddingRight: 0,textAlign: 'center'}}  className={classes.textfield} key={key} labelId="Select model value" label="select model" id="select" onChange={handleChangeTemp.bind(this,key,'name')} value={item.name}>
                            <MenuItem value="Convolutional">Convolutional</MenuItem>
                            <MenuItem value="Dense">Dense</MenuItem>
                            <MenuItem value="MaxPooling">MaxPooling</MenuItem>
                            </Select>
                            </Tooltip>
                        </Grid>
                        {(item.name === 'Convolutional' ) && 
                            <Grid item xs={12} sm={12} md={3}>
                                {/* <Tooltip title="Add" aria-label="add" placement="top"> */}
                                <TextField
                                    className={classes.textfield}
                                    value={item.number_of_filters}
                                    onChange={handleChangeTemp.bind(this,key,'number_of_filters')}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="dataset"
                                    label="Enter Number of Filters"
                                    name="number_of_filters"
                                />
                                {/* </ToolTip> */}
                            </Grid>}

                            {(item.name === 'Convolutional' || item.name === 'MaxPooling') && 
                           <Fragment>
                            <Grid item xs={12} sm={12} md={3}>
                            <TextField
                                className={classes.textfield}
                                value={item.kernel_size_x}
                                onChange={handleChangeTemp.bind(this,key,'kernel_size_x')}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="dataset"
                                label="Enter Kernel Size for x"
                                name="kernel_size_x"
                            />
                            </Grid>
                            <Grid item xs={12} sm={12} md={3}>
                                    <TextField
                                    className={classes.textfield}
                                    value={item.kernel_size_y}
                                    onChange={handleChangeTemp.bind(this,key,'kernel_size_y')}
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="dataset"
                                    label="Enter Kernel size for y"
                                    name="kernel_size_y"
                                    />
                            
                        </Grid> 
                        </Fragment>}

                            {( item.name === 'Dense') && 
                   
                   
                       <Grid item xs={12} md={3} sm={12}>
                            <TextField
                             className={classes.textfield}
                            value={item.number_of_nodes}
                            onChange={handleChangeTemp.bind(this,key,'number_of_nodes')}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="dataset"
                            label="Enter Number of Nodes"
                            name="number_of_nodes"
                            />
                       </Grid>
                       }
                       {(item.name === 'Convolutional' || item.name === 'Dense') && 
                       <Grid item xs={12} md={3} sm={12} style={{display: 'flex',flexDirection: 'column',marginTop: 38, textAlign: 'center'}}>
                       <FormControl variant="outlined" className={classes.formControl}>
                      
                            <Select  className={classes.textfield} key={key} labelId="demo-simple-select-outlined-label" label="select activation function" id="select" onChange={handleChangeTemp.bind(this,key,'activation')} value={item.activation}>
                            <MenuItem value="relu">relu</MenuItem>
                            <MenuItem value="sigmoid">sigmoid</MenuItem>
                        </Select>
                            </FormControl>
                       
                   </Grid>}
                </Grid> 
              </div>
            ))}
            <div>

            </div>
            <div style={{display: 'flex'}}>

            <Button type="submit" onClick={submitValues} variant="contained" color="primary" style={{display: 'block', margin:'20px 20px 20px 0px'}} > Submit Values </Button>
            {!info && vision && <CircularProgress style={{marginTop: 20}}/>}
            </div>
            {info && <Grid container> 
            <Grid item xs={12} sm={4} md={3}>

                <h4> Confidence Score: <u>{info['accuracy']} </u></h4>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>

                <h4> Validation Accuracy: <u>{info['val_accuracy']} </u></h4>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>

                <h4> Loss: <u>{info['loss']} </u></h4>
            </Grid>
            <Grid item xs={12} sm={4} md={3}>

                <h4> Validation Loss:<u> {info['val_loss']} </u></h4>
            </Grid>


            </Grid>}
            </div>
            
        </div>
    )
}

export default InputField;