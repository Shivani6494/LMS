import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

const PrivateRoute = ({component : Component , ...rest }) => {
    const isAuthenticated = useSelector(state => state.authState.isAuthenticated);

    return <Route {...rest} render = {() => isAuthenticated ? <Component/> : <Redirect to = '/login'/> } />

}

export default PrivateRoute;