import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DirectionCars from '@material-ui/icons/DirectionsCar';
import { Avatar } from '../Avatar.js';
import StyledLoadingButton from '../../common/LoadingButton';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    },

}));

export default function MenuAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleLogout(){
    localStorage.removeItem('token');
    window.location.reload();
  }
  const isLoggedIn = localStorage.getItem('token') ? true : false;
  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
            <div className={classes.title}>
            <IconButton  className={classes.menuButton} color="inherit" aria-label="menu">
            <DirectionCars />
          </IconButton>
          <Typography variant="h6" style={{color:'white', textDecoration: 'none', marginTop: 10}} component={Link} to={"/"}>
            Car Renting
          </Typography>
            </div>
          
          {!isLoggedIn &&  <div>
              <StyledLoadingButton
                color="secondary"
                variant="contained"
                component={Link}
                to={"/login"}
                className="btn navbar-btn"
              >
                LOGIN
              </StyledLoadingButton>
            </div>}
            
          {isLoggedIn && <Avatar handleMenu = {handleMenu}  open={open}  handleClose={handleClose} anchorEl={anchorEl} handleLogout={handleLogout}/> }
        </Toolbar>
      </AppBar>
      {props.children}
    </div>
  );
}
