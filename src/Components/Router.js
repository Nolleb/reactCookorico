import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Connexion from './Connexion';
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component= {Connexion}/>
            <Route exact path="/home/:pseudo" component= {App}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default Router;