import React from 'react';
import {Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';

export default function (ComposedComponent){

    return (props) => {
        const isAuthenticated = useSelector(state => authState.isAuthenticated);

        if (!isAuthenticated) return <Redirect to = '/login'/>

        return <ComposedComponent {...props} />
    }
}
