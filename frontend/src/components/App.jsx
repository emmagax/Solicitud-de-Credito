import React from 'react';
import { BrowserRouter, Route, } from 'react-router-dom';
import homeApp from './Home'; // Import your components

const App = () => {
    return (
        <BrowserRouter basename="/Solicitud-de-Credito">
            <Route path="/" exact component={homeApp} /> { }
        </BrowserRouter>
    );
};

export default App;
