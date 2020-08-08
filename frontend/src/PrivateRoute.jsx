import React from "react";
import { Route, Redirect } from "react-router-dom";

/*
    This Component is use to replace
    Route from react-router-dom
    ---
    It authenticates and redirects based on
    the component passed as props to it.
*/
export default function PrivateRoute({
  isAuth,
  component: Component,
  ...rest //all other props
}) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Component {...rest} {...props} /> : <Redirect to="/login" />
      }
    />
  );
}