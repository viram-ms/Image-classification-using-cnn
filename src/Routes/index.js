import React from 'react';
import {Route, Switch } from 'react-router-dom';
import CssBaseline from "@material-ui/core/CssBaseline";
import Master from "../Master/AppBar.js";
import LandingPage from '../LandingPage';
import Login from '../Onboarding/Login';
import Signup from '../Onboarding/SignUp';
// import List from '../Dashboard/List';
// import Bill from '../Bill/index.js';
// import Transaction from '../Transaction/List';
// import PastTransaction from '../PastTransaction/List';
import Dashboard from '../DashboardImage/index';
import AuthRoute  from './AuthRoute';
import LoginRoute from './LoginRoute';
const Router = () => {
    return (
        <Master>
             <CssBaseline /> 
            <Switch>
                <LoginRoute path="/" exact render={() => <LandingPage />} />
                <LoginRoute exact path="/login" component={Login} />
                <LoginRoute exact path="/signup" render={(props)=> <Signup props={props}/>}/>
                {/* <AuthRoute exact path="/collection" component={List} />
                <AuthRoute exact path="/bill" component={Bill} />
                <AuthRoute exact path="/transaction" component={Transaction} />
                <AuthRoute exact path="/past-transactions" component={PastTransaction} /> */}
                <LoginRoute exact path="/dashboard" component={Dashboard} />
                <Route component={() => "not found"} />
            </Switch>
        </Master> 
    )
}

export default Router;