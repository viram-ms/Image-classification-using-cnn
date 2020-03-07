import React from "react";
import { Route, Redirect } from "react-router-dom";

const LoginRoutePure = ({ component, render,  ...rest }) => {
const isLoggedIn = localStorage.getItem('token') ? true : false;
console.log(isLoggedIn);
  if (isLoggedIn) {
    return (
      <Route
        {...rest}
        render={props => (
          <Redirect
            to={{
              pathname: "/collection",
              state: { from: props.location }
            }}
          />
        )}
      />
    );
  } else {
    return <Route {...rest} component={component} render={render} />;
  }
};

export default LoginRoutePure;
