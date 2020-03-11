import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import Auth from './Auth.js'



export const RouteAuthenticate = ({ component: Component, ...rest }) => {
    const comp = (props) => {
        //console.log(props)
        return (!Auth.getAuth())
            ? (<Component {...props} />)
            : (<Redirect to={`/user?User_id=${props.location}`} />)
    };
    return (<Route {...rest} render={comp} />);
}

export const RoutePrivate = ({ component: Component, ...rest }) => {
    const comp = (props) => {
        console.log(props);
        return (Auth.getAuth())
            ? (<Component {...props} />)
            : (<Redirect to={`/user`} />)
    };
    return (<Route {...rest} render={comp} />);
}