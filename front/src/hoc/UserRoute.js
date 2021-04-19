import React from 'react';
// eslint-disable-next-line
import { Route, Redirect } from 'react-router-dom';

function UserRoute({ isAuth, component: Component, ...rest }) {
    // console.log('...rest :', rest );
    // console.log('Component :', Component );
    // console.log('isAuth 1 :', isAuth );
    //console.log('props :', props );
    return (
        <Route 
            {...rest} 
            render={(props) => {
                console.log('props :', props );
                console.log('isAuth 2 :', isAuth );
                if(isAuth){
                    return <Component />
                } else {
                   return <Redirect to={{ pathname: "/", state: { from: props.location} }} />
                }
            }} 
        />
    )
}

export default UserRoute;
