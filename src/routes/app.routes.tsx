import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import { HomeProvider } from '../hooks/home';


const AppRoutes: React.FC = () => (
    <Layout>
        <Switch>                        
            <Route path="/" exact component={Home}/>
        </Switch>       
    </Layout>
);

export default AppRoutes;