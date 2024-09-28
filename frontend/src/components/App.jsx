import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import homeApp from './Home'; // Import your components

const App = () => {
    return (
        <BrowserRouter basename="/Solicitud-de-Credito">
            <Switch>
                <Route path="/" exact component={homeApp} /> { }
            </Switch>
        </BrowserRouter>
    );
};

export default App;
