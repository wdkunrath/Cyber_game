import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../pages/Login';
import Loader from '../pages/Loader';

const AppRoutes: React.FC = () => (
    <Layout>
        <Switch>            
            <Route path="/" exact component={Home}/>            
        </Switch>
    </Layout>
);

export default AppRoutes;