import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Login';

const AppRoutes: React.FC = () => (
    <Layout>
        <Switch>            
            <Route path="/home" exact component={Home}/>            
        </Switch>
    </Layout>
);

export default AppRoutes;