import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Login from '../../assests/login.webp';
import Hidden from "@material-ui/core/Hidden";
import { UseSignUp } from './service';

const useStyles = makeStyles(theme => ({
  root: {
    height: '91vh',
  },
  image: {
    height:'91vh'
  },
  paper: {
    // margin: theme.spacing(8, 4),
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

export default function SignInSide(props) {
  const classes = useStyles();
  const [values, setValues] = useState({ Name: '', EmailId: '', Password: '', PhoneNo: '', AddharNo: ''})
  const {fetchCall} = UseSignUp(props);
  
  const handleChange = (event) => {
    event.preventDefault();
    setValues({...values, [event.target.name]: event.target.value} );
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCall('http://localhost:4000/api/auth/register', JSON.stringify(values));
  }
  console.log(props);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Hidden mdDown>
        <Grid item xs={false} sm={4} md={6} >
        <img src={Login} alt="login" className={classes.image} />
      </Grid>
      </Hidden>
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
              value={values.Name}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Full Name"
              name="Name"
              autoFocus
            />
            <TextField
              value={values.EmailId}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="EmailId"
              autoComplete="email"
              autoFocus
            />
            <TextField
              value={values.Password}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
             <TextField
              value={values.PhoneNo}
              onChange={handleChange}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="number"
              label="Phone Number"
              name="PhoneNo"
              autoFocus
            /> 
            <TextField
            value={values.AddharNo}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="adhar"
            label="Adhar Card Number"
            name="AddharNo"
            autoFocus
          />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              // type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}