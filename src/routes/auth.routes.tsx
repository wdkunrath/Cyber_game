import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Loader from '../pages/Loader';

const AuthRoutes: React.FC = () => (    
    <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/login-response/:code" exact component={Loader}/>
    </Switch>   
);

export default AuthRoutes;