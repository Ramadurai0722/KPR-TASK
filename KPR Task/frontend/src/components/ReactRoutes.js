import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../App';
import Cart from './Cart';


const ReactRoutes = () => {
    return (
        <>
            <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/cart" component={Cart} />
            </Switch>
        </>
    );
};

export default ReactRoutes;
