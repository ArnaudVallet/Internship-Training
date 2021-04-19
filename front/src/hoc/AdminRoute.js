import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Ce HOC component est fait pour privatiser les routes Admin
// Nous allons devoir accéder au store Redux pour récupérer
// les information de l'utilisateur (Token, isAdmin)
import { useSelector } from 'react-redux';

function AdminRoute({ isAuth, component: Component, ...rest }) {

    const isAdmin = useSelector(state => state.auth.isAdmin);

    return (
        <Route 
            {...rest}
            render={(props) => {
                if(isAdmin){
                    return <Component />
                } else {
                    return <Redirect to={{ pathname: "/", state: { from: props.location}}} />
                }
            }}
        />
    )
}

export default AdminRoute;
